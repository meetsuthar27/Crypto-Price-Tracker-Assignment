import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CoinData = {
  rank: number;
  name: string;
  symbol: string;
  price: number;
  change1h: number;
  change24h: number;
  change7d: number;
  marketCap: string;
  volume24h: number;
  supply: string;
  graph: string;
};

type CryptoState = {
  coins: CoinData[];
};

const initialState: CryptoState = {
  coins: [], // will be set initially with mockData
};

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    setCoins(state, action: PayloadAction<CoinData[]>) {
      state.coins = action.payload;
    },
    updateCoin(
      state,
      action: PayloadAction<{ index: number; updates: Partial<CoinData> }>
    ) {
      const { index, updates } = action.payload;
      state.coins[index] = { ...state.coins[index], ...updates };
    },
  },
});

export const { setCoins, updateCoin } = cryptoSlice.actions;
export default cryptoSlice.reducer;
