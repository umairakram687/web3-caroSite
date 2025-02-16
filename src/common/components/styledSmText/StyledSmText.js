import React from 'react'

const StyledSmText = ({ children, fontColor }) => {
    return (
        <p className={`text-sm font-heebo font-normal ${fontColor}`}>{children}</p>
    )
}

export default StyledSmText
