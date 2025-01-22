export const removeFirstZero = (string) => {
  if(!string) return;
  return Number(string[0]) === 0 ? string.replace(/^0+/,"") : string;
}