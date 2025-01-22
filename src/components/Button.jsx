import React from 'react'


const Button = ({
  name, 
  type = "button", 
  customStyle = null,
  value = null, 
  handleOnClick = null
}) => {
  return (
    <button 
      type={type}
      style={customStyle}
      value={value}
      onClick={handleOnClick}
    >
      {name}
    </button>
  )
}

export default Button
