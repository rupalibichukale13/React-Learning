import React, {  useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
//import { EmployeeContext } from './EmployeeStore';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateEmployee } from './employeeSlice';

const EditEmployee = () => {
    const { id } = useParams();

    // const { employee, editEmployee } = useContext(EmployeeContext);
    const employee =  useSelector((state)=> state.employee.employees)
    const dispatch = useDispatch()

    const [validated, setValidated] = useState(false);
    const [empId, setEmpId] = useState('');
    const [empName, setEmpName] = useState('');
    const [position, setPosition] = useState('');
    const [company, setCompany] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Find Employee object from employee array
        const emp = employee.find(emp => emp.id === parseInt(id));
        if (emp) {
            setEmpId(emp.empId);
            setEmpName(emp.empName);
            setPosition(emp.position);
            setCompany(emp.company);
        }
    }, [id, employee]);

    const handleEdit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        const editedEmployee = { id: parseInt(id), empId, empName, position, company };

        //editEmployee(parseInt(id), editedEmployee);
        console.log('inside handle edit')

        dispatch(updateEmployee({id:parseInt(id) ,  editedEmployee}))

        navigate('/');
        setValidated(true);
    };
    return (
        <>
            <h4>Edit Employee</h4>
            <Form noValidate validated={validated} onSubmit={handleEdit} style={{ margin: "60px" }}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="3" controlId="validationCustom01">
                        <Form.Label>Employee ID</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter Employee ID"
                            value={empId} onChange={(e) => setEmpId(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom02">
                        <Form.Label>Employee Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter Employee Name"
                            value={empName} onChange={(e) => setEmpName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom02">
                        <Form.Label>Position</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter Employee Position"
                            value={position} onChange={(e) => setPosition(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom02">
                        <Form.Label>Company</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter Employee Company"
                            value={company} onChange={(e) => setCompany(e.target.value)}
                        />
                    </Form.Group>
                </Row>
                <Button type="submit">Edit Employee</Button>
            </Form>
        </>
    );
};

export default EditEmployee;
