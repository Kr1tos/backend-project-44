import {cons, car, cdr} from '@hexlet/pairs';
import func from '../functions.js';
import _ from 'lodash';
import start from '../index.js';

const description = 'What is the result of the expression?';
const game = () => {
    const operators = ['+', '-', '*'];

    const pairs = cons(func.getRandomNumber(1,100), func.getRandomNumber(1,100));
    const operator = _.sample(operators);
    const quest = `Question: ${car(pairs)} ${operator} ${cdr(pairs)}`;
    const correctAnsw = String(func.calculate(pairs, operator));

    return [quest, correctAnsw];
}

export default () => start(description, game);