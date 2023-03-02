import { car, cdr } from '@hexlet/pairs';

function getRandomNumber(min, max) {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function calculate(operands, operator) {
  switch (operator) {
    case '-':
      return car(operands) - cdr(operands);
    case '+':
      return car(operands) + cdr(operands);
    case '*':
      return car(operands) * cdr(operands);
    default:
      return 'Invalid operator';
  }
}

function isEven(number) {
  return number % 2 === 0;
}

function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

function generateProgression(first, step, length) {
  const nums = [];
  let count = 0;
  while (count !== length) {
    const number = first + step * count;
    nums.push(number);
    count += 1;
  }
  return nums;
}

function putMissingValue(missingValue, progression) {
  const newProgression = [];

  for (let index = 0; index < progression.length; index += 1) {
    if (index === missingValue) {
      newProgression.push('..');
    } else {
      newProgression.push(progression[index]);
    }
  }
  return newProgression.join(' ');
}

function isPrime(num) {
  // eslint-disable-next-line no-plusplus
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

export {
  isPrime, putMissingValue, generateProgression, gcd, isEven, calculate, getRandomNumber,
};
