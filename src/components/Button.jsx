import React from 'react'


const Button = ({name, type, customStyle = null, handleOnClick = null}) => {
  return (
    <button 
      type={type ?? "button"}
      style={customStyle}
      onClick={handleOnClick}
    >
      {name}
    </button>
  )
}

export default Button
