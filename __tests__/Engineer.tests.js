const Engineer = require('../lib/Engineer.js')

test('Create an engineer', () => {
    const engineer = new Engineer ('Miranda2', '57', 'miranda2@gmail.com', 'mirandarmz')
    
    expect(engineer.name).toBe('Miranda2');
    expect(engineer.id).toBe('57');
    expect(engineer.email).toBe('miranda2@gmail.com');
    expect(engineer.github).toBe('mirandarmz');
});

test ("Returns engineer's github user", () => {
    const engineer = new Engineer ('Miranda2', '57', 'miranda2@gmail.com', 'mirandarmz')

    expect(engineer.getGithub()).toEqual(expect.stringContaining('mirandarmz'));
});

test("Returns Engineer's role", () => {
    const engineer = new Engineer ('Miranda2', '57', 'miranda2@gmail.com', 'mirandarmz')

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});
