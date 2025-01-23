import { INPUT_VALUES } from "../constant/constant";

const { COUNTRY, GOLD, SILVER, BRONZE } = INPUT_VALUES;


export const tableHead = [COUNTRY.name,GOLD.name,SILVER.name,BRONZE.name,'합계','액션'];


export const sortList = [
  {
    text : `${COUNTRY.name} 순`,
    value : COUNTRY.value
  },
  {
    text : `${GOLD.name} 순`,
    value : GOLD.value
  },
  {
    text : `${SILVER.name} 순`,
    value : SILVER.value
  },
  {
    text : `${BRONZE.name} 순`,
    value : BRONZE.value
  },
  {
    text : '합계 순',
    value : 'sum'
  }
]