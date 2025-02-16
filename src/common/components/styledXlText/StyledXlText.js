import React from 'react'

const StyledXlText = ({ children, fontColor }) => {
    return (
        <p className={`text-xl font-heebo font-semibold ${fontColor}`}>{children}</p>
    )
}

export default StyledXlText
