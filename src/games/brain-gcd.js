import launchGame from '../index.js';
import { getRandomIntFromInterval } from '../utilities.js';

const getLargsetGCD = (int1, int2) => {
  const min = Math.min(int1, int2);
  for (let i = min; i > 0; i -= 1) {
    if (int1 % i === 0 && int2 % i === 0) {
      return i;
    }
  }
  return 1;
};

const description = 'Find the greatest common divisor of given numbers';
const beginOfTheInterval = 2;
const endOfTheInterval1 = 30;
const endOfTheInterval2 = 60;
const generateGCD = () => {
  const firstNumber = getRandomIntFromInterval(beginOfTheInterval, endOfTheInterval1);
  const secondNumber = getRandomIntFromInterval(beginOfTheInterval, endOfTheInterval2);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = getLargsetGCD(firstNumber, secondNumber);
  return [question, answer.toString()];
};

export default () => launchGame(description, generateGCD);
