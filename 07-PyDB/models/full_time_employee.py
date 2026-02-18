from models.employee import Employee;
                #! Inheritance + Polymorphism
class FullTimeEmployee(Employee):
    
    def calculate_salary(self):
        return self.base_salary + (0.20 * self.base_salary)
