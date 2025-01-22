import { INPUT_VALUES } from "../constant/constant";

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