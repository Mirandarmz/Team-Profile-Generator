// using Employee constructor 
const Employee = require('./Lib/Employee');

// creates employee object 
test('Creates an employee with the given parameters', () => {
    const employee = new Employee('Miranda', 140, 'miranda@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// gets name from getName() 
test('Return the employees name', () => {
    const employee = new Employee('Miranda', 140, 'miranda@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// gets id from getId() 
test('Return the employees ID', () => {
    const employee = new Employee('Miranda', 140, 'miranda@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// gets emails from getEmail()
test('Rturn the employees email', () => {
    const employee = new Employee('Miranda', 140, 'miranda@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});
