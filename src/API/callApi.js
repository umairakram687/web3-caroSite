import axios from "axios";

export const API = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
});

export const callApi = async (url, method = "get", payload, params = {}) => {
    try {
        const resp = await API({
            url,
            method,
            data: payload,
            headers: {
                "message": "faiq",
                "signature": "0x5e25155dddbdb4b68ac46a681002cc8cd6f1cd43d2f31eb8e9ccf6fed64116b53a62a2924648a9f3cc4bd4db6e17b0dd11f90befdf86dbd26e586c28e84ba8521c"
                // "message": "Cannabis Collectibles",
                // "signature": sessionStorage?.getItem("ccSignMessage")
            },
            params,
        });
        return resp;
    } catch (error) {
        // Handle error here or throw an exception
        console.error("API call error:", error);
        throw error;
    }
};
