// import mysql from 'mysql'
import database from './Database.js'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

import departmentRoutes from './Routes/DepartmentRoutes.js'
import employeeRoutes from './Routes/EmployeeRoutes.js'

const app = express();
app.use(cors())
app.use(express.json())

app.get('/', (request, response) => {
    response.send('Hello World!')
})

app.use('/departments' , departmentRoutes)
app.use('/employees' , employeeRoutes)

const port = process.env.PORT;
app.listen(port , () => {
    console.log(`App listening on port ${port}`);
})