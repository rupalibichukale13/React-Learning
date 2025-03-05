import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employees:[],
  }
  

const employeeSlice = createSlice({
    name : 'employee',
    initialState,
    reducers :{

        addEmployee : (state, action) =>{
            console.log(action.payload)
            state.employees.push(action.payload)
        },

        updateEmployee : (state, action) =>{
            console.log('inside employeeSlice updateEmployee')
            console.log(action.payload)
            const{id, editedEmployee} = action.payload
            
            console.log(editedEmployee)

            const index = state.employees.findIndex(emp=>emp.id === id)
            console.log(index)

            if(index !== -1){
               state.employees[index] = {...state.employees[index], ...editedEmployee}
            }

        },

        deleteEmployee: (state, action) =>{
            console.log(action.payload)
             state.employees = state.employees.filter(employee => employee.id !== action.payload)
        }

    }

})

export const {addEmployee, updateEmployee, deleteEmployee} = employeeSlice.actions
export default employeeSlice.reducer