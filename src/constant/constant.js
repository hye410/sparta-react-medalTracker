
export const EVENT_TYPE = {
  CREATE : 'create',
  UPDATE : 'update'
}

const MEDALS = {
  GOLD : 'gold',
  SILVER : 'silver',
  BRONZE : 'bronze'
}

export const INPUT_VALUES = {
  GOLD : {
    name : '금메달',
    value : MEDALS.GOLD
  },
  SILVER : {
    name : '은메달',
    value : MEDALS.SILVER
  },
  BRONZE : {
    name : '동메달',
    value : MEDALS.BRONZE
  },
  COUNTRY : {
    name : '국가명',
    value : 'country'
  },
}

export const INIT_FORM_DATA = {
  [INPUT_VALUES.COUNTRY.value] : '',
  [MEDALS.GOLD] : 0,
  [MEDALS.SILVER] : 0,
  [MEDALS.BRONZE] : 0
}

export const LOCAL_MEDAL_LIST_KEY = "olympic";

