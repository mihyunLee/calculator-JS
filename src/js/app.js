function App() {
  const calculator = {
    plus: function (a, b) {
      console.log(a + b);
    },
    minus: function (a, b) {
      console.log(a - b);
    },
    multi: function (a, b) {
      console.log(a * b);
    },
    divide: function (a, b) {
      console.log(a / b);
    },
  };
  calculator.plus(1, 2);
  calculator.minus(3, 5);
  calculator.multi(6, 2);
  calculator.divide(20, 3);
}

App();
