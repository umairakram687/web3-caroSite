import React from 'react'

const StyledH2Heading = ({ children, fontColor }) => {
    return (
        <h2 className={`text-h2 font-bold font-heebo ${fontColor}`}>{children}</h2>
    )
}

export default StyledH2Heading
