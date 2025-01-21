import React, {useState} from 'react'
import TextField from '../components/TextField';
import Button from '../components/Button';
import { inputData,buttonData } from '../data/SearchFieldLayoutData';
import { getLabel } from '../utils/getLabelName';

const SearchField = ({setMedalList}) => {
  const [searchData, setSearchData] = useState({
    country : '',
    gold : 0,
    silver : 0,
    bronze : 0
  })

  const checkAvaliableData = () => {
    let invalidValue = [];
    for( const [key,value] of Object.entries(searchData)) {
      if(!value) invalidValue.push(getLabel(key));
    }
  
    if(invalidValue.length !== 0) alert(`${invalidValue.join(',')}을 입력해 주세요.`)
    else {
      alert('오키!!!');
      setMedalList((prev) => ([...prev, {...searchData, id : crypto.randomUUID()}]));
    }
  }

  const handleOnSubmit = (e) =>{
    e.preventDefault();
    checkAvaliableData();
  }

  const handleOnChange = (event,id) => {
    const { value } = event.target;
    setSearchData((prev) => ({...prev,[id]:value}))
  }

  const searchInputData = inputData(searchData,handleOnChange);
  const eventButtonData = buttonData(handleOnSubmit)

  return (
    <form className="searchField" onSubmit={handleOnSubmit}>
      {
        searchInputData.map((value) => (
        <TextField
          key={value.id}
          id={value.id} 
          title={value.title}
          type={value.type}
          value={value.value}
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

export default SearchField
