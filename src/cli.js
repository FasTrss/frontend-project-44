import readlineSync from "readline-sync";

function sayHi(userName) {
    var userName = readlineSync.question('May I have your name? ');
    console.log('Hello,' + userName + '!');
}


export {sayHi};