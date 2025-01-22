import React from 'react'


const TextField = ({
  id,
  title = null,
  type = 'text',
  value,
  minimum = null,
  handleOnChange
}) => {
  return (
    <p>
    {title && <label>{title}</label>}
     <input 
      type={type}  
      value={value}
      min={minimum}
      onChange={(e) => handleOnChange(e,id)}
     />
    </p>

  )
}

export default TextField
