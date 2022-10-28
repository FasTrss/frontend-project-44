import { sayHi } from "../src/cli.js";

console.log('Welcome to the Brain Games!');
sayHi();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getRandomIntInclusive = (1, 30) => {
    min = Math.ceil(1);
    max = Math.floor(30);
    const Integer = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(Integer);
}
