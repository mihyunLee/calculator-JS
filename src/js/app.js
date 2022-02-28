function App() {
  const calcurator = {
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
  calcurator.plus(1, 2);
  calcurator.minus(3, 5);
  calcurator.multi(6, 2);
  calcurator.divide(20, 3);
}

App();
