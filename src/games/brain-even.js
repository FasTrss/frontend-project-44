import launchGame from '../index.js';
import { getRandomInt } from '../utilities.js';

const isEven = (a) => a % 2 === 0;
const interval = 50;
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateEven = () => {
  const randomNumber = getRandomInt(interval);
  const rightAnswer = (isEven(randomNumber) ? 'yes' : 'no');
  return [randomNumber, rightAnswer];
};

export default () => launchGame(description, generateEven);
