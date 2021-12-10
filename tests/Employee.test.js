const Employee = require("../library/Employee");

describe('Employee', () => {

    describe('instantiation', () => {
        it('should pass and instantiate object correctly', () => {
            //Arrange
            //Act
            let testEmployee = new Employee('Jesus', 1, '22laloc@gmail.com');

            //Assert
            expect(testEmployee.name).toBe('Jesus')
            expect(testEmployee.id).toBe(1)
            expect(testEmployee.email).toBe('22laloc@gmail.com')
        });
    });

    describe('getName', () => {
        it('should return name correctly ', () => {
            let testEmployee = new Employee('Jesus', 1, '22laloc@gmail.com');
            expect(testEmployee.getName()).toBe('Jesus');
        });
    });
    
    describe('getRole', () => {
        it('should return employees role correctly', () => {
            let testEmployee = new Employee('Jesus', 1,  '22laloc@gmail.com');
            expect(testEmployee.getRole()).toBe('Employee');
            
        });
    });
    
    describe('getEmail', () => {
        it('should return the employees email correctly', () => {
            let testEmployee = new Employee('Jesus', 1,  '22laloc@gmail.com');
            expect(testEmployee.getEmail()).toBe('22laloc@gmail.com');
            
        });
    });
    
    describe('getId', () => {
        it('should return the employees ID correctly', () => {
            let testEmployee = new Employee('Jesus', 1, '22laloc@gmail.com');
            expect(testEmployee.getId()).toBe(1);
            
        });
    });
    
});