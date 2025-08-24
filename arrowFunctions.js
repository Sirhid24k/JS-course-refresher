const firstNumber = 20;
const secondNumber = 10;
let varyingNumber;

// Implicit Function Return
const addNumbers = (firstNum, secondNum) => firstNum + secondNum;

// Explicit Function Return
const randomNumber = num => {
  varyingNumber = Math.random();
  return varyingNumber * num;
};

const result = addNumbers(7, 3);
const secondResult = randomNumber(3);
console.log(result, secondNumber);
