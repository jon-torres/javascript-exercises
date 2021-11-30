const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const sum = (array) => {
  return array.reduce((total, currentValue) => total + currentValue, 0);
};

const multiply = (array) => {
  return array.reduce((total, currentValue) => total * currentValue);
};

const power = (a, b) => {
  return a ** b;
};

const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
