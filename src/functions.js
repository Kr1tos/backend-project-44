import { car, cdr } from '@hexlet/pairs';

class Func {
  // eslint-disable-next-line class-methods-use-this
  getRandomNumber(min, max) {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  // eslint-disable-next-line class-methods-use-this
  calculate(operands, operator) {
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

  // eslint-disable-next-line class-methods-use-this
  isEven(number) { return number % 2 === 0; }

  // eslint-disable-next-line class-methods-use-this
  gcd(a, b) {
    if (b === 0) {
      return a;
    }
    return new Func().gcd(b, a % b);
  }

  // eslint-disable-next-line class-methods-use-this
  gemerateProgression(first, step, length) {
    const nums = [];
    let count = 0;
    while (count !== length) {
      const number = first + step * count;
      nums.push(number);
      count += 1;
    }
    return nums;
  }

  // eslint-disable-next-line class-methods-use-this
  putMissingValue(missingValue, progression) {
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

  // eslint-disable-next-line class-methods-use-this
  isPrime(num) {
    // eslint-disable-next-line no-plusplus
    for (let i = 2; i < num; i++) { if (num % i === 0) return false; }
    return true;
  }
}

// eslint-disable-next-line new-cap
export default new Func();
