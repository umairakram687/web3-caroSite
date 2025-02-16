import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// import { StateMintingContextProvider } from "./context/MintingContract";
import '@rainbow-me/rainbowkit/styles.css';
import {
  darkTheme,
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  sepolia,
  polygon,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { StateMintingContextProvider } from './context/MintingContract';
import { StateContextProvider } from './context/StateContext';

const config = getDefaultConfig({
  appName: 'Carolina',
  projectId: 'p930ey0fyp9h7bpx',
  chains: [sepolia, polygon]
});

const queryClient = new QueryClient();

const CustomAvatar = () => {
  return (
    <div style={{ width: "300px" }}>
      <img src={"/assets/icons/modal.png"} alt="logo" />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider modalSize="compact" theme={darkTheme()} avatar={CustomAvatar}>
            <StateContextProvider>
              <StateMintingContextProvider>
                <App />
              </StateMintingContextProvider>
            </StateContextProvider>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
      <ToastContainer />
    </BrowserRouter>
  </React.StrictMode >
);
