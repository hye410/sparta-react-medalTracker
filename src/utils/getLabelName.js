import { INPUT_VALUES } from "../constant/constant";

// value를 받아 해당 value에 해당하는 메달 이름을 반환하는 함수
const { COUNTRY,GOLD,SILVER,BRONZE } = INPUT_VALUES;
export const getLabelName = (key) => {
  switch (key) {
    case COUNTRY.value :
      return COUNTRY.name;
    case GOLD.value :
      return GOLD.name;
    case SILVER.value :
      return SILVER.name;
    case BRONZE.value :
      return BRONZE.name;
    default :
      return '';
  }
}