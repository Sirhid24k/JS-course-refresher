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
