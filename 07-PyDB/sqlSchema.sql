create database company_db;
USE company_db;
CREATE TABLE departments (
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (100)
);

CREATE TABLE employees(
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (100),
    email VARCHAR (100),
    employee_type VARCHAR (50),
    base_salary decimal(10,2),
    department_id INT,
    foreign key (department_id) references departments(id)
);

create table salaries (
	id INT auto_increment primary key,
    employee_id INT,
    total_salary decimal(10,2),    
	foreign key (employee_id) references employees(id)
);