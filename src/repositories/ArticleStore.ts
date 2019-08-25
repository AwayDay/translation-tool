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

export { save };
