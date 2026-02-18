from abc import ABC, abstractmethod;
class Employee(ABC):
    def __init__(self,name,email,base_salary):
        self.name = name
        self.email = email
        self.base_salary = base_salary
                    #!Abstraction and encapsulation
    #? Encapsulation        
    def get_name(self):
        return self.name
    
    def get_email(self):
        return self.email
    
    @abstractmethod #? abstraction
    def calculate_salary(self):
        pass