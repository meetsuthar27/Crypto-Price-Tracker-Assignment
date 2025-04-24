// utils/mathHelpers.ts
export const getRandomFloat = (min: number, max: number, decimals = 2) => {
  return parseFloat((Math.random() * (max - min) + min).toFixed(decimals));
};

export const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
