import React from 'react'


const Button = ({name, type, customStyle = null, value=null, handleOnClick = null}) => {
  return (
    <button 
      type={type ?? "button"}
      style={customStyle}
      value={value}
      onClick={handleOnClick}
    >
      {name}
    </button>
  )
}

export default Button
