#!/usr/bin/env node

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
    const answer = eval(array[0] + array[1] + array[2]);
    return answer;
}

gameLogic(task, rightAnswer);

