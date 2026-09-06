const fs = require('fs');

function countStudents(path) {
  let file;

  try {
    file = fs.readFileSync(path, 'utf-8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  const lines = file.split('\n').filter((line) => line.trim() !== '');
  const header = lines.shift().split(',');
  const fieldIndex = header.indexOf('field');
  const firstNameIndex = header.indexOf('firstname');
  const studentsByField = {};

  lines.forEach((line) => {
    const values = line.split(',');
    const field = values[fieldIndex];
    const firstName = values[firstNameIndex];

    if (!studentsByField[field]) {
      studentsByField[field] = [];
    }
    studentsByField[field].push(firstName);
  });

  const totalStudents = lines.length;
  console.log(`Number of students: ${totalStudents}`);

  Object.keys(studentsByField).forEach((field) => {
    const students = studentsByField[field];
    console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
  });
}

module.exports = countStudents;
