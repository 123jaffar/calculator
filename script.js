
function clearScreen() {
    var inputField = document.getElementById('screen');
    inputField.value = '';
  }


function clickBtn(index){
 var inputField = document.getElementById('screen');
 inputField.value += index;
   

}


var resultElement = document.getElementById('screen');
var expression= '';

function clickBtn(number) {
  expression += number;
  resultElement.value = expression;
}

function clickBtnOp(operator) {
  expression += operator;
  resultElement.value = expression;
}

function calculate() {
  try {
    var result = eval(expression);
    resultElement.value = result;
    expression = '';
  } catch (error) {
    resultElement.value = 'Error';
  }
}