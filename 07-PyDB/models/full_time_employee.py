from models.employee import Employee;
                                #! Inheritance + Polymorphism
class FullTimeEmployee(Employee): #? Inherits the class 
    
    def calculate_salary(self):  #? Overriding the method.
        return self.base_salary + (0.20 * self.base_salary)
