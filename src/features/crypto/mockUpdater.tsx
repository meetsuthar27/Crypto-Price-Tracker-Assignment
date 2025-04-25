// features/crypto/cryptoMockUpdates.ts
import { AppDispatch } from "../../app/store";
import { updateCoin } from "./cryptoSlice";
import { getRandomFloat, getRandomInt } from "../../utils/mathHelpers";

// More realistic update simulation
export const startMockUpdates = (dispatch: AppDispatch, coinCount: number) => {
  return setInterval(() => {
    const index = getRandomInt(0, coinCount - 1);
    const change1h = getRandomFloat(-3, 3);
    const change24h = getRandomFloat(-10, 10);
    const change7d = getRandomFloat(-20, 20);

    dispatch(
      updateCoin({
        index,
        updates: {
          price: Number(getRandomFloat(1000, 100000, 2)),
          change1h: Number(change1h),
          change24h: Number(change24h),
          change7d: Number(change7d),
          volume24h: Number(getRandomFloat(1000000, 500000000, 2)),
          marketCap: Number(getRandomFloat(1000000000, 500000000000, 0)),
        },
      })
    );
  }, 1500); // Update every 1.5 seconds
};

export const stopMockUpdates = (intervalId: NodeJS.Timeout) => {
  clearInterval(intervalId);
};
