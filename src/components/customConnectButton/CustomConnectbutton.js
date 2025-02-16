import React, { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect, useSignMessage } from "wagmi";
import Button from "../button/Button";
import { slicedAddress } from "../../helpers/helpers";
import { Error } from '../toast/Error';
import { Success } from '../toast/Success';
import { recoverMessageAddress } from "viem";
import { useStateContext } from "../../context/StateContext";

export const CustomConnectButton = ({ variant }) => {
  const { address, isConnected } = useAccount();
  const displayName = slicedAddress(address);
  const { disconnect } = useDisconnect();
  const [recoveredAddress, setRecoveredAddress] = useState(null);
  const [counter, setCounter] = useState(0);
  const account = useAccount();
  const { chain } = useAccount();
  const { isValidChain } = useStateContext();

  const {
    data: signMessageData,
    error: signMessageError,
    isLoading: isSignMessageLoading,
    signMessage,
    variables: signMessageVariables,
  } = useSignMessage();
  console.log("🚀 ~ CustomConnectButton ~ signMessageVariables:", signMessageVariables)

  useEffect(() => {
    if (signMessageError !== null) {
      disconnect();
      sessionStorage.removeItem("ccSignMessage");
      Error({ message: "Please Sign to Connect" });
    } else if (signMessageVariables?.message && signMessageData) {
      (async () => {
        try {
          const recovered = await recoverMessageAddress({
            message: signMessageVariables?.message,
            signature: signMessageData,
          });
          setRecoveredAddress(recovered);
        } catch (error) {
          console.error(error);
          // Handle the error accordingly
        }
      })();
    }
  }, [signMessageData, signMessageVariables?.message, signMessageError, disconnect]);

  useEffect(() => {
    setCounter(counter + 1)
    if (isConnected && counter === 1) {
      const message = `Click to sign in to Cannabis Colectibles.
      We assure you that this message will not trigger any transaction or cost the user any gas fees. 
      Your authentication status will reset after 24 hours. 
      Wallet address: ${address}`;
      handleSignMessage(message);
    }
  }, [isConnected, address]);

  const handleSignMessage = (message) => {
    try {
      signMessage({ message });
    }
    catch (error) {
      console.log(error)
    }
  };

  // Store signMessageData in session storage whenever it changes
  useEffect(() => {
    if (signMessageData) {
      sessionStorage.setItem('ccSignMessage', signMessageData);
    }
  }, [signMessageData, address]);

  useEffect(() => {
    const disconnectIfWrongChain = async () => {
      // Assuming the presence of ccSignMessage in sessionStorage means a need to validate the chain
      if ((account?.address && account?.isConnected && sessionStorage.getItem("ccSignMessage")) && counter >= 1) {
        if (!isValidChain) {
          // Condition to remove ccSignMessage and show error when on the wrong chain
          sessionStorage.removeItem("ccSignMessage");
          const toastMsg = "Wrong Network";
          Error({ message: toastMsg });
          disconnect();
        } else {
          // Condition when on the correct chain
          const toastMsg = "Wallet Connected Successfully!";
          Success({ message: toastMsg });
        }
      }
    };

    disconnectIfWrongChain();
  }, [chain?.id, disconnect, account?.address, account?.isConnected, isValidChain]);

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected = ready && account && chain && (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button
                    variant={variant}
                    onClick={openConnectModal}
                  >
                    Connect wallet
                  </Button>
                );
              } else if (chain.unsupported) {
                return (
                  <Button
                    onClick={openChainModal}
                    className="animate-pulse"
                    variant="warning-button"
                  >
                    Wrong network
                  </Button>
                );
              } else {
                return (
                  <div style={{ display: "flex", gap: 12 }}>
                    <Button
                      variant={variant}
                      onClick={openAccountModal}
                    >
                      {displayName}
                    </Button>
                  </div>
                );
              }
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};