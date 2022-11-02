#!/usr/bin/env node

import { toString } from "@hexlet/pairs";
import { getRandomInt, gameLogic} from "../src/index.js"

console.log('What is the result of the expression?');

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

const task = () => {
    const int1 = getRandomInt(25);
    const int2 = getRandomInt(20);
    const selectedOperator = Math.floor(Math.random()*operators.length);
    const int = `${int1} ${operators[selectedOperator].sign} ${int2}`;   
    return int;
}

const rightAnswer = (task1) => {
    const array = task1.split(" ");
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
    return answer.toString(10);

}

gameLogic(task, rightAnswer);

