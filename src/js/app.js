const $ = (selector) => document.querySelector(selector);

function App() {
  // Variables
  let oldNum = "",
    newNum = "",
    ops = "",
    result = "";

  // 숫자 버튼을 클릭했을 때 display에 숫자를 보여준다.
  const setValue = (e) => {
    const clickedNum = e.target.dataset.num;
    if (result) {
      newNum = clickedNum;
      result = "";
    } else {
      newNum += clickedNum;
    }
    $("#calculate-display").innerText = newNum;
  };

  // 연산자를 클릭했을 때 newNum의 값을 oldNum에 저장하고 연산자를 변수에 저장한다.
  const saveValue = (e) => {
    result ? (oldNum = result) : (oldNum = newNum);
    ops = e.target.dataset.ops;
    newNum = "";
  };

  // = 을 클릭했을 때 연산 후에 display에 결과값을 출력한다.
  const displayResult = () => {
    oldNum = Number(oldNum);
    newNum = Number(newNum);

    switch (ops) {
      case "plus":
        result = oldNum + newNum;
        break;
      case "minus":
        result = oldNum - newNum;
        break;
      case "multi":
        result = oldNum * newNum;
        break;
      case "divide":
        result = oldNum / newNum;
        break;
      default:
        result = newNum;
    }
    $("#calculate-display").innerText = result;
  };

  // C 버튼을 클릭했을 때 변수를 초기화한다.
  const clearAll = () => {
    oldNum = "";
    newNum = "";
    $("#calculate-display").innerText = 0;
  };

  // Event Listener
  $("#calculator").addEventListener("click", (e) => {
    if (e.target.dataset.num) {
      setValue(e);
      return;
    }
    if (e.target.dataset.ops === "equal") {
      displayResult();
      console.log(
        `ops:${ops}, oldNum:${oldNum}, newNum:${newNum}, result:${result}`
      );
      return;
    }
    if (e.target.dataset.ops) {
      saveValue(e);
      console.log(
        `ops:${ops}, oldNum:${oldNum}, newNum:${newNum}, result:${result}`
      );
      return;
    }
  });

  $("#clear").addEventListener("click", clearAll);
}

App();
