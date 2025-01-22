import React, {useState,useMemo, useCallback} from 'react'
import TextField from '../components/TextField';
import Button from '../components/Button';
import { inputData,buttonData } from '../data/medalFormLayoutData';
import { getLabel } from '../utils/getLabelName';
import { removeAllBlank, getTrimmedText } from '../utils/getTrimmedString';

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
    setMedalList((prev) => (
      [...prev, {...formData, country : getTrimmedText(formData.country), id : crypto.randomUUID()}]
    ));
    setFormData(INIT_DATA);
  };

  const updateMedalList = () => {
    const { country, gold, silver, bronze } = formData;

    const newMedalList = medalList.map((list) => 
      list.country === country ? 
      {...list, gold, silver, bronze} 
      : list
    );

    setMedalList(newMedalList);
    setFormData(INIT_DATA);
  };

  const checkValidation = (type) => {
    const medals = {...formData};
    delete medals.country;
    if(removeAllBlank(formData.country).length === 0) return alert('국가명을 입력해 주세요.');
    if(Object.values(medals).every(number => !number)) return alert('모든 메달의 개수가 0일  수 없습니다.');
    else {
      alert(`${type === 'update' ? '수정이' : '추가가'} 완료되었습니다.`);
      type === 'create' ? createMedalList() : updateMedalList();
    }
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
