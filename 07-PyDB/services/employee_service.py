from services.db_connection import get_connection

class EmployeeService:
    
    def add_employee(self, name, email, emp_type, salary, dept_id): #? To add Emp
        conn = get_connection()
        cursor = conn.cursor()
        
        query = '''
        INSERT INTO employees (name, email, employee_type, base_salary, department_id)
        VALUES (%s,%s,%s,%s,%s)
        '''        
        cursor.execute(query,(name, email, emp_type, salary, dept_id))
        # print(query)        
        conn.commit()
        conn.close()
        
    def get_all_employees(self):
        conn = get_connection()
        cursor = conn.cursor()
        
        cursor.execute("SELECT * FROM employees")
        result = cursor.fetchall()
        
        conn.close()
        return result
    
    def get_employee_by_id(self, emp_id ):
        conn = get_connection()
        cursor = conn.cursor()
        
        cursor.execute("SELECT * FROM employees WHERE id = %s", (emp_id,))
        result = cursor.fetchone()
        
        conn.close()
        return result