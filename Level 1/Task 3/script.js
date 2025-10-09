let result = document.getElementById("result");

function appendNumber(number) {
  result.value += number;
}

function appendOperator(operator) {
  const lastChar = result.value.slice(-1);
  if (['+', '-', '*', '/'].includes(lastChar)) return;
  result.value += operator;
}

function clearResult() {
  result.value = '';
}

function calculate() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = 'Error';
  }
}
