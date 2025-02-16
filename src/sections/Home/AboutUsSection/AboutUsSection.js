import React from 'react'
import StyledH5Heading from '../../../common/components/styledH5Heading/StyledH5Heading'
import StyledMdText from '../../../common/components/styledMdText/StyledMdText'

const AboutUsSection = () => {
    return (
        <div className='flex flex-col items-center w-full h-full pt-20 text-white lg:flex-row lg:pt-0 bg-aboutSection'>
            <div className='lg:w-[50%] flex flex-col gap-5 items-center justify-center h-full'>
                <div>
                    <img src='/assets/images/about-section-logo.png' width={115} height={115} alt='Logo' />
                </div>
                <div>
                    <StyledH5Heading fontColor="text-orange">All About the good stuff</StyledH5Heading>
                </div>
                <div className='text-center w-[90%] lg:w-[70%]'>
                    <StyledMdText fontColor="text-white">Welcome to the First Cannabis Collection, an innovative NFT line that combines the charm of couch monsters with the love for cannabis. Dive into a world where whimsical creatures indulge in the pleasures of toking, bringing joy and laughter to every piece.

                        Featuring only 2011 unique pieces, the First Cannabis Collection is a treasure trove of digital artistry and cannabis culture. Each NFT encapsulates the spirit of relaxation and creativity, making it a must-have for collectors and enthusiasts alike.

                        But that's not all— with every purchase of a Cannabis Collection 1 NFT, you'll receive an exclusive coupon code. This code unlocks a world of premium cannabis products from Carolina Prohibition, curated just for you to enhance your toking experience.<br /><br />

                        <span className='font-bold text-orange'>Don't miss your chance to own a piece of this unique collection and enjoy the perks of premium cannabis.</span></StyledMdText>
                </div>
            </div>
            <div className='lg:w-[50%] flex justify-end py-20 lg:py-0'>
                <img src='/assets/images/slider-aboutUs.png' alt='Slider' />
            </div>
        </div>
    )
}

export default AboutUsSection
