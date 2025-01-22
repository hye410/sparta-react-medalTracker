// 1. input value에 02,003과 같은 값이 들어오면 불필요한 0을 지워주는 역할
// 2. 0을 지웠다가 다시 0으로 작성 시 input 특성 상 string으로 변하기 때문에 Numer형으로 바꿔서 반환함 
export const removeInvalidZero = (string) => {
  return (Number(string[0]) === 0) ? Number(string.replace(/^0+/,"")) : Number(string);
}