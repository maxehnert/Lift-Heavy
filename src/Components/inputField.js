import React from 'react'

// Generic input field used throughout the app
const InputField = ({ input, style, label, placeholder, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} style={style} placeholder={placeholder} type={type}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

export default InputField
