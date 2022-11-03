#!/usr/bin/env node

import { toString } from "@hexlet/pairs";
import { getRandomInt, gameLogic} from "../src/index.js"
export default function brain_calc() {
console.log('What is the result of the expression?');

const calc = () => { 
    const operators = [{
    sign: "+",
    method: function(int1, int2){ return int1 + int2; }
},{
    sign: "-",
    method: function(int1, int2){ return int1 - int2; }
},{
    sign: "*",
    method: function(int1, int2){ return int1 * int2; }
}];

    const int1 = getRandomInt(25);
    const int2 = getRandomInt(20);
    const selectedOperator = Math.floor(Math.random()*operators.length);
    const question = `${int1} ${operators[selectedOperator].sign} ${int2}`;   

    const array = question.split(" ");
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
    }
    const rightAnswer = answer.toString(10);

    return [question, rightAnswer];
}

gameLogic(calc);

}

