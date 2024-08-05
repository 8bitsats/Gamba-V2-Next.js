import "@/styles/globals.css";
import "@solana/wallet-adapter-react-ui/styles.css";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  DEFAULT_CREATOR_FEE,
  DEFAULT_JACKPOT_FEE,
  DEFAULT_PRIORITY_FEE,
  PLATFORM_CREATOR_ADDRESS,
  TOKENLIST,
} from "../constants";
import { GambaPlatformProvider, TokenMetaProvider } from "gamba-react-ui-v2";
import { GambaProvider, SendTransactionProvider } from "gamba-react-v2";

import { AppProps } from "next/app";
import React from "react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

function MyApp({ Component, pageProps }: AppProps) {
  const RPC_ENDPOINT =
    process.env.NEXT_PUBLIC_RPC_ENDPOINT ??
    "https://mainnet.helius-rpc.com/?api-key=6b52d42b-5d24-4841-a093-02b0d2cc9fc0";

  return (
    <ConnectionProvider
      endpoint={RPC_ENDPOINT}
      config={{ commitment: "processed" }}
    >
      <WalletProvider autoConnect wallets={[]}>
        <WalletModalProvider>
          <TokenMetaProvider tokens={TOKENLIST}>
            <SendTransactionProvider priorityFee={DEFAULT_PRIORITY_FEE}>
              <GambaProvider>
                <GambaPlatformProvider
                  creator={PLATFORM_CREATOR_ADDRESS}
                  defaultCreatorFee={DEFAULT_CREATOR_FEE}
                  defaultJackpotFee={DEFAULT_JACKPOT_FEE}
                >
                  <Component {...pageProps} />
                </GambaPlatformProvider>
              </GambaProvider>
            </SendTransactionProvider>
          </TokenMetaProvider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default MyApp;
