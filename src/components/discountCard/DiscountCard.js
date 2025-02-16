import React, { useEffect, useState } from 'react'
import StyledH4Heading from '../../common/components/styledH4Heading/StyledH4Heading'
import StyledXlText from '../../common/components/styledXlText/StyledXlText'
import StyledCtaText from '../../common/components/styledCtaText/StyledCtaText'
import StyledLgText from '../../common/components/styledLgText/StyledLgText'
import StyledH6Heading from '../../common/components/styledH6Heading/StyledH6Heading'
import { Success } from '../toast/Success'
import { Error } from '../toast/Error'
import { callApi } from '../../API/callApi'
import { useAccount } from "wagmi";
import { useStateContext } from '../../context/StateContext'

const DiscountCard = () => {

    const account = useAccount();
    const { isValidChain } = useStateContext();
    const isConnected = account?.isConnected && isValidChain;
    const [discountData, setDiscountData] = useState([]);
    const [counter, setcounter] = useState(0);

    const handleCopy = (couponCode) => {
        const textArea = document.createElement('textarea');
        textArea.value = couponCode;
        textArea.style.position = 'fixed';  // Make it invisible
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            // Execute the copy command
            const successful = document.execCommand('copy');
            if (successful) {
                Success({ message: "Referral code copied to clipboard" });
            }
            else {
                Error({ message: "Unable to copy referral code" });
            }
        } catch (error) {
            Error({ message: error });
        } finally {
            // Clean up
            document.body.removeChild(textArea);
        }
    };

    useEffect(() => {
        const getDiscountData = async () => {
            try {
                setcounter(counter + 1)
                setTimeout(async () => {
                    const response = await callApi("/get-wallet-coupons", "GET");
                    setDiscountData(response?.data?.data)
                }, 3000)
                const response = await callApi("/get-wallet-coupons", "GET");
                setDiscountData(response?.data?.data)

            } catch (error) {
                console.error("Error fetching discount data:", error);
            }
        }

        if (account?.isConnected && isValidChain && counter === 0) {
            getDiscountData()
        }

    }, [account?.isConnected, isValidChain, counter])

    return (
        <div className='pt-4 pb-4 flex justify-center rounded-[10px] h-full border border-orange backdrop-blur-[5px]'>
            <div className='w-[90%] flex flex-col gap-3'>
                <div className='text-center'>
                    <div className='flex justify-center'>
                        <StyledH4Heading fontColor="text-gradient">Discount codes</StyledH4Heading>
                    </div>
                    <div>
                        <StyledXlText fontColor="text-white">Discount Codes on against your NFTs.</StyledXlText>
                    </div>
                </div>
                <div className='w-full'>
                    <hr className='border-light-gray opacity-20' />
                </div>
                {
                    !isConnected && (
                        <div className='flex flex-col items-center justify-center h-full gap-8 bg-gray p-[1rem]'>
                            <div>
                                <img src='/assets/images/lock.png' alt='Lock NFT' />
                            </div>
                            <div className='w-[80%] text-center'>
                                <StyledH6Heading fontColor="text-white">Please Connect your wallet to access Discount Codes.</StyledH6Heading>
                            </div>
                        </div>
                    )
                }
                {
                    isConnected && discountData && discountData.length === 0 && (
                        <div className='flex flex-col items-center justify-center h-full gap-8 p-[1rem] bg-gray'>
                            <div>
                                <img src='/assets/images/empty.png' alt='No NFT' />
                            </div>
                            <div className='w-[80%] text-center'>
                                <StyledH6Heading fontColor="text-white">You don't have any discount codes. Please MINT some NFTs.</StyledH6Heading>
                            </div>
                        </div>
                    )
                }
                {isConnected && discountData && discountData.length > 0 &&
                    <div className='flex flex-col md:h-[44vh] gap-[5px] md:pr-3 md:overflow-auto'>
                        {
                            discountData.map((item, index) => (
                                <div key={index} className='flex flex-col w-full py-3 px-4 border hover:border-white border-light-gray border-opacity-20 rounded-[10px]'>
                                    <div className='flex items-center gap-8'>
                                        <div>
                                            <StyledCtaText>NFT ID:</StyledCtaText>
                                        </div>
                                        <div>
                                            <StyledLgText>{item.nftId}</StyledLgText>
                                        </div>
                                    </div>
                                    <div className='flex justify-between w-full'>
                                        <div className='flex items-center gap-6'>
                                            <div>
                                                <StyledCtaText>Referral:</StyledCtaText>
                                            </div>
                                            <div className='hidden lg:block'>
                                                <StyledLgText>{item.couponCode}</StyledLgText>
                                            </div>
                                            <div className='block lg:hidden'>
                                                <StyledLgText>{item.couponCode.slice(0, 5) + "..." + item.couponCode.slice(-5)}</StyledLgText>
                                            </div>
                                        </div>
                                        <div>
                                            <img className='duration-500 cursor-pointer hover:scale-110' src='/assets/icons/copy.svg' alt='Copy' onClick={() => handleCopy(item.couponCode)} />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default DiscountCard