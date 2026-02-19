import mysql.connector

def get_connection():
    return mysql.connector.connect(
        host ="localhost",
        user= "root",
        password = "root",
        database = "company_db"
    )
    
# conn = get_connection();

# if(conn):
#     print("connection Sucessfull");