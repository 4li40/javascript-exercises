const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, value) => total + value,0);
};

const multiply = function(arr) {
  return arr.reduce((product, value) => product * value);
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(nb) {
	if(nb === 0) return 1;
  let product = 1;
  for (let i = nb; i > 0; i--){
    product *= i;
  }
  return product;
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
