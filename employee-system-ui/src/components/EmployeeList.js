import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import Employee from "./Employee";

const EmployeeList = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState(null);
  const [loading, setLoading] = useState(true);


  const deleteEmployee = (e, id) => {
    e.preventDefault();
    EmployeeService.deleteEmployee(id).then((res) => {
        if(employees) {
            setEmployees((prevElement) => {
                return prevElement.filter((employee) => employee.id !== id);
            })
        }
    })

  }
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmployees();
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="p-5 mx-auto my-5">
      <div className="h-12">
        <button
          onClick={() => navigate("/addEmployee")}
          className="rounded bg-slate-600 text-white px-6 py-2 font-semibold"
        >
          Add Employee
        </button>
      </div>
      <div className="flex shadow border">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left font-medium text-gray-600 uppercase  py-3 px-6">
                First name
              </th>
              <th className="text-left font-medium text-gray-600 uppercase py-3 px-6">
                Last name
              </th>
              <th className="text-left font-medium text-gray-600 uppercase py-3 px-6">
                Email ID
              </th>
              <th className="text-center font-medium text-gray-600 uppercase py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>

          {!loading && (
            <tbody className="bg-white">
              {employees.map((employee) => (
                <Employee 
                    employee={employee}
                    deleteEmployee={deleteEmployee}
                    key={employee.id}
                />
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
