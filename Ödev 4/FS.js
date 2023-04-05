const fs = require('fs');

// CREATE
const employee = { name: 'Employee 1 Name', salary: 2000 };
fs.writeFile('employees.json', JSON.stringify(employee), (err) => {
  if (err) throw err;
  console.log('Employee added to employees.json');
});

// READ
fs.readFile('employees.json', (err, data) => {
  if (err) throw err;
  const employee = JSON.parse(data);
  console.log('Employee: ', employee);
});

// UPDATE
fs.readFile('employees.json', (err, data) => {
  if (err) throw err;
  const employee = JSON.parse(data);
  employee.name = 'Updated Employee Name';
  employee.salary = 3000;
  fs.writeFile('employees.json', JSON.stringify(employee), (err) => {
    if (err) throw err;
    console.log('Employee updated in employees.json');
  });
});

// DELETE
fs.unlink('employees.json', (err) => {
  if (err) throw err;
  console.log('employees.json deleted');
});
