import mysql from 'mysql'
import dotenv from 'dotenv'

dotenv.config()

const database = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_NAME
})


database.connect((error) => {
    if(error) {
        console.log('there has been an error')
        console.log(error)
    } else {
        console.log("Database Connected Successfully")

        database.query('CREATE DATABASE IF NOT EXISTS company;');
        database.query('USE company;');
        
        database.query(`
            CREATE TABLE IF NOT EXISTS department
            (
                department_id INT PRIMARY KEY,
                department_name VARCHAR(50)
            );
        `);

        database.query(`
                CREATE TABLE IF NOT EXISTS employee
                (
                    employee_id INT PRIMARY KEY,
                    employee_name VARCHAR(50),
                    department_id INT,
                    FOREIGN KEY (department_id) REFERENCES department(department_id)
                );
        `)

        // database.query(`
        //     SELECT 2 + 2 FROM DUAL
        // ` , (error , result , fields) => {
        //     if(error){
        //         console.log(error)
        //     } else if (result) {
        //         console.log(result)
        //     } else if(fields) {
        //         console.log(fields)
        //     }
        // })
    }
})

export default database;