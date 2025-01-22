
export const getLocalStorage = (key) => {
  const storageData = localStorage.getItem(key);
  return JSON.parse(storageData) ?? new Array();
}

export const setLocalStorage = (key,values) => {
  const stringifyValues = JSON.stringify(values);
  localStorage.setItem(key,stringifyValues);
}

