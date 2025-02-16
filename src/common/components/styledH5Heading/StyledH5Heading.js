import React from 'react'

const StyledH5Heading = ({ children, fontColor }) => {
    return (
        <h5 className={`text-h5 font-medium font-heebo ${fontColor}`}>{children}</h5>
    )
}

export default StyledH5Heading
