import { Article } from '../types/ArticleTypes';

const DB_NAME = 'MyTestDatabase';
const OBJECT_STORE_NAME = 'articles';

const openDb = new Promise((resolve: (db: IDBDatabase) => void, reject: (message: string) => void) => {
  if (!window.indexedDB) {
    reject(`Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.`);
  }

  const request = window.indexedDB.open(DB_NAME);

  request.onerror = function(event) {
    reject(`Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.`);
  };

  request.onsuccess = function(event) {
    const db = request.result;
    resolve(db);
  };

  request.onupgradeneeded = function(event) {
    const db = request.result;
    const objectStore = db.createObjectStore(OBJECT_STORE_NAME, {
      keyPath: 'id',
    });
    objectStore.transaction.oncomplete = function(event) {
      resolve(db);
    };
  };
});

const save = (article: Article) => {
  return new Promise((resolve: (article: Article) => void, reject: (message: string) => void) => {
    openDb.then(db => {
      const transaction = db.transaction([OBJECT_STORE_NAME], 'readwrite');
      transaction.oncomplete = function(event) {
        resolve(article);
      };
  
      transaction.onerror = function(event) {
        reject('fail');
      };
  
      const store = transaction.objectStore(OBJECT_STORE_NAME);
      store.add(article);
    }).catch(message => {
      reject(message);
    });
  });
};

const select = (key: string) => {
  return new Promise((resolve: (article: Article) => void, reject: (message: string) => void) => {
    openDb.then(db => {
      const request = db
        .transaction(OBJECT_STORE_NAME)
        .objectStore(OBJECT_STORE_NAME)
        .get(key);
      request.onsuccess = event => {
        if (!request.result) {
          reject('no result');
          return;
        }
        console.debug(request.result);
        resolve(request.result);
      };
    }).catch(message => {
      reject(message);
    });
  });
};

const selectAll = () => {
  return new Promise((resolve: (article: Article[]) => void, reject: (message: string) => void) => {
    openDb.then(db => {
      const articles: Article[] = [];
      var request = db
        .transaction(OBJECT_STORE_NAME)
        .objectStore(OBJECT_STORE_NAME)
        .openCursor();
      request.onsuccess = event => {
        var cursor = request.result;
        if (cursor) {
          console.debug(cursor.value);
          articles.push(cursor.value);
          cursor.continue();
        } else {
          console.log('cursor end');
          resolve(articles);
        }
      };
    }).catch(message => {
      reject(message);
    });
  });
};

export { save, select, selectAll };
