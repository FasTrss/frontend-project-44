export const getRandomInt = (max) => {
  const randomInt = Math.floor(Math.random() * max);
  return randomInt;
};

export const getRandomIntFromInterval = (minim, maxim) => {
  const min = Math.ceil(minim);
  const max = Math.floor(maxim);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
