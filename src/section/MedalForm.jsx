import React, {useState,useMemo, useCallback} from 'react'
import TextField from '../components/TextField';
import Button from '../components/Button';
import { inputData,buttonData } from '../data/medalFormLayoutData';
import { getTrimmedText } from '../utils/getTrimmedString';
import { setLocalStorage } from '../utils/handleLocalStorage.js';
import { checkMedalValidation, checkCountryNameValidation } from '../utils/checkValidation.js';
import { INIT_FORM_DATA, EVENT_TYPE, LOCAL_MEDAL_LIST_KEY } from '../constant/constant.js';
import { removeInvalidZero } from '../utils/removeInvalidZero.js';

const { CREATE, UPDATE } = EVENT_TYPE;

const MedalForm = ({medalList,setMedalList}) => {
  const [formData, setFormData] = useState(INIT_FORM_DATA); // 사용자가 입력한 input data를 받음

  // 이벤트 이후의 동작을 처리하는 함수
  const handleMedalList = (newList, type) => {
    setMedalList(newList);
    setLocalStorage(LOCAL_MEDAL_LIST_KEY,newList);
    alert(`${type === CREATE ? '추가가' : '수정이'} 완료되었습니다.`);
    setFormData(INIT_FORM_DATA);
  }
  
  // 메달 리스트를 생성하는 함수
  const createMedalList = () => {
    const { country, gold, silver, bronze } = formData;

    const parseFormData = {
      id : crypto.randomUUID() ?? new Date().getTime(),
      country : getTrimmedText(country),
      gold : removeInvalidZero(gold),
      silver : removeInvalidZero(silver),
      bronze : removeInvalidZero(bronze)
    };
    const newMedalList = [...medalList, parseFormData];

    handleMedalList(newMedalList,CREATE)
  };

  // 메달 리스트를 업데이트(수정)하는 함수
  const updateMedalList = () => {
    const { country, gold, silver, bronze } = formData;
    
    const parseFormData = { 
      gold : removeInvalidZero(gold),
      silver : removeInvalidZero(silver),
      bronze : removeInvalidZero(bronze)
    };
    
    const newMedalList = medalList.map((list) => 
      list.country === country ? {...list, ...parseFormData} : list      
    );
    
    handleMedalList(newMedalList, UPDATE);
  };

  // 이벤트 동작 전 유효성 검사를 하는 함수
  const checkValidation = (type) => {
    // 국가명에 대한 유효성 검사
    const { isValid : isValidName , errorMessage : nameErrorMsg } = checkCountryNameValidation(medalList, formData, type);
    if(!isValidName) return alert(nameErrorMsg);
    
    // 메달에 대한 유효성 검사
    const medals = {...formData};
    delete medals.country;   
    const { isValid, errorMessage } = checkMedalValidation(medals);
    if(!isValid) return alert(errorMessage); 
    
    // 유효성 검사 통과 시 타입에 따른 함수 실행
    if(isValidName && isValid) type === CREATE ? createMedalList() : updateMedalList();
  };

  // 버튼 클릭 시 동작하는 함수
  const handleOnSubmit = (e) =>{
    const { value } = e.target;
    e.preventDefault();
    value === UPDATE ? checkValidation(UPDATE) : checkValidation(CREATE);
  };

  // input 박스 이벤트 발생 시 동작하는 함수
  const handleOnChange = useCallback((event,id) => {
    const { value } = event.target;
    setFormData((prev) => ({...prev,[id]:value}))
  },[]);

  const searchInputData = useMemo(() => inputData(formData,handleOnChange),[formData]);
  const eventButtonData = buttonData(handleOnSubmit);

  return (
    <form className="medalForm" onSubmit={handleOnSubmit}>
      {
        searchInputData.map((value) => (
        <TextField
          key={value.id}
          id={value.id} 
          title={value.title}
          type={value.type}
          value={value.value}
          minimum={value.minimumValue}
          handleOnChange={value.changeFunc}
        />))
      }
      {
        eventButtonData.map(({buttonName, type, value, clickEvent , customeStyle}) =>(
          <Button
            key={`${buttonName}_button`}
            name={buttonName}
            type={type}
            value={value}
            customStyle={customeStyle}
            handleOnClick={clickEvent}
          />
        ))
      }
      </form>
  )
}

export default MedalForm;
