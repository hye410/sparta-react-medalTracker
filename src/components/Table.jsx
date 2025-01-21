import React from 'react'

const Table = ({tableHead,tableRow}) => {
  return (
    <table>
    <thead>
      <tr>
        {
          tableHead.map((head) => <th>{head}</th>)
        }
      </tr>
    </thead>
    <tbody>
      {tableRow}
    </tbody>
  </table>
  )
}

export default Table
