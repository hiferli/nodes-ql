import database from '../Database.js'

export const getAllEmployees = async (request , response) => {
    await database.query(`
        SELECT *
        FROM employee
        JOIN department ON employee.department_id = department.department_id;
    `, (error, result, fields) => {
        if (error) {
            return response.status(502).json({
                'error': error
            });
        } else if (result) {
            return response.status(201).json({
                'result': result
            })
        }
    })
}

export const uploadEmployee = async (request , response) => {
    const { employee_id , employee_name , department_id } = request.body;

    if (employee_id && employee_name && department_id) {
        await database.query(`
            INSERT INTO employee (
                employee_id , employee_name , department_id
            ) VALUES (
                '${parseInt(employee_id)}' , '${employee_name}' , ${department_id}
            );
        ` , (error, result, fields) => {
            if (error) {
                return response.status(502).json({
                    'error': error
                })
            } else if (result) {
                return response.status(201).json({
                    'result': result
                })
            }
        })
    } else {
        return response.status(400).json({
            'error': "Please enter valid department details"
        })
    }
}