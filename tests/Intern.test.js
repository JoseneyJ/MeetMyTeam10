//COMPLETE
// Need a require of the Intern
const Intern = require("../lib/Intern");
//We are going to see if we can create a School name: 
test('We are going to be testing the object using the constructor', () => {
    const employeeCreation = new Intern("Joseney", 1, "info.chuchaa@gmail.com", "UTA")
    expect(employeeCreation.school).toBe("UTA");
});

test('We are testing getting getSchool', () => {
    const employeeCreation = new Intern("_", 1, "_", "UTA")
    expect(employeeCreation.getSchool()).toBe("UTA");
});

// Testing the getRole().
test('WE are testing the getRole()', () => {
    const employeeCreation = new Intern("Joseney", 1, "info.chuchaa@gmail.com")
    expect(employeeCreation.getRole()).toBe("Intern");
});