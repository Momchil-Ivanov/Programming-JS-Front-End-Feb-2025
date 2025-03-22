function employees(input) {
    let employeeList = {};
    
    input.forEach(employeeName => {
        employeeList[employeeName] = employeeName.length;
    });
    
    for (let employee in employeeList) {
        console.log(`Name: ${employee} -- Personal Number: ${employeeList[employee]}`);
    }
}

// employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);
// employees(['Samuel Jackson', 'Will Smith', 'Bruce Willis', 'Tom Holland']);
