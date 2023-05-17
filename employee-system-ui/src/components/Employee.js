import React from "react";
import { useNavigate } from "react-router-dom";

const Employee = ({ employee, deleteEmployee }) => {
    const navigate = useNavigate();
    const editEmployee = (e, id) => {
        e.preventDefault();
        navigate(`/updateEmployee/${id}`);
    }
  return (
    <>
      <tr key={employee.id}>

        <td className="text-left px-6 py-4 whitespace-nowrap">
          <div className=" text-gray-500">{employee.firstName}</div>
        </td>

        <td className="text-left px-6 py-4 whitespace-nowrap">
          <div className=" text-gray-500">{employee.lastName}</div>
        </td>

        <td className="text-left px-6 py-4 whitespace-nowrap">
          <div className=" text-gray-500">{employee.emailId}</div>
        </td>

        <td className="text-center px-6 py-4 whitespace-nowrap">

          <a onClick={(e, id) => editEmployee(e, employee.id)} className="text-indigo-600 hover:text-indigo-800 px-2 hover:cursor-pointer">
            Edit
          </a>

          <p className="inline">|</p>
          <a onClick={(e, id) => deleteEmployee(e, employee.id)} className="text-indigo-600 hover:text-indigo-800 px-2 hover:cursor-pointer">
            Delete
          </a>

        </td>
      </tr>
    </>
  );
};

export default Employee;
