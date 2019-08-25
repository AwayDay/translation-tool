import { Article } from '../types/ArticleTypes';

const DB_NAME = 'MyTestDatabase';
const OBJECT_STORE_NAME = 'articles';

const save = (article: Article, callback?: (id: string) => void): void => {
  if (!window.indexedDB) {
    window.alert(
      "Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available."
    );
  }
  const request = window.indexedDB.open(DB_NAME);

  request.onerror = function(event) {
    alert('Database openning error');
  };
  request.onsuccess = function(event) {
    const db = request.result;
    const transaction = db.transaction([OBJECT_STORE_NAME], 'readwrite');
    transaction.oncomplete = function(event) {
      alert('All done!');
    };

    transaction.onerror = function(event) {
      // Don't forget to handle errors!
    };

    const store = transaction.objectStore(OBJECT_STORE_NAME);
    store.add(article);
  };

  request.onupgradeneeded = function(event) {
    const db = request.result;
    const objectStore = db.createObjectStore(OBJECT_STORE_NAME, {
      keyPath: 'id',
    });

    objectStore.transaction.oncomplete = function(event) {
      const customerObjectStore = db
        .transaction(OBJECT_STORE_NAME, 'readwrite')
        .objectStore(OBJECT_STORE_NAME);
      customerObjectStore.add(article);
    };
  };
};

const select = (
  key: string,
  success: (article: Article) => void,
  error: () => void
): void => {
  if (!window.indexedDB) {
    window.alert(
      "Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available."
    );
  }
  const request = window.indexedDB.open(DB_NAME);

  request.onerror = function(event) {
    alert('Database openning error');
  };
  request.onsuccess = function(event) {
    const db = request.result;
    const transaction = db.transaction([OBJECT_STORE_NAME]);
    const objectStore = transaction.objectStore(OBJECT_STORE_NAME);
    const articleRequest = objectStore.get(key);
    articleRequest.onsuccess = function(successEvent) {
      if (!successEvent.target) {
        error();
        return;
      }
      console.debug(successEvent.target.result);
      success(successEvent.target.result);
    };

    articleRequest.onerror = function(event) {
      // Don't forget to handle errors!
    };
  };

  request.onupgradeneeded = function(event) {
    const db = request.result;
    db.createObjectStore(OBJECT_STORE_NAME, {
      keyPath: 'id',
    });
    error();
  };
};

const selectAll = (success: (article: Article[]) => void): void => {
  if (!window.indexedDB) {
    window.alert(
      "Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available."
    );
  }
  const request = window.indexedDB.open(DB_NAME);

  request.onerror = function(event) {
    alert('Database openning error');
  };
  request.onsuccess = function(event) {
    const db = request.result;
    var objectStore = db
      .transaction(OBJECT_STORE_NAME)
      .objectStore(OBJECT_STORE_NAME);

    const articles: Article[] = [];
    objectStore.openCursor().onsuccess = function(event) {
      var cursor = event.target.result;
      if (cursor) {
        console.debug(cursor.value);
        articles.push(cursor.value);
        cursor.continue();
      } else {
        success(articles);
      }
    };
  };
  request.onupgradeneeded = function(event) {
    const db = request.result;
    db.createObjectStore(OBJECT_STORE_NAME, {
      keyPath: 'id',
    });
    success([]);
  };
};

export { save, select, selectAll };
