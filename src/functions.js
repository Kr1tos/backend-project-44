import {cons, car, cdr} from '@hexlet/pairs';

class func {

    getRandomNumber (min, max){
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

    calculate(operands, operator){
        switch (operator) {
            case '-':
                return car(operands) - cdr(operands);
            case '+':
                return car(operands) + cdr(operands);
            case '*':
                return car(operands) * cdr(operands);
        }
    };

    isEven = (number) => number % 2 == 0;

    gcd = (a, b) => {
        if (b === 0) {
            return a
            }
            return new func().gcd(b, a % b)
        }
}
export default new func();