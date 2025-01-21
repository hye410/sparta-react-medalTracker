import React from 'react'


const TextField = () => {
  return (
    <p>
     <label>국가명</label>
    <input type="text"  onChange={(e) => handleSubmit(e)}/>
    </p>

  )
}

export default TextField
