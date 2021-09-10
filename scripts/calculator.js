const reverseString = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result = str[i] + result;
  }
  return result;
}

const numberPrettifier = (number) => {
  let [preDot, postDot] = number.toString().split('.');
  const reversedPreDot = reverseString(preDot);
  postDot = '.' + postDot;
  if (Number.isInteger(number)) postDot = '';

  let result = '';

  for (let i = 0; i < preDot.length; i+=3) {
    result += reversedPreDot.slice(i, i + 3);
    result += i + 3 < preDot.length ? ',' : '';
  }

  result = reverseString(result);

  return result + postDot;
};

const addToDisplay = (event) => {
  const display = document.querySelector('#display');

  display.value += event.target.textContent;
};

const clearDisplay = () => {
  const display = document.querySelector('#display');
  display.value = '';
};

const deleteFromDisplay = () => {
  const display = document.querySelector('#display');
  const value = display.value;
  display.value = value.slice(0, value.length - 1);
};

const calculate = () => {
  const display = document.querySelector('#display');
  let value = display.value.replace('x', '*');
  value = value.replace(',', '')

  const regex = /[\d-+/*.]/;

  if (!regex.test(value)) {
    display.value = 'Syntax error';
    return;
  }

  try {
    display.value = numberPrettifier(eval(value));
  } catch (exception) {
    display.value = 'Syntax error: ' + exception.message;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const specialButtons = {
    RESET: clearDisplay,
    '=': calculate,
    DEL: deleteFromDisplay,
  };

  const display = document.querySelector('#display');
  const calcButtons = document.querySelectorAll('.buttons>.btn');

  for (button of calcButtons) {
    if (specialButtons[button.textContent]) {
      button.addEventListener('click', specialButtons[button.textContent]);
      continue;
    }
    button.addEventListener('click', addToDisplay);
  }

  display.addEventListener('input', (evt) => {
    const regex = /[\d-+/x.]/;
    if (!regex.test(evt.data)) deleteFromDisplay();
  });
});
