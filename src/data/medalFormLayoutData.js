export const inputData = (data,changeFunc) => [
  {
    id : "country",
    title: "국가명",
    type : "text",
    value : data.country,
    changeFunc: changeFunc
  },
  {
    id : "gold",
    title: "금메달",
    type : "number",
    value : data.gold,
    minimumValue : 0,
    changeFunc: changeFunc
  },
  {
    id : "silver",
    title: "은메달",
    type : "number",
    value : data.silver,
    minimumValue : 0,
    changeFunc: changeFunc
  },
  {
    id : "bronze",
    title: "동메달",
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