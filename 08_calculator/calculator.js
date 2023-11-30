const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function(args) {
  return args.reduce( (sum,elem) => sum+elem, 0);
};

const multiply = function(args) {
  return args.reduce( (sum,elem) => sum*elem, 1);
};

const power = function(a,b) {
  return a**b;
};

const factorial = function(a) {
  if(a > 1) {
    return a*factorial(a-1);
  } else if(a >= 0) {
    return 1;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
