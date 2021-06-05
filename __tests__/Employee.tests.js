const Employee = require('../lib/Employee.js');

test('Creates an employee', () => {
    const employee = new Employee('Miranda', '56', 'miranda@gmail.com');

    expect(employee.name).toBe('Miranda');
    expect(employee.id).toBe('56');
    expect(employee.email).toBe('miranda@gmail.com');
});

test("Return employee's name", () => {
    const employee = new Employee('Miranda', '56', 'miranda@gmail.com');

    expect(employee.getName()).toEqual(expect.stringContaining('Miranda'));
});

test("Return employee's ID", () => {
    const employee = new Employee('Miranda', '56', 'miranda@gmail.com');

    expect(employee.getId()).toEqual(expect.stringContaining('56'));
});

test("Return employee's email", () => {
    const employee = new Employee('Miranda', '56', 'miranda@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('miranda@gmail.com'));
});
