import React from 'react'
import StyledMdText from '../../common/components/styledMdText/StyledMdText'
import StyledXlText from '../../common/components/styledXlText/StyledXlText'

const MintStepsCard = ({ item }) => {
    return (
        <div className='w-full py-3 px-6 rounded-[10px] bg-opacity-30 border bg-dark-gray border-opacity-20 border-light-gray'>
            <div className='flex w-full gap-6'>
                <div className='flex items-center'>
                    <img src={item.image} alt={item.image} />
                </div>
                <div className='flex flex-col'>
                    <div>
                        <StyledMdText fontColor="text-light-gray">{item.stepNo}</StyledMdText>
                    </div>
                    <div>
                        <StyledXlText fontColor="text-white">{item.title}</StyledXlText>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MintStepsCard
