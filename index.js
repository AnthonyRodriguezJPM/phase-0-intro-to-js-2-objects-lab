// Write your solution in this file!
const employee={name: 'Anthony', streetAddress: 'Houston, TX'};

for (const key in employee) {
    delete employee[key];
  }

  employee.name = 'Sam';



function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newUpdate={...employee}
    newUpdate[key]=value
    return newUpdate
}

console.log(updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway'))

//////////////////////////////////////////
//////////////////////////////////////////

for (const key in employee) {
    delete employee[key];
  }

  employee.name = 'Sam';
  employee.streetAddress='11 Broadway'

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key]=value;
    return employee;
}

console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', 'Tony'));

//////////////////////////////////////////
//////////////////////////////////////////

for (const key in employee) {
    delete employee[key];
  }

  employee.name = 'Sam';
  employee.streetAddress='11 Broadway'

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee={...employee};
    delete newEmployee[key];
    return newEmployee;
}

console.log(deleteFromEmployeeByKey(employee, 'name'));

//////////////////////////////////////////
//////////////////////////////////////////

for (const key in employee) {
    delete employee[key];
  }

  employee.name = 'Sam';
  employee.streetAddress='11 Broadway'

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
     delete employee[key];
     return employee;
  }

  console.log(destructivelyDeleteFromEmployeeByKey(employee, 'name'));