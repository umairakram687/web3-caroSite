import React from 'react'
import MintingCard from '../../../components/mintingCard/MintingCard'
import StyledH4Heading from '../../../common/components/styledH4Heading/StyledH4Heading'
import StyledH5Heading from '../../../common/components/styledH5Heading/StyledH5Heading'
import MintStepsCard from '../../../components/mintStepsCard/MintStepsCard'
import DiscountCard from '../../../components/discountCard/DiscountCard'

const mintStepsData = [
    {
        image: "/assets/icons/step1.png",
        stepNo: "Step 1",
        title: "Connect Your Wallet",
    },
    {
        image: "/assets/icons/step2.png",
        stepNo: "Step 2",
        title: "Select Your Quantity",
    },
    {
        image: "/assets/icons/step3.png",
        stepNo: "Step 3",
        title: "Confirm the Transaction",
    },
    {
        image: "/assets/icons/step4.png",
        stepNo: "Step 4",
        title: "Receive Your NFTs",
    },
]

const MintSection = () => {
    return (
        <div className='relative h-full py-32 text-white bg-mintSection'>
            <div className='absolute top-0 hidden md:block'><img src='/assets/images/bg-grass.png' alt='grass' className='w-[100vw]' /></div>
            <div className='absolute top-0 block md:hidden'><img src='/assets/images/bg-grass-mob.png' alt='grass' className='w-full' /></div>
            <div className='flex flex-col items-center w-full gap-4'>
                <div className='flex flex-col justify-center w-[90%] lg:w-full gap-4 md:flex-row'>
                    <div className='md:w-[50%] lg:w-[40%]'>
                        <MintingCard />
                    </div>
                    <div className='md:w-[50%] lg:w-[40%]'>
                        <DiscountCard />
                    </div>
                </div>
                <div className='flex backdrop-blur-[5px] flex-col pt-6 pb-10 gap-6 rounded-[10px] w-[90%] lg:w-[81.5%] items-center border border-orange'>
                    <div className='text-center'>
                        <div>
                            <StyledH4Heading fontColor="text-gradient">How to mint?</StyledH4Heading>
                        </div>
                        <div>
                            <StyledH5Heading fontColor="text-white">Easy steps to mint NFTs</StyledH5Heading>
                        </div>
                    </div>
                    <div className='w-[90%]'>
                        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                            {mintStepsData?.map((item, index) => (
                                <div className='col-span-1' key={index}>
                                    <MintStepsCard item={item} />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MintSection
