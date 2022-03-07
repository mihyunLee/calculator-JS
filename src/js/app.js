function App() {
  const calculator = {
    plus: (a, b) => console.log(a + b),
    minus: (a, b) => console.log(a - b),
    multi: (a, b) => console.log(a * b),
    divide: (a, b) => console.log(a / b),
  };
  calculator.plus(1, 2);
  calculator.minus(3, 5);
  calculator.multi(6, 2);
  calculator.divide(20, 3);
}

App();
