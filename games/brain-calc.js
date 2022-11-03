#!/usr/bin/env node

import { getRandomInt, gameLogic } from '../src/index.js';

export default function brainCalc() {
  console.log('What is the result of the expression?');

  const getCalc = () => {
    const operators = [{
      sign: '+',
      method: function sum(int1, int2) { return int1 + int2; },
    }, {
      sign: '-',
      method: function substract(int1, int2) { return int1 - int2; },
    }, {
      sign: '*',
      method: function multiply(int1, int2) { return int1 * int2; },
    }];

    const int1 = getRandomInt(25);
    const int2 = getRandomInt(20);
    const selectedOperator = Math.floor(Math.random() * operators.length);
    const question = `${int1} ${operators[selectedOperator].sign} ${int2}`;

    const array = question.split(' ');
    let answer = 0;
    const parsed = (a) => parseInt(a, 10);
    switch (array[1]) {
      case '+':
        answer = parsed(array[0]) + parsed(array[2]);
        break;
      case '-':
        answer = array[0] - array[2];
        break;
      case '*':
        answer = array[0] * array[2];
        break;
      default:
    }
    const rightAnswer = answer.toString(10);

    return [question, rightAnswer];
  };

  gameLogic(getCalc);
}
