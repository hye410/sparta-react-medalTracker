import React from 'react'

const Sorting = ({sort , handleSort}) => {
  return (
    <p className="sorting">
    <select onChange={handleSort} defaultValue={sort[0].value}>
      {
        sort.map((data) => 
        <option key={`option_${data.value}`} value={data.value}>
          {data.text}
        </option>)
      }
    </select>
  </p>
  )
}

export default Sorting
