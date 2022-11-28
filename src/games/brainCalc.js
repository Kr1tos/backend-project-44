import { cons, car, cdr } from '@hexlet/pairs';
import _ from 'lodash';
import { getRandomNumber, calculate } from '../functions.js';
import start from '../index.js';

const description = 'What is the result of the expression?';
const game = () => {
  const operators = ['+', '-', '*'];

  const pairs = cons(getRandomNumber(1, 100), getRandomNumber(1, 100));
  const operator = _.sample(operators);
  const quest = `Question: ${car(pairs)} ${operator} ${cdr(pairs)}`;
  const correctAnsw = String(calculate(pairs, operator));

  return [quest, correctAnsw];
};

export default () => start(description, game);
