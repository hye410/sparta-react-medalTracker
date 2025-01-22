
// 로컬스토리지에 저장된 데이터를 가져오는 함수
export const getLocalStorage = (key) => {
  const storageData = localStorage.getItem(key);
  return JSON.parse(storageData) ?? new Array();
}

// 로컬스토리지에 데이터를 추가하는 함수
export const setLocalStorage = (key,values) => {
  const stringifyValues = JSON.stringify(values);
  localStorage.setItem(key,stringifyValues);
}

