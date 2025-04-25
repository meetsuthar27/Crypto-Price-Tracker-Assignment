import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CoinData = {
  rank: number;
  name: string;
  logo: string;
  symbol: string;
  price: number;
  change1h: number;
  change24h: number;
  change7d: number;
  marketCap: number;
  volume24h: number;
  supply: string;
  graph: string;
};

type CryptoState = {
  coins: CoinData[];
};

const initialState: CryptoState = {
  coins: [],
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

      // Create a new array with the updated coin
      const updatedCoins = [...state.coins];
      updatedCoins[index] = {
        ...updatedCoins[index],
        ...updates,
      };

      state.coins = updatedCoins;
    },
  },
});

export const { setCoins, updateCoin } = cryptoSlice.actions;
export default cryptoSlice.reducer;
