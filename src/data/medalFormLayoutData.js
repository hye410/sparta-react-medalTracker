import { EVENT_TYPE, INPUT_VALUES } from "../constant/constant";

const { COUNTRY, GOLD, SILVER, BRONZE } = INPUT_VALUES;
const { CREATE, UPDATE } = EVENT_TYPE;

export const inputData = (data,changeFunc) => [
  {
    id : COUNTRY.value,
    title: COUNTRY.name,
    type : "text",
    value : data[COUNTRY.value],
    changeFunc: changeFunc
  },
  {
    id : GOLD.value,
    title: GOLD.name,
    type : "number",
    value : data[GOLD.value],
    minimumValue : 0,
    changeFunc: changeFunc
  },
  {
    id : SILVER.value,
    title: SILVER.name,
    type : "number",
    value : data[SILVER.value],
    minimumValue : 0,
    changeFunc: changeFunc
  },
  {
    id : BRONZE.value,
    title: BRONZE.name,
    type : "number",
    value : data[BRONZE.value],
    minimumValue : 0,
    changeFunc: changeFunc
  },
];


export const buttonData = (clickFunc) => [
  {
    buttonName : "국가추가",
    type : "submit",
    value : CREATE,
    customeStyle : {
      marginRight : '15px'
    }
  },
  {
    buttonName : "업데이트",
    type : "button",
    clickEvent : clickFunc,
    value : UPDATE
  }
]