from models.employee import Employee;
class PartTimeEmployee(Employee):
                                #! Inheritnce + Polymorhpism
    def __init__(self, name, email, hourly_rate, hours_worked):
        super().__init__(name,email,hourly_rate)
        self.hours_worked = hours_worked
    
    def calculate_salary(self):
        return self.base_salary * self.hours_worked #! Potential error 