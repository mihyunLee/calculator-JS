const $ = (selector) => document.querySelector(selector);

function App() {
  const calculateNumber = (e) => {
    const firstNumber = Number($("#firstInput").value);
    const secondNumber = Number($("#secondInput").value);
    const op = e.target.innerText;
    switch (op) {
      case "+":
        return firstNumber + secondNumber;
      case "-":
        return firstNumber - secondNumber;
      case "x":
        return firstNumber * secondNumber;
      case "/":
        return firstNumber / secondNumber;
      default:
        return "연산자를 클릭해주세요.";
    }
  };

  const showResult = (e) => {
    $("#operation-result").innerText = calculateNumber(e);
  };

  $("#calculate-form").addEventListener("submit", (e) => e.preventDefault());
  $("#operation-button").addEventListener("click", showResult);
}

App();
