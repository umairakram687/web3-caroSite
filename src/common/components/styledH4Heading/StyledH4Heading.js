import React from 'react'

const StyledH4Heading = ({ children, fontColor }) => {
    return (
        <h4 className={`text-h4 font-extrabold font-heebo ${fontColor}`}>{children}</h4>
    )
}

export default StyledH4Heading
