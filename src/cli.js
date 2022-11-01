import readlineSync from "readline-sync";

export const sayHi = () => {
    console.log('Welcome to the Brain Game!');
    const userName = readlineSync.question('May I have your name? ');
    return userName;
}
