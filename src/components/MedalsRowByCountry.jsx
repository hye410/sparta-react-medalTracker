import React from 'react'

const MedalsRowByCountry = ({rows}) => {
  if(rows.length === 0 ) return;
  return rows.map((row,index) => (
        <tr key={`medalTableRow_${index}`} className={index % 2 === 0 ? "even" : "odd"}>
        <td>{row.country}</td>
        <td>{row.gold}</td>
        <td>{row.silver}</td>
        <td>{row.bronze}</td>
        <td>
          <button onClick={(event) => handleDelete(event,row.id)}>
            삭제
          </button>
        </td>
      </tr>
      ))
}

export default MedalsRowByCountry
