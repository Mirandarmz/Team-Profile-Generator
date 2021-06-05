const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('Miranda4', '60', 'miranda4@gmail.com', '1');
    
    expect(manager.name).toBe('Miranda4');
    expect(manager.id).toBe('60');
    expect(manager.email).toBe('miranda4@gmail.com');
    expect(manager.officeNumber).toBe('1');
});

test("Returns manaber's role", () => {
    const manager = new Manager('Miranda4', '60', 'miranda4@gmail.com', '1');

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});