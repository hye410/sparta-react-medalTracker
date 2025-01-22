import React, {useState,useMemo, useCallback} from 'react'
import TextField from '../components/TextField';
import Button from '../components/Button';
import { inputData,buttonData } from '../data/SearchFieldLayoutData';
import { getLabel } from '../utils/getLabelName';
import { removeAllBlank, getTrimmedText } from '../utils/getTrimmedString';

const initData = {
  country : '',
  gold : 0,
  silver : 0,
  bronze : 0
}

const MedalForm = ({setMedalList}) => {
  const [formData, setFormData] = useState(initData)

  const checkAvaliableData = () => {
    let invalidValue = [];
    for( const [key,value] of Object.entries(formData)) {
      if(!value || !removeAllBlank(value)) invalidValue.push(getLabel(key));
    }
  
    if(invalidValue.length !== 0) alert(`${invalidValue.join(',')}을 입력해 주세요.`)
    else {
      alert('오키!!!');
      setMedalList((prev) => ([...prev, {...formData, country : getTrimmedText(formData.country), id : crypto.randomUUID()}]));
      setFormData(initData);
    }
  }

  const handleOnSubmit = (e) =>{
    e.preventDefault();
    checkAvaliableData();
  }

  const handleOnChange = useCallback((event,id) => {
    const { value } = event.target;
    setFormData((prev) => ({...prev,[id]:value}))
  },[])

  const searchInputData = useMemo(() => inputData(formData,handleOnChange),[formData])
  const eventButtonData = buttonData(handleOnSubmit)

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
        eventButtonData.map(({buttonName, type, customeStyle}) =>(
          <Button
            key={`${buttonName}_button`}
            name={buttonName}
            type={type}
            customStyle={customeStyle}
          />
        ))
      }
      </form>
  )
}

export default MedalForm
