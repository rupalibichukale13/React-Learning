import { createContext, useState } from "react";
// Create a context
export const EmployeeContext = createContext();
// Create a provider component
export const EmployeeProvider = ({ children }) => {

    const [employee, setEmployee] = useState([]);

    // Function to add an employee
    const addEmployee = (emp) => {
        setEmployee([...employee, emp]);
        console.log('add employee called');
    };

    // Function to edit an employee
    const editEmployee = (id, updatedEmployee) => {
        console.log('Inside edit function');
        setEmployee(
            employee.map((emp) => emp.id === id ? updatedEmployee : emp)
        );
    };
    
    // Function to delete an employee
    const deleteEmployee = (id) => {
        setEmployee(employee.filter((employee) => employee.id !== id));
    };
    return (
        <EmployeeContext.Provider value={{ employee, addEmployee, editEmployee, deleteEmployee }}>
            {children}
        </EmployeeContext.Provider>
    );
};
