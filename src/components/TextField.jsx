import React from 'react'


const TextField = ({id,title,type,value,handleOnChange}) => {
  return (
    <p>
     <label>{title}</label>
     <input 
      type={type}  
      value={value}
      onChange={(e) => handleOnChange(e,id)}
     />
    </p>

  )
}

export default TextField
