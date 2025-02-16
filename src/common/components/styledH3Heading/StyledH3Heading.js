import React from 'react'

const StyledH3Heading = ({ children, fontColor }) => {
  return (
    <h3 className={`text-h3 font-bold font-heebo ${fontColor}`}>{children}</h3>
  )
}

export default StyledH3Heading
