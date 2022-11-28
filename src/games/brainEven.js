import startGame from '../cli.js';
import readlineSync from 'readline-sync';


const getRandomNumber = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

const isEven = (number) => number % 2 == 0;

const game = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name ');
    console.log(`Hello, ${name}!`);

    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let counter = 3;

    while(counter > 0) {
        const number = getRandomNumber(1,100);
        const correctAnsw = isEven(number) ? 'yes' : 'no';
        console.log(`Question: ${number}`);
        const userAnsw = readlineSync.question('Your answer: ');

        if (correctAnsw == userAnsw) {
            console.log('Correct!');
            counter-=1
        } else {
            console.log(`'${userAnsw}' is wrong answer ;(. Correct answer was '${correctAnsw}'.`);
            return;
        }
    }
    console.log(`Cpngratulations, ${name}`);
}

export default game