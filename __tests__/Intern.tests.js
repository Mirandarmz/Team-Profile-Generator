const Intern = require('../lib/Intern.js');

test ('Create an intern', () => {
    const intern = new Intern('Miranda3', '58', 'miranda3@gmail.com', 'ITAM');

    expect(intern.name).toBe('Miranda3');
    expect(intern.id).toBe('58');
    expect(intern.email).toBe('miranda3@gmail.com');
    expect(intern.school).toBe('ITAM');
});

test("Return intern's school", () => {
    const intern = new Intern('Miranda3', '58', 'miranda3@gmail.com', 'ITAM');
    expect(intern.getSchool()).toEqual(expect.stringContaining('ITAM'));
});

test("Returns intern's role", () => {
    const intern = new Intern('Miranda3', '58', 'miranda3@gmail.com', 'ITAM');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});