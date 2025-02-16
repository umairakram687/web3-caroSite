import { createContext, useMemo, useState, useContext } from "react";
import { useAccount, useChains } from "wagmi";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const { chain } = useAccount();
    const chains = useChains()
    const chainIds = chains.map(chain => chain.id);
    const [loading, setLoading] = useState(false)
    const [totalMinted, setTotalMinted] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(0);
    const [priceWithoutDecimals, setPriceWithoutDecimals] = useState(0);
    const [minted, setMinted] = useState(0);

    const isValidChain = useMemo(() => chainIds.includes(chain?.id), [chain?.id, chainIds])

    const value = useMemo(() => {
        return {
            loading,
            setLoading,
            isValidChain,
            totalMinted,
            setTotalMinted,
            quantity,
            setQuantity,
            price,
            setPrice,
            priceWithoutDecimals,
            setPriceWithoutDecimals,
            minted, 
            setMinted
        };
    }, [loading, setLoading, isValidChain, totalMinted, setTotalMinted, quantity, setQuantity, price, setPrice, priceWithoutDecimals, setPriceWithoutDecimals, minted, setMinted]);

    return (
        <StateContext.Provider value={value}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
