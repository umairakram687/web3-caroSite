import React from 'react'
import { Link } from 'react-router-dom'
import StyledSmText from '../../../common/components/styledSmText/StyledSmText'

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <div className='flex flex-col items-center gap-6 py-3'>
            <Link to="/">
                <img src='/assets/images/footerLogo.png' alt='Logo' />
            </Link>
            <div className='w-full'>
                <hr className='border-light-gray border-opacity-20' />
            </div>
            <div className='text-center w-[80%] lg:w-full'>
                <StyledSmText fontColor="text-white">Copyright &#169; {currentYear} Carolina Prohibition, All rights reserved. Created by <Link className='text-orange' to="https://www.codeencoders.com/" target='__blank'>Code Encoders</Link></StyledSmText>
            </div>
        </div>
    )
}

export default Footer
