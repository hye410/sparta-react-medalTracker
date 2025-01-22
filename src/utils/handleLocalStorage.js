export const getLocalStorage = () => {
  const storageData = localStorage.getItem('olympic');
  return JSON.parse(storageData) ?? new Array();
}

export const setLocalStorage = (key,values) => {
  const stringifyValues = JSON.stringify(values);
  localStorage.setItem(key,stringifyValues);
}

