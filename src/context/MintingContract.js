import { useContext, createContext } from "react";
import Web3 from "web3";
import { useWalletClient } from "wagmi";
import MintingABI from "../ABIs/MintingABI";
import { ContractAddresses } from "../constants/ContractAddresses";

// Creating a new context
const StateMintingContext = createContext();

export const StateMintingContextProvider = ({ children }) => {
    const { data: walletClient } = useWalletClient();

    const web3Pro = walletClient
        ? walletClient :
        "https://sepolia.infura.io/v3/15c9a4fbcf3f477f978e0e2765809365";
    // : "https://mainnet.infura.io/v3/15c9a4fbcf3f477f978e0e2765809365";

    const web3 = new Web3(web3Pro);

    const MintingInstance = new web3.eth.Contract(MintingABI, ContractAddresses.Minting);

    // get total minted nfts count
    const getMintedNftsCount = async () => {
        try {
            const response = await MintingInstance.methods.totalSupply().call();
            return response;
        }
        catch (error) {
            throw error;
        }
    };

    // get price of single nft
    const getPricePerNft = async () => {
        try {
            const response = await MintingInstance.methods.pricePerNFT().call();
            return response;
        } catch (error) {
            throw error;
        }
    };

    // get max supply of nfts
    const getMaxSupply = async () => {
        try {
            const response = await MintingInstance.methods.MAX_SUPPLY().call();
            return response;
        } catch (error) {
            throw error;
        }
    };

    // mint nft
    const mintNFT = async (
        walletAddress,
        quantity,
        pricePerToken,
    ) => {
        try {
            const response = await MintingInstance.methods
                .mint(quantity)
                .send({
                    value: (pricePerToken * quantity).toString(),
                    from: walletAddress,
                });

            return response;
        } catch (error) {
            throw error;
        }
    };

    return (
        <StateMintingContext.Provider
            value={{
                getPricePerNft,
                getMaxSupply,
                mintNFT,
                getMintedNftsCount
            }}>
            {children}
        </StateMintingContext.Provider>
    );
};

export const useMintingStateContext = () => useContext(StateMintingContext);
