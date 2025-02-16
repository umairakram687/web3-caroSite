export const slicedAddress = (address) => {
    const result = `${address?.slice(0, 5)}....${address?.slice(-5)}`;
    return result;
};