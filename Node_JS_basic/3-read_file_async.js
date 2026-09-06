const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, file) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = file.split('\n').filter((line) => line.trim() !== '');
      const header = lines.shift().split(',').map((h) => h.trim());;
      const fieldIndex = header.indexOf('field');
      const firstNameIndex = header.indexOf('firstname');
      const studentsByField = {};

      lines.forEach((line) => {
        const values = line.split(',').map((h) => h.trim());;
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
      resolve();
    });
  });
}

module.exports = countStudents;
