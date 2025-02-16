import React from "react";
import StyledLgText from "../../common/components/styledLgText/StyledLgText";

const Loader = () => {
    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.1)", // Adjust opacity here
                zIndex: 9999, // Adjust z-index as needed
            }}
        >
            <div className="py-[4rem] flex flex-col gap-3 fixed items-center justify-center">
                <div>
                    <img src="/assets/loader.gif" alt="Loader" width="150" height="150" />
                </div>
                <div>
                    <StyledLgText fontColor="text-white">Loading...</StyledLgText>
                </div>
            </div>
        </div>
    );
};

export default Loader;
