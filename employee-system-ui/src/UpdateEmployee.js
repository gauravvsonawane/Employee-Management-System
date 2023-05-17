import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from './services/EmployeeService';

const UpdateEmployee = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [employee, setEmployee] = useState({
        id: id,
        firstName: "",
        lastName: "",
        emailId: "",
      })
    const updateEmployee = (e) => {
        e.preventDefault();
        EmployeeService.updateEmployee(employee, id)
            .then((response) => {
                navigate("/employeeList")
            })
            .catch((error) => {
                console.log(error);
        });

    }
    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({...employee, [e.target.name]: value});
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await EmployeeService.getEmployeebyId(id);
                setEmployee(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [])
    
  return (
    <div className="max-w-2xl mx-auto shadow-lg border-b my-6 flex justify-center">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wide flex justify-center">
          <h1 className="flex justify-center">Update Employee</h1>
        </div>

        <div className="items-center mx-auto justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={(e)=> handleChange(e)}
            className="h-10 w-96 border px-2 py-2"
          />
        </div>
        <div className="items-center mx-auto justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={(e)=> handleChange(e)}
            className="h-10 w-96 border px-2 py-2"
          />
        </div>
        <div className="items-center mx-auto justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Email
          </label>
          <input 
            type="email" 
            name="emailId"
            value={employee.emailId}
            onChange={(e)=> handleChange(e)}
            className="h-10 w-96 border px-2 py-2" />
        </div>

        <div className="items-center mx-auto justify-center h-14 w-full my-4 space-x-4">
          <button onClick={updateEmployee} className="rounded text-white font-semibold bg-green-400 hover:bg-green-500 py-2 px-4">
            Update
          </button>
          <button 
            onClick={() => navigate("/employeeList")}
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-500 py-2 px-4">
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default UpdateEmployee;