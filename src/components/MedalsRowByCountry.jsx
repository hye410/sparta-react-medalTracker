import React from 'react'
import Button from './Button';
import { setLocalStorage } from '../utils/handleLocalStorage';
import { INPUT_VALUES, LOCAL_MEDAL_LIST_KEY } from '../constant/constant';


const { COUNTRY, GOLD, SILVER, BRONZE } = INPUT_VALUES;

const buttonStyle = {
  backgroundColor : 'red',
  color : '#fff',
  border : 'none',
  padding : '5px 10px',
  cursor : 'pointer'
}

const MedalsRowByCountry = ({rows, setNewRows}) => {
  if(rows.length === 0 ) return;

  // 데이터를 삭제하는 함수
  const handleDelete = (event) => {
    const { value } = event.target;
    const newRows = rows.filter(row => row.id !== value);
    setNewRows(newRows);
    setLocalStorage(LOCAL_MEDAL_LIST_KEY,newRows);
  }

  rows.forEach(row => row['sum'] = Number(row[GOLD.value]) + Number(row[SILVER.value]) + Number(row[BRONZE.value])); // 테이블을 그릴 때 총 합계를 계산하여 같이 그린다.

  return rows.map((row,index) => (
        <tr key={`medalTableRow_${index}`} className={index % 2 === 0 ? "even" : "odd"}>
        <td>{row[COUNTRY.value]}</td>
        <td>{row[GOLD.value]}</td>
        <td>{row[SILVER.value]}</td>
        <td>{row[BRONZE.value]}</td>
        <td>{row.sum}</td>
        <td>
          <Button
            customStyle={buttonStyle}
            name = "삭제"
            value={row.id}
            handleOnClick={handleDelete}
          />
        </td>
      </tr>
      ))
}

export default MedalsRowByCountry
