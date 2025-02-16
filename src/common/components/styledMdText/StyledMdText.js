import React from 'react'

const StyledMdText = ({ children, fontColor }) => {
    return (
        <p className={`text-md font-heebo font-normal ${fontColor}`}>{children}</p>
    )
}

export default StyledMdText
