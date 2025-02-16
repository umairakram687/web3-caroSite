import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CustomConnectButton } from '../../customConnectButton/CustomConnectbutton'
// import { useAccount, useDisconnect } from 'wagmi';
// import { Success } from '../../toast/Success';
// import { Error } from '../../toast/Error';
// import { useStateContext } from '../../../context/StateContext';

const Header = () => {
    // const account = useAccount();
    // const { chain } = useAccount();
    // const { disconnect } = useDisconnect();
    // const [counter, setCounter] = useState(0);
    // const { isValidChain } = useStateContext();

    // useEffect(() => {
    //     const disconnectIfWrongChain = async () => {
    //         setCounter(counter + 1)
    //         if ((account?.address && account?.isConnected && sessionStorage.getItem("ccSignMessage")) && counter >= 1) {
    //             if (!isValidChain) {
    //                 sessionStorage.removeItem("ccSignMessage");
    //                 const toastMsg = "Wrong Network";
    //                 Error({ message: toastMsg });
    //                 disconnect();
    //             } else {
    //                 const toastMsg = "Wallet Connected Successfully!";
    //                 Success({ message: toastMsg });
    //             }
    //         }
    //     };
    //     disconnectIfWrongChain();
    // }, [chain?.id, disconnect, account?.address, account?.isConnected, isValidChain]);

    return (
        <div className='absolute flex justify-center w-full top-5'>
            <div className='w-[85%] lg:w-[81%] flex justify-between items-center '>
                <div className='w-[40%]'>
                    <Link to="/">
                        <img src='/assets/images/headerLogo.png' alt='Logo' />
                    </Link>
                </div>
                <div className='flex gap-4 w-[50%] md:w-[40%] lg:w-[30%] justify-end'>
                    <div className='w-[80%] md:w-[50%] h-[50%] lg:h-[65%] self-center text-white'>
                        <CustomConnectButton variant="button-gradient" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
