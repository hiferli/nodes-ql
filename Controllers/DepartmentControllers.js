import database from '../Database.js'

export const getAllDepartments = async(request , response) => {
    await database.query('SELECT * FROM department;' , (error , result , fields) => {
        if(error) {
            return response.status(502).json({
                'error': error
            });
        } else if(result) {
            return response.status(201).json({
                'result': result
            })
        }
    })
}

export const uploadDepartment = async (request , response) => {
    const { department_id , department_name } = request.body;

    if(department_id && department_name){
        await database.query(`
            INSERT INTO department (
                department_id , department_name
            ) VALUES (
                '${parseInt(department_id)}' , '${department_name}'
            );
        ` , (error , result , fields) => {
            if(error) {
                return response.status(502).json({
                    'error': error
                })
            } else if(result) {
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