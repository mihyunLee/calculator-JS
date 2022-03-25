const $ = (selector) => document.querySelector(selector);

function App() {
  // Variables
  let oldNum = "",
    newNum = "",
    ops = "",
    result = "";

  const isEmpty = (value) => {
    if (value === "" || value === null || value === undefined) return true;
    else return false;
  };

  // 숫자 버튼을 클릭했을 때 클릭한 숫자는 newNum에 저장하고, display에 숫자를 보여준다.
  const setValue = (e) => {
    const clickedNum = e.target.dataset.num;
    if (isEmpty(result)) {
      String(newNum).split("")[0] == 0
        ? (newNum = clickedNum)
        : (newNum += clickedNum);
    } else {
      newNum = clickedNum;
      result = "";
    }
    $("#calculate-display").innerText = newNum;
  };

  // 연산자를 클릭했을 때 result 값이 있다면 result의 값을 oldNum에,
  // result가 없고 newNum의 값이 있다면 newNum의 값을 oldNum에 저장하고
  // 마지막으로 연산자를 변수에 저장한다.
  const saveValue = (e) => {
    oldNum = result || newNum || oldNum;
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
        result = result || newNum;
    }
    $("#calculate-display").innerText = result;
    ops = "";
  };

  // C 버튼을 클릭했을 때 변수를 초기화한다.
  const clearAll = () => {
    oldNum = "";
    newNum = "";
    result = "";
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
      return;
    }
    if (e.target.dataset.ops) {
      saveValue(e);
      return;
    }
  });

  $("#clear").addEventListener("click", clearAll);
}

App();
