from abc import ABC,abstractmethod
#! Simple interface that declares a method
class SalaryProcessor(ABC):
    
    @abstractmethod
    def process_salary(self, employee, employee_id): #?NO implementation.
        pass