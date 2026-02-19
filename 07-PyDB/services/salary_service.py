from services.salary_processor import SalaryProcessor
from services.db_connection import get_connection

class SalaryService(SalaryProcessor):               #! IMplements the Interface
    
    def process_salary(self, employee, employee_id): #! method defined
        total_salary = employee.calculate_salary()  #? calls polymorphic method
        
        conn = get_connection()
        cursor = conn.cursor()
        
        query = '''
        INSERT INTO salaries (employee_id, total_salary) VALUES (%s,%s)
        '''
        
        cursor.execute(query,(employee_id,total_salary))
        
        conn.commit()
        conn.close()
        
        return total_salary