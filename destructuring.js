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

studentsLogs.forEach(student =>
  console.log(
    `Student's name is ${student.name} and aged ${student.age}. ${student.name}'s required courses are: ${student.courses.required}`
  )
);
