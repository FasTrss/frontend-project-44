import launchGame from '../index.js';
import { getRandomInt } from '../utilities.js';

const calculate = (firstInt, secondInt, operator) => {
  switch (operator) {
    case '+':
      return firstInt + secondInt;
    case '-':
      return firstInt - secondInt;
    case '*':
      return firstInt * secondInt;
    default:
      throw new Error('Invalid Operator!');
  }
};

export const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const interval = 25;

const runCalc = () => {
  const firstNumber = getRandomInt(interval);
  const secondNumber = getRandomInt(interval);
  const selectedOperator = operators[getRandomInt(operators.length)];
  const question = `${firstNumber} ${selectedOperator} ${secondNumber}`;
  const answer = calculate(firstNumber, secondNumber, selectedOperator);
  return [question, answer.toString()];
};

launchGame(description, runCalc);

export default runCalc;
