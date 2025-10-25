// Function declarations
function doSomethingCool() {
  // Return keyword is always explicit
  return 'Something Cool';
}

// Function Expressions
const doAnotherCoolThing = function () {
  // Same with function decalarations
  return 'Another Cool Thing';
};

// Arrow Functions
const doYetAnotherCoolThing = () => 'Yet Another Cool Thing'; // Return keyword is implicit if it is a single line of code otherwise it has to be explicit

console.log(doSomethingCool());
console.log(doAnotherCoolThing());
console.log(doYetAnotherCoolThing());
