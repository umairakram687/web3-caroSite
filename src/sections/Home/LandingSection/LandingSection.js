import React from 'react'
import StyledH1Heading from '../../../common/components/styledH1Heading/StyledH1Heading'
import StyledH5Heading from '../../../common/components/styledH5Heading/StyledH5Heading'
import Carousel from '../../../components/carousel/Carousel'

const LandingSection = () => {
    return (
        <div className='w-full h-full pb-10 text-white pt-36' style={{
            backgroundImage: "url('/assets/images/bg-landingSection.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }}>
            <div className='flex flex-col items-center justify-center gap-3'>
                <div>
                    <StyledH1Heading fontColor="text-gradient leading-none">Mint your NFTs</StyledH1Heading>
                </div>
                <div>
                    <StyledH5Heading>Its time to step ahead.</StyledH5Heading>
                </div>
                <div className='w-[99.5%]'>
                    <Carousel />
                </div>
            </div>
        </div>
    )
}

export default LandingSection
