from models.full_time_employee import FullTimeEmployee
from models.part_time_employee import PartTimeEmployee
from services.employee_service import EmployeeService
from services.department_service import DepartmentService
from services.salary_service import SalaryService

emp_service = EmployeeService()
dept_service = DepartmentService()
salary_service = SalaryService()

while True:
    print("\n----- Company Mnagement System-----")
    print("1. Add Department")
    print("2. View Departments")
    print("3. Add Employee")
    print("4. View Employees")
    print("5. Process Salary")
    print("6. EXIT")
    
    choice = input("\nEnter Your Choice : ")
    
    if choice == "1":
        name = input("\nEnter new department name : ")
        dept_service.add_department(name)
        
    elif choice == "2":
        depts = dept_service.get_department()
        print("\n")
        for d in depts:
            print(d)
        if not depts:
            print("no records")
            
    elif choice == "3":
        name = input("Name : ")
        email = input("E-mail : ")
        emp_type = input("Type (full/part) : ")
        if emp_type == "full":
            salary = float(input("Base Salary perMonth : "))
        else:
            salary = float(input("Base Salary perHour d: "))
        dept_id = int(input("Department ID (INT) : "))
        
        emp_service.add_employee(name, email, emp_type, salary, dept_id)
        
    elif choice == "4":
        employees = emp_service.get_all_employees()
        for e in employees:
            print(e)
            
    elif choice == "5":
        emp_id = int(input("Enter Emp ID : "))
        emp_data = emp_service.get_employee_by_id(emp_id)
        
        if not emp_data:
            print("404 : Employee Not found")
            continue
        name, email, emp_type, salary = emp_data[1], emp_data[2],emp_data[3], float(emp_data[4])
        
        if emp_type == "full":
            emp = FullTimeEmployee(name, email, salary)
        else:
            hours = int(input("Enter number of hours worked : "))
            emp = PartTimeEmployee(name,email,salary,hours)
        
        total = salary_service.process_salary(emp,emp_id)
        print("Salary Processed : ", total)  
    elif choice == "6":
        break