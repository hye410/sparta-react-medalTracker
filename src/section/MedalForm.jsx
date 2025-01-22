import React, {useState,useMemo, useCallback} from 'react'
import TextField from '../components/TextField';
import Button from '../components/Button';
import { inputData,buttonData } from '../data/medalFormLayoutData';
import { getTrimmedText } from '../utils/getTrimmedString';
import { setLocalStorage } from '../utils/handleLocalStorage.js';
import { checkMedalValidation, checkCountryNameValidation } from '../utils/checkValidation.js';
import { INIT_FORM_DATA, EVENT_TYPE, LOCAL_MEDAL_LIST_KEY } from '../constant/constant.js';

const { CREATE, UPDATE } = EVENT_TYPE;

const MedalForm = ({medalList,setMedalList}) => {
  const [formData, setFormData] = useState(INIT_FORM_DATA); // 사용자가 입력한 input data를 받음
  
  // 메달 리스트를 생성하는 함수
  const createMedalList = () => {
    const { country } = formData;
      const newMedalList = [...medalList, {...formData,  country : getTrimmedText(country), id : crypto.randomUUID() ?? new Date().getTime()}];
      setMedalList(newMedalList);
      setLocalStorage(LOCAL_MEDAL_LIST_KEY,newMedalList);
      alert('추가가 완료되었습니다.')
      setFormData(INIT_FORM_DATA);
  };

  const updateMedalList = () => {
    const { country, gold, silver, bronze } = formData;
      const newMedalList = medalList.map((list) => {
        if(list.country === country) return {...list, gold, silver, bronze};
        else return list;
      }
    );
    setMedalList(newMedalList);
    setLocalStorage(LOCAL_MEDAL_LIST_KEY,newMedalList);
    alert('수정이 완료되었습니다.');
    setFormData(INIT_FORM_DATA);
  };

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

  const handleOnSubmit = (e) =>{
    e.preventDefault();
    checkValidation(CREATE);
  };

  const handleOnUpdate = (e) => {
    checkValidation(UPDATE);
  }; 

  const handleOnChange = useCallback((event,id) => {
    const { value } = event.target;
    setFormData((prev) => ({...prev,[id]:value}))
  },[]);

  const searchInputData = useMemo(() => inputData(formData,handleOnChange),[formData]);
  const eventButtonData = buttonData(handleOnUpdate);

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
