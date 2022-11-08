import {
  getAnswer, getRandomInt, launchGame,
} from '../src/index.js';

const description = 'What is the result of the expression?';

export default function getCalc() {
  const operators = ['+', '-', '*'];
  const firstNumber = getRandomInt(25);
  const secondNumber = getRandomInt(20);
  const selectedOperator = operators[getRandomInt(3)];
  const question = `${firstNumber} ${selectedOperator} ${secondNumber}`;
  const answer = getAnswer(firstNumber, secondNumber, selectedOperator);
  const rightAnswer = answer.toString();
  return [question, rightAnswer];
}
launchGame(description, getCalc);
