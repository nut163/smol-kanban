const localStorageData = window.localStorage;

function storeData(key, data) {
  localStorageData.setItem(key, JSON.stringify(data));
}

function retrieveData(key) {
  const data = localStorageData.getItem(key);
  return data ? JSON.parse(data) : null;
}

export { storeData, retrieveData, localStorageData };