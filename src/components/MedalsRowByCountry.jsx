import React from 'react'
import Button from './Button';
import { setLocalStorage } from '../utils/handleLocalStorage';

const buttonStyle = {
  backgroundColor : 'red',
  color : '#fff',
  border : 'none',
  padding : '5px 10px',
  cursor : 'pointer'
}

const MedalsRowByCountry = ({rows, setNewRows}) => {
  if(rows.length === 0 ) return;

  const handleDelete = (event) => {
    const { value } = event.target;
    const newRows = rows.filter(row => row.id !== value);
    setNewRows(newRows);
    setLocalStorage('olympic',newRows);
  }

  return rows.map((row,index) => (
        <tr key={`medalTableRow_${index}`} className={index % 2 === 0 ? "even" : "odd"}>
        <td>{row.country}</td>
        <td>{row.gold}</td>
        <td>{row.silver}</td>
        <td>{row.bronze}</td>
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
