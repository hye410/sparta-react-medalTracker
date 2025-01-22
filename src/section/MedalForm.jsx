import React, {useState,useMemo, useCallback} from 'react'
import TextField from '../components/TextField';
import Button from '../components/Button';
import { inputData,buttonData } from '../data/medalFormLayoutData';
import { removeAllBlank, getTrimmedText } from '../utils/getTrimmedString';
import { setLocalStorage } from '../utils/handleLocalStorage.js';


const INIT_DATA = {
  country : '',
  gold : 0,
  silver : 0,
  bronze : 0
}

const MedalForm = ({
  medalList,
  setMedalList
}) => {
  const [formData, setFormData] = useState(INIT_DATA);

  const createMedalList = () => {
    const { country } = formData;
    const hasMedalList = medalList.findIndex((list) => list.country === country) !== -1 ;
    if(hasMedalList) return alert('이미 추가된 국가입니다.');
    const newMedalList = [...medalList, {...formData,  country : getTrimmedText(formData.country), id : crypto.randomUUID()}]
    setMedalList(newMedalList);
    setLocalStorage('olympic',newMedalList);
    alert('추가가 완료되었습니다.')
    setFormData(INIT_DATA);
  };

  const updateMedalList = () => {
    const { country, gold, silver, bronze } = formData;
    const hasNotMedalList = medalList.findIndex((list) => list.country === country) === -1 ;
    if(hasNotMedalList) return alert(medalList.length === 0 ? '추가된 국가가 없습니다. 먼저 국가를 추가해 주세요.' : '해당 국가가 리스트에 없습니다.');
    const newMedalList = medalList.map((list) => {
        if(list.country === country) return {...list, gold, silver, bronze};
        else return list;
      }
    );

    setMedalList(newMedalList);
    setLocalStorage('olympic',newMedalList);
    alert('수정이 완료되었습니다.');
    setFormData(INIT_DATA);
  };

  const checkValidation = (type) => {
    const medals = {...formData};
    delete medals.country;
    if(removeAllBlank(formData.country).length === 0) return alert('국가명을 입력해 주세요.');
    if(Object.values(medals).every(number => !number)) return alert('모든 메달의 개수가 0일 수 없습니다.');
    else type === 'create' ? createMedalList() : updateMedalList();
    
  };

  const handleOnSubmit = (e) =>{
    e.preventDefault();
    checkValidation('create');
  };

  const handleOnUpdate = (e) => {
    checkValidation('update');
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
