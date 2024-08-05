import { PublicKey } from "@solana/web3.js";
 
// Creator to receive fees
export const PLATFORM_CREATOR_ADDRESS = new PublicKey(
  "AJ6FxTtjbWSnDKcRyyGcVJxaabS1kZP7uEetYuATeZNA",
);

// Fees config
export const DEFAULT_CREATOR_FEE = 0.05;
export const DEFAULT_JACKPOT_FEE = 0.01;
export const DEFAULT_PRIORITY_FEE = 400_201;

// Token list
export const TOKENLIST = [
  {
    mint: new PublicKey("So11111111111111111111111111111111111111112"),
    name: "Solana",
    symbol: "SOL",
    image:
      "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png",
    decimals: 9,
    baseWager: 0.01e9,
  },
  {
    mint: new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),
    name: "USD Coin",
    symbol: "USDC",
    image:
      "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png",
    decimals: 9,
    baseWager: 0.01e9,
  },
];