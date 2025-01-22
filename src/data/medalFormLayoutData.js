import { INPUT_VALUES } from "../constant/constant";

const { COUNTRY, GOLD, SILVER, BRONZE } = INPUT_VALUES;

export const inputData = (data,changeFunc) => [
  {
    id : COUNTRY.value,
    title: COUNTRY.name,
    type : "text",
    value : data.country,
    changeFunc: changeFunc
  },
  {
    id : GOLD.value,
    title: GOLD.name,
    type : "number",
    value : data.gold,
    minimumValue : 0,
    changeFunc: changeFunc
  },
  {
    id : SILVER.value,
    title: SILVER.name,
    type : "number",
    value : data.silver,
    minimumValue : 0,
    changeFunc: changeFunc
  },
  {
    id : BRONZE.value,
    title: BRONZE.name,
    type : "number",
    value : data.bronze,
    minimumValue : 0,
    changeFunc: changeFunc
  },
];


export const buttonData = (clickFunc) => [
  {
    buttonName : "국가추가",
    type : "submit",
    customeStyle : {
      marginRight : '15px'
    }
  },
  {
    buttonName : "업데이트",
    clickEvent : clickFunc,
    value : "update"
  }
]