import React from 'react'

const StyledCtaText = ({ children, fontColor }) => {
    return (
        <p className={`text-cta font-medium font-heebo ${fontColor}`}>{children}</p>
    )
}

export default StyledCtaText
