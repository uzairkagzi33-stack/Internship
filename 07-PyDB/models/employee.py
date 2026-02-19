from abc import ABC, abstractmethod;
class Employee(ABC):
    def __init__(self,name,email,base_salary):
        self._name = name
        self._email = email #! Proltected variables
        self._base_salary = base_salary
                            #!Abstraction and encapsulation       
    def get_name(self):     #? Get methods to access variables safely
        return self.name
    
    def get_email(self):
        return self.email
    
    @abstractmethod          #? abstract class with no defintion, defination must be implemented in child class  
    def calculate_salary(self):
        pass