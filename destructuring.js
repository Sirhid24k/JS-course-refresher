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
