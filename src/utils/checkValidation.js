import { EVENT_TYPE } from "../constant/constant";
import { getLabelName } from "./getLabelName";
import { removeAllBlank } from "./getTrimmedString";

const { CREATE, UPDATE } = EVENT_TYPE;

// 메달의 유효성 검사를 실행하는 함수
export const checkMedalValidation = (medals) => {
  let isValid = true;
  let errorMessage = null;
  let inValidMedals = [];

  for( const [key,value] of Object.entries(medals) ) {
    // 메달의 개수가 빈 칸일 경우
    if(value.length === 0) {
      isValid = false;
      errorMessage = `${getLabelName(key)}의 개수를 입력해 주세요.`;
      return { isValid, errorMessage }
    }

    // 메달의 개수가 0이면 inValidMedals에 추가해서 다음 유효성 검사(아래)를 실행
    if(Number(value) === 0) inValidMedals.push(0);
  }

  // 메달의 개수가 모두 0인지 검사  
  if(inValidMedals.length === Object.keys(medals).length) {
    isValid = false;
    errorMessage = '메달이 최소 하나는 있어야 합니다.'
  }

  return { isValid, errorMessage }
}



// 국가명의 유효성 검사를 실행하는 함수
export const checkCountryNameValidation = (originList, addedTarget, type) => {
  let isValid = true;
  let errorMessage = null;
  const { country } = addedTarget;
  // 국가명을 입력지 않았는지 확인
  if(removeAllBlank(country).length === 0) {
    isValid = false;
    errorMessage = '국가명을 입력해 주세요.'
    return { isValid, errorMessage };
  } 

  // 이미 추가된 국가인지 확인
  const hasOriginList = originList.findIndex((list) => list.country === country) !== -1; 

  // 이벤트 타입에 따라 다른 처리
  if(type === CREATE && hasOriginList) {
    isValid = false;
    errorMessage = '이미 추가된 국가입니다.';
  } 

  if(type === UPDATE && !hasOriginList) {
    isValid = false;
    errorMessage = originList.length === 0 ? '추가된 국가가 없습니다. 먼저 국가를 추가해 주세요.' : '해당 국가가 리스트에 없습니다.';
  }

  return { isValid, errorMessage } 
}