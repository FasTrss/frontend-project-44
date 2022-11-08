import { isEven, getRandomInt, launchGame } from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
export default function getEven() {
  const randomNumber = getRandomInt(50);
  const rightAnswer = isEven(randomNumber);
  return [randomNumber, rightAnswer];
}
launchGame(description, getEven);
