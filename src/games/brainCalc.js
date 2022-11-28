import {cons, car, cdr} from '@hexlet/pairs';
import _ from 'lodash';
import readlineSync from 'readline-sync';



const getRandomNumber = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

const calculate = (operands, operator) => {
    switch (operator) {
        case '-':
            return car(operands) - cdr(operands);
        case '+':
            return car(operands) + cdr(operands);
        case '*':
            return car(operands) * cdr(operands);
    }
  };

const game = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name ');
    console.log(`Hello, ${name}!`);

    console.log('What is the result of the expression?');
    let counter = 3;
    const operators = ['+', '-', '*'];

    while(counter > 0) {
        const pairs = cons(getRandomNumber(1,100), getRandomNumber(1,100));

        const operator = _.sample(operators);
        const correctAnsw = calculate(pairs, operator);
        console.log(`Question: ${car(pairs)} ${operator} ${cdr(pairs)}`);
        const userAnsw = readlineSync.question('Your answer: ');

        if (correctAnsw == Number(userAnsw)) {
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