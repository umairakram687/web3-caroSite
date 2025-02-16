import React from 'react'

const Button = ({ children, variant, fontColor, onClick, disabled }) => {

  return (
      <button disabled={disabled} onClick={onClick} className={`${fontColor} text-cta font-bold font-heebo leading-[14.40px] w-full h-full py-5 ${variant} rounded-md`}>{children}</button>
  )
}

export default Button
