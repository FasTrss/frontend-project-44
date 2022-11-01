#!/usr/bin/env node

import { getRandomInt, gameLogic} from "../src/index.js"

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const task = () => { 
    const int = getRandomInt(50);
    return int;
}

const rightAnswer = (int) => ( int % 2 === 0 ? 'yes' : 'no');

gameLogic(task, rightAnswer);
