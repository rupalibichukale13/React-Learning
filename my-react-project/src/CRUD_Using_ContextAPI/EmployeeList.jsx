import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import './crudStyle.css';
import { useNavigate } from 'react-router-dom';
import { EmployeeContext } from './EmployeeStore';
import Table from 'react-bootstrap/Table';

const EmployeeList = () => {
    
    const navigate = useNavigate()
   const {employee , deleteEmployee}= useContext(EmployeeContext)

   const handleDelete = (id) =>{
    deleteEmployee(id);
   }
    
  return (
    <>
        <h4>Employee List</h4>

        <div className='addEmployeeBtn'>
            <Button variant="primary" onClick={()=>navigate('/addEmployee')} >Add Employee</Button>
        </div>
        <br></br>
        <div>

        <Table striped bordered hover>
      <thead>
        <tr>
          <th>SR NO</th>
          <th>EMP ID</th>
          <th>EMP NAME</th>
          <th>POSTION</th>
          <th>COMPANY</th>
          <th>Actions</th>
        </tr>
      </thead>

              <tbody>
                  <th></th>
                  {employee.map((emp,index)=>(
                      <tr key={emp.id}>
                          <td>{index+1}</td>
                          <td>{emp.empId}</td>
                          <td>{emp.empName}</td>
                          <td>{emp.position}</td>
                          <td>{emp.company}</td>

                          <Button variant="warning" size='sm' onClick={()=>navigate(`/editEmployee/${emp.id}`)} >EDIT</Button>
                          <Button variant='danger' size='sm' onClick={() => handleDelete(emp.id)}>Delete</Button>
                      </tr>
                  ))}
              </tbody>
          </Table>

        </div>
        
    </>
  )
}

export default EmployeeList
