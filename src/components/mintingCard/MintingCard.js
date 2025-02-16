import React, { useEffect } from 'react'
import StyledH4Heading from '../../common/components/styledH4Heading/StyledH4Heading'
import StyledH6Heading from '../../common/components/styledH6Heading/StyledH6Heading'
import StyledXlText from '../../common/components/styledXlText/StyledXlText'
import Button from '../button/Button'
import { useMintingStateContext } from "../../context/MintingContract"
import { Success } from '../toast/Success'
import { useAccount } from 'wagmi'
import { useStateContext } from '../../context/StateContext'
import { Error } from '../toast/Error'
// import Web3 from 'web3'

const MintingCard = () => {

    const account = useAccount();
    const { setLoading, isValidChain, totalMinted, setTotalMinted, quantity, setQuantity, price, setPrice, priceWithoutDecimals, setPriceWithoutDecimals, minted, setMinted } = useStateContext()
    const { getMintedNftsCount, getPricePerNft, getMaxSupply, mintNFT } = useMintingStateContext();

    const handleAddQuantity = () => {
        if (quantity < (totalMinted - minted)) {
            setQuantity(quantity + 1);
        }
    }

    const handleMinusQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    }

    const handleMint = async () => {

        // Convert 0.01 ether to wei 9 ( can be a way to convert this value )
        // const priceInWei = Web3.utils.toWei('0.01', 'ether');

        if (isValidChain && account?.isConnected) {
            try {
                setLoading(true)
                const res = await mintNFT(
                    account?.address,
                    quantity,
                    priceWithoutDecimals
                );
                if (res.transactionHash) {
                    const toastMsg = "Minted Successfully!";
                    Success({ message: toastMsg, autoClose: true });
                    setMinted(minted + quantity);
                    setQuantity(1);
                    setLoading(false)
                }
            }
            catch (error) {
                setLoading(false)
                const toastMsg = error?.UserRejectedRequestError || "User denied the request.";
                Error({ message: toastMsg, autoClose: true })
                return error;
            }
        }
    };

    useEffect(() => {
        const fetchMintedNftsCount = async () => {
            const response = await getMintedNftsCount();
            setMinted(Number(response));
        }

        const fetchPricePerNft = async () => {
            const response = await getPricePerNft();
            setPrice(Number(response) / 10 ** 18);
            setPriceWithoutDecimals(Number(response));
        }

        const fetchMaxSupply = async () => {
            const response = await getMaxSupply();
            setTotalMinted(Number(response));
        }

        fetchMintedNftsCount();
        fetchPricePerNft();
        fetchMaxSupply();
    }, [minted])

    return (
        <div className='flex flex-col gap-3 justify-between pt-4 pb-4 rounded-[10px] h-full items-center border border-orange backdrop-blur-[5px]'>
            <div className='text-center'>
                <div>
                    <StyledH4Heading fontColor="text-gradient">Minting got simple</StyledH4Heading>
                </div>
                <div>
                    <StyledXlText fontColor="text-white">Its time to step ahead.</StyledXlText>
                </div>
            </div>
            <div className='flex flex-col items-center w-full gap-2'>
                <div className='w-[90%] rounded-[10px] bg-dark-gray'>
                    <div className='flex flex-col gap-2 px-5 py-4 lg:px-10'>
                        <div className='flex justify-between'>
                            <StyledH6Heading fontColor="text-white">Price:</StyledH6Heading>
                            <StyledH6Heading fontColor="text-white">{price} MATIC</StyledH6Heading>
                        </div>
                        <div className='flex justify-between'>
                            <StyledH6Heading fontColor="text-white">Minted:</StyledH6Heading>
                            <StyledH6Heading fontColor="text-white">{minted}/{totalMinted} minted</StyledH6Heading>
                        </div>
                    </div>
                </div>
                <div className='w-[90%] rounded-[10px] bg-dark-gray'>
                    <div className='flex flex-col gap-4 px-5 py-4 lg:px-10'>
                        <div className='flex items-center justify-between'>
                            <StyledH6Heading fontColor="text-white">Quantity:</StyledH6Heading>
                            <div className='border border-white rounded-[5px] p-3 flex gap-4 lg:gap-6 items-center justify-between w-max'>
                                <div>
                                    <img onClick={handleMinusQuantity} className='cursor-pointer' src='/assets/icons/minus.svg' alt='Minus' />
                                </div>
                                <div>
                                    <StyledH6Heading fontColor="text-white">{quantity}</StyledH6Heading>
                                </div>
                                <div>
                                    <img onClick={handleAddQuantity} className='cursor-pointer' src='/assets/icons/plus.svg' alt='Plus' />
                                </div>
                            </div>
                        </div>
                        <div>
                            <hr className='border-light-gray opacity-20' />
                        </div>
                        <div className='flex justify-between'>
                            <StyledH6Heading fontColor="text-white">Total Price:</StyledH6Heading>
                            <StyledH6Heading fontColor="text-white">{(price * quantity)?.toFixed(2)} MATIC</StyledH6Heading>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex w-[90%] justify-center gap-3'>
                <div className='w-full' onClick={handleMint}>
                    <Button disabled={!isValidChain || !account?.isConnected} fontColor="text-white" variant={isValidChain && account?.isConnected ? "button-gradient" : "disabled-button"}>Mint Now</Button>
                </div>
            </div>
        </div>
    )
}

export default MintingCard
