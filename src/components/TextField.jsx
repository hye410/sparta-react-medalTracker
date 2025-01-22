import React from 'react'


const TextField = ({id,title,type,value,minimum,handleOnChange}) => {
  return (
    <p>
     <label>{title}</label>
     <input 
      type={type}  
      value={value}
      min={minimum ?? null}
      onChange={(e) => handleOnChange(e,id)}
     />
    </p>

  )
}

export default TextField
