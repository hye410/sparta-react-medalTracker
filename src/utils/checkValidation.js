import { EVENT_TYPE } from "../constant/constant";
import { getLabel } from "./getLabelName";
import { removeAllBlank } from "./getTrimmedString";

const { CREATE, UPDATE } = EVENT_TYPE;


export const checkMedalValidation = (medals) => {
  let isValid = true;
  let errorMessage = null;
  let inValidMedals = [];

  for( const [key,value] of Object.entries(medals) ) {
    if(value.length === 0) {
      isValid = false;
      errorMessage = `${getLabel(key)}의 개수를 입력해 주세요.`;
      return { isValid, errorMessage };
    }
    if(Number(value) === 0) inValidMedals.push(0);
  }

  if(inValidMedals.length === Object.keys(medals).length) {
    isValid = false;
    errorMessage = '메달이 최소 하나는 있어야 합니다.'
    return { isValid, errorMessage }
  }

  return { isValid, errorMessage }
}

export const checkCountryNameValidation = (originList, addedTarget, type) => {
  let isValid = true;
  let errorMessage = null;
  // 빈 배열인지 확인
  const { country } = addedTarget;
  if(removeAllBlank(country).length === 0) {
    isValid = false;
    errorMessage = '국가명을 입력해 주세요.'
    return { isValid, errorMessage };
  }
 
  // 추가되어있는 국가인지 확인
  const hasOriginList = originList.findIndex((list) => list.country === country) !== -1; 

  if(type === CREATE && hasOriginList) {
    isValid = false;
    errorMessage = '이미 추가된 국가입니다.';
    return { isValid, errorMessage };
  } 
  if(type === UPDATE && !hasOriginList) {
    isValid = false;
    errorMessage = originList.length === 0 ? '추가된 국가가 없습니다. 먼저 국가를 추가해 주세요.' : '해당 국가가 리스트에 없습니다.';
    return { isValid, errorMessage };
  }
  

  return { isValid, errorMessage } 
}