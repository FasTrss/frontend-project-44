import launchGame from '../index.js';
import { getRandomIntFromInterval } from '../utilities.js';

const isPrime = (num) => {
  if (num === 1) {
    return false;
  }
  if (num % 2 === 0 && num > 2) {
    return false;
  }
  const s = Math.sqrt(num);
  for (let i = 3; i <= s; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const beginOfTheInterval = 2;
const endOfTheInterval = 50;
const generatePrime = () => {
  const randomNumber = getRandomIntFromInterval(beginOfTheInterval, endOfTheInterval);
  const rightAnswer = (isPrime(randomNumber) ? 'yes' : 'no');
  return [randomNumber, rightAnswer];
};

export default () => launchGame(description, generatePrime);
