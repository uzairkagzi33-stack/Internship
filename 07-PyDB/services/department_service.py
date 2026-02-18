from services.db_connection import get_connection

class DepartmentService:
    
    def add_department(self, name):
        conn = get_connection()
        cursor = conn.cursor()
        
        cursor.execute("INSERT INTO departments (name) VALUES (%s)",(name,))
        conn.commit()
        conn.close()
        
        
    def get_department(self):
        conn = get_connection()
        cursor = conn.cursor()
        
        cursor.execute("SELECT * FROM departments")
        result = cursor.fetchall()
        conn.close()
        return result