const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const keys = $$(".btn");
const operators = $$(".btn--secondary");
const resultCaculator = $(".caculate__result");
const displayCaculator = $(".caculate__display");

function saveCalc() {
  for (let operator of operators) {
    operator.addEventListener("click", function () {
      displayCaculator.value = resultCaculator.value;
      resultCaculator.value = "";
    });
  }
}

function printNumber() {
  keys.forEach((key) => {
    key.onclick = (e) => {
      switch (e.target.value) {
        case "C":
          displayCaculator.value = "";
          resultCaculator.value = "0";
          break;
        case "undo":
          const newValue = resultCaculator.value.slice(0, -1);

          resultCaculator.value = newValue;
          if (!newValue) {
            resultCaculator.value = 0;
          }
          break;

        case "=":
          const currentValue = displayCaculator.value;
          console.log("currentValuec", currentValue);
          let result = displayCaculator.value + resultCaculator.value;

          let calc = eval(result);
          console.log("moi", calc);
          resultCaculator.value = calc;
          // displayCaculator.value = result;
          // displayCaculator.value =
          break;
        case "+/-":
          let reverse = resultCaculator.value * -1;
          resultCaculator.value = reverse;
          break;
        case "%":
          let res = resultCaculator.value;
          let percent = res / 100;
          resultCaculator.value = percent;
          break;
        default:
          if (resultCaculator.value == "0") {
            resultCaculator.value = "";
          }
          resultCaculator.value += e.target.innerHTML;
          break;
      }
    };
  });
}

function init() {
  printNumber();
  saveCalc();
}

init();
