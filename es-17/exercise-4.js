function calculate() {
  let result = 0;
  return {
    add(number) {
     result += number;
      return this;
    },
    multiply(number) {
      result *= number;
      return this;
    },
    sub(number) {
      result -= number;
      return this;
    },
    divide(number) {
      result /= number;
      return this;
    },
    printResult() {
      console.log(result);
    }
  }
}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7*/
