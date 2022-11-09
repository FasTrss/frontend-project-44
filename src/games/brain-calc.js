import { getRandomInt, launchGame } from '../index.js';

const getAnswer = (firstInt, secondInt, operator) => {
  let answer = 0;
  switch (operator) {
    case '+':
      answer = firstInt + secondInt;
      return answer;
    case '-':
      answer = firstInt - secondInt;
      return answer;
    case '*':
      answer = firstInt * secondInt;
      return answer;
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
  const answer = getAnswer(firstNumber, secondNumber, selectedOperator);
  return [question, answer.toString()];
};

export default runCalc;
