import React from 'react'

const StyledLgText = ({ children, fontColor }) => {
    return (
        <p className={`text-lg font-heebo font-normal ${fontColor}`}>{children}</p>
    )
}

export default StyledLgText
