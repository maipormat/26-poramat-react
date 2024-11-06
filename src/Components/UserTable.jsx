import axios from "axios";
import { useState, useEffect } from "react";

function UserTable() {
    const Api = "https://jsd5-mock-backend.onrender.com";
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${Api}/members`);
      setEmployees(response.data);
    };
    getData();
  }, []);

return(
    <div className="flex justify-center">
        <table className="text-center text-[1.5rem] text-white bg-gray-500 mt-[5rem]">
          <thead>
            <tr>
              <th className="border-2 border-black w-[15rem]">Name</th>
              <th className="border-2 border-black w-[15rem]">Last Name</th>
              <th className="border-2 border-black w-[15rem]">Position</th>
            </tr>
          </thead>
          <tbody>
            {/* แสดงข้อมูลพนักงาน */}
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td className="border-2 border-black">{employee.name}</td>
                <td className="border-2 border-black">{employee.lastname}</td>
                <td className="border-2 border-black">{employee.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
);
      
}

export default UserTable