//COMPLETE
//Need to require the Employee from the lib: 
const Employee = require("../lib/Employee");


// we are going to create the first test to test create a new employee
test("Can create a new Employee", () => {
    const employeeCreation = new Employee();
    expect(typeof (employeeCreation)).toBe("object");
});

test("We are going to be testing the object using the constructor", () => {
    const employeeCreation = new Employee("Joseney", 1, "info.chuchaa@gmail.com")
    expect(employeeCreation.name).toBe("Joseney");
    expect(employeeCreation.id).toBe(1);
    expect(employeeCreation.email).toBe("info.chuchaa@gmail.com")
});

test("We are going to be testing the getName()", () => {
    const employeeCreation = new Employee("Joseney")
    expect(employeeCreation.getName()).toBe("Joseney");
});

test('We are testing getId()', () => {
    const employeeCreation = new Employee("_", 1)
    expect(employeeCreation.getId()).toBe(1);
});

test('We are testing the getEmail()', () => {
    const employeeCreation = new Employee("_", 1, "info.chuchaa@gmail.com")
    expect(employeeCreation.getEmail()).toBe("info.chuchaa@gmail.com")
});

test('We are testing the getRole()', () => {
    const employeeCreation = new Employee("Joseney", 1, "info.chuchaa@gmail.com")
    expect(employeeCreation.getRole()).toBe("Employee")
})

