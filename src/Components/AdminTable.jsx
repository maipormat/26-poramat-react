import { useState, useEffect } from "react";
import axios from "axios";


function AdminTable() {
  const Api = "https://jsd5-mock-backend.onrender.com";
  const [employees, setEmployees] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${Api}/members`);
      setEmployees(response.data);
    };
    getData();
  }, [reload]);

  const createData = async (name, lastname, position) => {
    const requestData = { name, lastname, position };
    const response = await axios.post(`${Api}/members`, requestData);
    if (response.status === 200) {
      setReload(!reload);
      console.log("created successfully!", response);
    }
  };

  const deleteData = async (id) => {
    const response = await axios.delete(`${Api}/member/${id}`);
    if (response.status === 200) {
      setReload(!reload);
      console.log("deleted successfully!", response);
    }
  };

  return (
    <div>
      <InputData createData={createData} />
      <div className="flex justify-center">
        <table className="text-center text-[1.5rem] text-white bg-gray-500 mt-[2rem]">
          <thead>
            <tr>
              <th className="border-2 border-black w-[15rem]">Name</th>
              <th className="border-2 border-black w-[15rem]">Last Name</th>
              <th className="border-2 border-black w-[15rem]">Position</th>
              <th className="border-2 border-black w-[15rem]">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td className="border-2 border-black">{employee.name}</td>
                <td className="border-2 border-black">{employee.lastname}</td>
                <td className="border-2 border-black">{employee.position}</td>
                <td className="border-2 border-black">
                  <p
                    className="text-red-600 hover:text-red-300 hover:cursor-pointer"
                    onClick={() => deleteData(employee.id)}
                  >
                    Delete
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// คอมโพเนนต์สำหรับฟอร์มเพิ่มข้อมูล
const InputData = ({ createData }) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();
    createData(name, lastname, position);
    setName("");
    setLastname("");
    setPosition("");
  };

  return (
    <div>
      <h1 className="text-center mt-10 text-3xl font-bold">Create User Here</h1>
      <form onSubmit={submitHandle} className="text-center flex justify-center items-center gap-6 mt-5">
        <div className="border">
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Name"
            className="px-2 py-1"
          />
        </div>
        <div className="border">
          <input
            type="text"
            value={lastname}
            onChange={(event) => setLastname(event.target.value)}
            placeholder="Last Name"
            className="px-2 py-1"
          />
        </div>
        <div className="border">
          <input
            type="text"
            value={position}
            onChange={(event) => setPosition(event.target.value)}
            placeholder="Position"
            className="px-2 py-1"
          />
        </div>
        <div>
          <button
            className="text-white text-[1.5rem] rounded-md bg-slate-500 p-2 hover:bg-black"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminTable;
