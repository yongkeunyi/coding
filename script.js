 <script>
    const display = document.getElementById("display");
    let operator = null;
    let firstOperand = null;
    let secondOperand = null;

    function clearDisplay() {
      display.value = "";
      operator = null;
      firstOperand = null;
      secondOperand = null;
    }

    function appendNumber(number) {
      display.value += number;
    }

    function setOperator(op) {
      operator = op;
      firstOperand = parseFloat(display.value);
      display.value = "";
    }

    function calculateResult() {
      secondOperand = parseFloat(display.value);

      switch (operator) {
        case "+":
          display.value = firstOperand + secondOperand;
          break;
        case "-":
          display.value = firstOperand - secondOperand;
          break;
        case "*":
          display.value = firstOperand * secondOperand;
          break;
        case "/":
          display.value = firstOperand / secondOperand;
          break;
      }
    }
  </script>
