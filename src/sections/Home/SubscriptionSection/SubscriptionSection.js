import React from 'react'
import StyledH4Heading from '../../../common/components/styledH4Heading/StyledH4Heading'
import StyledMdText from '../../../common/components/styledMdText/StyledMdText'
import Button from '../../../components/button/Button'

const SubscriptionSection = () => {
    return (
        <div className='flex justify-center w-full py-10 lg:py-20 bg-gray'>
            <div className='border border-orange rounded-[14px] w-[90%] md:w-[70%] px-4 lg:px-10 py-6 lg:py-12 flex md:flex-row flex-col justify-between bg-dark-gray'>
                <div className='flex flex-col gap-2 w-full md:w-[40%]'>
                    <div>
                        <StyledH4Heading fontColor="text-white">Subscribe our newsletter</StyledH4Heading>
                    </div>
                    <div>
                        <StyledMdText fontColor="text-light-gray">Get updates about our Nfts, products and news. If you like good deals, you should sign up today to save on everything in our store.</StyledMdText>
                    </div>
                </div>
                <div className='flex flex-col justify-center gap-2 md:w-[50%] w-full pt-4 md:pt-0'>
                    <div className='relative'>
                        <input className='relative w-full h-full p-4 bg-white rounded-lg' placeholder='Your email' />
                        <div className='w-[35%] lg:w-[25%] absolute right-[1%] top-1 md:h-[85%] hidden md:block'>
                            <Button fontColor="text-white" variant="button-gradient">Subscribe</Button>
                        </div>
                    </div>
                    <div className='block md:hidden'>
                        <Button fontColor="text-white" variant="button-gradient">Subscribe</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubscriptionSection
