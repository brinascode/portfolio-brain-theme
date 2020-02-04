const Employee = require("../lib/Employee.js")

describe("Employee Class test", ()=>{
    it("Correct properties",()=>{
        var newEmployee = new Employee("Manager","Manager of Web Apps","Jennifer Lee",1,"jlee@corp.com")
        expect(newEmployee.role).toBe("Manager")
    })
})