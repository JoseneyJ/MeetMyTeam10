// COMPLETE
// Need a require of the Intern
const Manager = require("../lib/Manager");
// We are going to see if we can create a School name: 
test('We are going to be testing the object using the constructor', () => {
    const employeeCreation = new Manager("JoseneyJ", 1, "info.chuchaa@gmail.com", "123-456-7890")
    expect(employeeCreation.officeNumber).toBe("123-456-7890");
});
// Testing the officeNumber
test('We are testing getting getofficeNumber()', () => {
    const employeeCreation = new Manager("_", 1, "_", "123-456-7890")
    expect(employeeCreation.getOfficeNumber()).toBe("123-456-7890");
});

// Testing the getRole
test('We are testing the getRole()', () => {
    const employeeCreation = new Manager("JoseneyJ", 1, "info.chuchaa@gmail.com")
    expect(employeeCreation.getRole()).toBe("Manager");
}); 