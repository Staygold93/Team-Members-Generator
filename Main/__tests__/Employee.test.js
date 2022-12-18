 const Employee = require("../lib/employee");

 describe("Employee", () => {
    describe("Initialization", () => {
        it('Creates a Employee Object', () => {
            const employee = new Employee();
            
            expect(typeof(employee)).toBe("object");
         });

         it('Gets Employees Name',() => {
            const name = 'Azul';
            const employeeObject = new Employee(name);
            
            expect(employeeObject.name).toBe('Azul');
         });

         it('Gets Employees ID',() => {
            const id = 33
            const employeeObject = new Employee('Azul', id);
            
            expect(employeeObject.id).toBe(33);
         });

         it('Gets Employees Emails',() => {
            const email = "zornen33@gmail.com"
            const employeeObject = new Employee('Azul', 33 , email);
            
            expect(employeeObject.email).toBe('zornen33@gmail.com');
         });

         it('Employee has been added as the value for the property of role', () => {
           const returnValue = 'employee';
           const employeeInstance = new Employee('Azul', 33, 'zornen33@gmail.com');
           expect(employeeInstance.getRole()).toBe(returnValue);
         })


    })
 })
 
 