// Destructuring
// Array destructuring
const studentsLogs = [
  {
    name: 'Mark Johnson',
    age: 25,
    department: 'Physical Science',
    clubs: ['art', 'music', 'sports'],
    courses: {
      required: ['math', 'english', 'physics'],
      elective: ['biology'],
    },
    checkedIn: true,
  },
  {
    name: 'Jessica Matthews',
    age: 23,
    department: 'Social Science',
    clubs: ['art', 'music'],
    courses: {
      required: ['english', 'sociology'],
      elective: ['math'],
    },
    checkedIn: false,
  },
  {
    name: 'Steven Carlson',
    age: 26,
    department: 'Electrical Engineering',
    clubs: ['science', 'hackathon'],
    courses: {
      required: ['math', 'english', 'physics'],
      elective: ['chemistry'],
    },
    checkedIn: true,
  },
  {
    name: 'Annastasia Bullhorn',
    age: 24,
    department: 'Medicine',
    clubs: ['art', 'music', 'sports'],
    courses: {
      required: ['biology', 'chemistry', 'english'],
      elective: ['math'],
    },
    checkedIn: true,
  },
];
/*
const [student1, student2, student3, student4] = studentsLogs;
console.log(student1.name);
console.log(student2.age);
console.log(student3.clubs);
console.log(student4.courses.required);

// More Array Destructuring
const fruits = ['orange', 'apple', 'banana', 'pineapple', 'watermelon'];

// Rest Operator
const [fruit1, fruit2, ...restFruit] = fruits;

// Spread Operator
const moreFruit = ['grape', ...fruits];
console.log(fruit1, fruit2);
console.log(restFruit);
console.log(moreFruit);

const mark = {
  firstName: 'Mark Johnson',
  age: 25,
  department: 'Physical Science',
  clubs: ['art', 'music', 'sports'],
  courses: {
    required: ['math', 'english', 'physics'],
    elective: ['biology'],
  },
  checkedIn: true,
};

// Object Destructuring
// const { firstName, age, department } = mark;
const { firstName: justName, age: justAge, department: justDepartment } = mark;

// Rest and Spread Operator
const { firstName, age, department, ...restOfFields } = mark;
const moreFields = {
  ...mark,
  checkedOut: false,
};
// console.log(firstName, age, department);
console.log(justName, justAge, justDepartment);
console.log(firstName, age, department, restOfFields);
// console.log(moreFields);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Arrow Functions

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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Promises
// Fetching Promise (Data)
function fetchData() {
  return new Promise((resolve, reject) => {
    console.log('Fetching Data...');

    // Simulating an API call
    setTimeout(() => {
      // Test success = false;
      const success = true;
      if (success) {
        resolve('Data fetched successfully!'); // Fulfills the Promise
      } else {
        reject('Error: Could not fetch data.'); // Rejects the Promise
      }
    }, 2000); // 2 seconds delay
  });
}

// Using the Promise
fetchData()
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Async/Await
async function fetchDataWithAsync() {
  try {
    const res = await fetchData();
    const data = await res;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
// Calling the async function
fetchDataWithAsync();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Modules (Imports)
import subtract, { PI, add } from './module.js';

console.log(PI);
console.log(add(5, 3));
console.log(subtract(10, 4));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Ternary Operator
const wage = 1100;
const canApplyForLoan =
  wage >= 1000 ? 'Eligible for loan' : 'Not eligible for loan';
console.log(canApplyForLoan);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Logical Operators and Short-Circuiting
// AND (&&) Operator, returns true if both operands are true, short-circuits if the first operand is false
const isLoggedIn = false;
const hasPremiumAccount = true;
const eligibleForDiscount = isLoggedIn && hasPremiumAccount;
console.log(eligibleForDiscount);

// OR (||) Operator, returns true if at least one operand is true, short-circuits if the first operand is true
const returnsTrue = true || 'Something';
const returnsSomething = 'Something' || true;
console.log(returnsTrue, returnsSomething);

// Nullish Coalescing (??) Operator, only null and undefined are considered nullish, 0 and '' are valid values
// Works similarly to OR (||) operator but only considers null and undefined as falsy values
const amount = 0;
const count = amount ?? 10; // count will be 0, not 10
console.log(count);

// Optional Chaining (?.) Operator, allows safe access to deeply nested object properties
const user = {
  id: 2345678,
  profile: {
    name: 'John',
    premiumUser: true,
  },
};
console.log(user.profile?.premiumUser);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Array Methods
// Map Method
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);

// Filter Method
const evenNumbers = numbers.filter(num => num % 2 === 0);
const oddNumbers = numbers.filter(num => num % 2 === 1);
console.log(evenNumbers);
console.log(oddNumbers);

// Reduce Method
const sumOfNumbers = numbers.reduce((acc, currValue) => acc + currValue, 0);
console.log(sumOfNumbers);

// Sort Method
const unsortedNumbers = [4, 2, 9, 1, 5, 6];
// Ascending Order
const sortedNumbersAsc = unsortedNumbers.slice().sort((a, b) => a - b);
// Descending Order
const sortedNumbersDes = unsortedNumbers.slice().sort((a, b) => b - a);
console.log(unsortedNumbers, sortedNumbersAsc, sortedNumbersDes);
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Asynchronous JavaScript - Promises and Fetch API
// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(res => res.json())
//   .then(data => console.log(data.filter(user => user.userId === 1)));

// Asynchronous JavaScript - Async/Await
const button = document.querySelector('.btn');
const container = document.querySelector('main');

button.addEventListener('click', getTodos);

async function getTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();

  const userTodos = data.filter(user => user.userId === 1);
  userTodos.forEach(todo => {
    const html = `
    <section class="todo">
      <h2>User: <span class="user-id">${todo.id}</span></h2>
      <h2>Task Completed: <span class="completed">${todo.completed}</span></h2>
      <h2>Task/Title: <span class="task">${todo.title}</span></h2>
    </section>
    `;

    container.insertAdjacentHTML('beforeend', html);
  });
}
