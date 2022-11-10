import launchGame from '../index.js';
import { getRandomInt } from '../utilities.js';

const isEven = (a) => a % 2 === 0;
const interval = 50;
export const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const runEven = () => {
  const randomNumber = getRandomInt(interval);
  const rightAnswer = (isEven(randomNumber) ? 'yes' : 'no');
  return [randomNumber, rightAnswer];
};

launchGame(description, runEven);

export default runEven;
