const $ = (selector) => document.querySelector(selector);

function App() {
  // Variables
  let numOne = "",
    numTwo = "",
    ops = "",
    result = "";

  // +, -, x, / 을 클릭했을 때 변수에 값을 세팅한다.
  const setValue = (e) => {
    const isOpsButton = e.target.classList.contains("operation");
    if (isOpsButton) {
      if (result) {
        numOne = "";
        numTwo = "";
        ops = "";
      }
      if (!numOne) {
        numOne = Number($("#input-number").value);
      }
      ops = e.target.dataset.ops;
    }
  };

  // = 을 클릭했을 때 input에 결과값을 출력한다.
  const displayResult = () => {
    if (!numTwo && ops) {
      numTwo = Number($("#input-number").value);
      switch (ops) {
        case "plus":
          result = numOne + numTwo;
          break;
        case "minus":
          result = numOne - numTwo;
          break;
        case "multi":
          result = numOne * numTwo;
          break;
        case "divide":
          result = numOne / numTwo;
          break;
      }
      $("#input-number").value = result;
    } else {
      result = $("#input-number").value;
    }
  };

  $("#calculate-form").addEventListener("submit", (e) => e.preventDefault());
  $("#operation-button").addEventListener("click", (e) => setValue(e));
  $("#equal-button").addEventListener("click", displayResult);
}

App();
