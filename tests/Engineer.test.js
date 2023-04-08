//COMPLETE
// Need a require of the Engineer
const Engineer = require("../lib/Engineer");
//We are going to see if we can create a Gibhub user name: 
test('We are going to be testing the object using the constructor', () => {
    const employeeCreation = new Engineer("Joseney", 1, "info.chuchaa@gmail.com", "JoseneyJ")
    expect(employeeCreation.github).toBe("JoseneyJ");
});

test('We are testing getting Github()', () => {
    const employeeCreation = new Engineer("_", 1, "_", "JoseneyJ")
    expect(employeeCreation.getGithub()).toBe("JoseneyJ");
});

//Testing getRole().
test('WE are testing the getRole()', () => {
    const employeeCreation = new Engineer("Joseney", 1, "info.chuchaa@gmail.com")
    expect(employeeCreation.getRole()).toBe("Engineer");
}); 