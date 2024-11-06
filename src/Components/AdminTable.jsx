import { useState, useEffect } from "react";
import axios from "axios";

// คอมโพเนนต์หลักสำหรับแสดงและจัดการตารางข้อมูล
function AdminTable() {
  const Api = "https://jsd5-mock-backend.onrender.com"; // กำหนด URL ของ API
  const [employees, setEmployees] = useState([]); // เก็บข้อมูลพนักงานจาก API
  const [reload, setReload] = useState(false); // ใช้สำหรับรีเฟรชข้อมูลหลังจากสร้างหรือลบ ตั้งให้มันเป็นฟอลท์รอไว้ก่อน

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${Api}/members`); // ดึงข้อมูลพนักงานจาก API
      setEmployees(response.data);
    };
    getData();
  }, [reload]); // ใช้ reload เพื่อดึงข้อมูลใหม่เมื่อมีการเปลี่ยนแปลง

   // ฟังก์ชันสำหรับสร้างข้อมูลใหหม่
  const createData = async (name, lastname, position) => {
    const requestData = { name, lastname, position }; // สร้างข้อมูลพนักงานใหม่
    const response = await axios.post(`${Api}/members`, requestData); // ส่งข้อมูลไปยัง API
    if (response.status === 200) { // http code 200 เช็คว่าการส่งข้อมูลสำเร็จและการตอบรับจากเซิร์ฟเวอร์เป็นปกติ (OK)
      setReload(!reload); // ทำให้ค่าreload true เพื่อรีเฟรชข้อมูลตารางใหม่
      console.log("created successfully!", response); // แสดงผลลัพธ์ใน console
    }
  };

  // ฟังก์ชันสำหรับลบ
  const deleteData = async (id) => {
    const response = await axios.delete(`${Api}/member/${id}`);// ส่งคำขอลบไปยัง API ตาม ID
    if (response.status === 200) { // เป็นการเช็คเหมือนที่เขียนไว้ด้านบน
      setReload(!reload);
      console.log("deleted successfully!", response);
    }
  };

  return (
    <div>
      <InputData createData={createData} /> {/* ฟอร์มสำหรับเพิ่มข้อมูล */}
      <div className="flex justify-center">
        <table className="text-center text-[1.5rem] text-white bg-gray-500 mt-[2rem]">
          <thead>
            <tr>
              <th className="border-2 border-black w-[15rem]">Name</th>
              <th className="border-2 border-black w-[15rem]">Last Name</th>
              <th className="border-2 border-black w-[15rem]">Position</th>
              <th className="border-2 border-black w-[15rem]">Action</th> {/* หัวตารางปุ่มลบปุ่มลบ */}
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (  // วนลูปแสดงข้อมูลแต่ละคน
              <tr key={employee.id}>
                <td className="border-2 border-black">{employee.name}</td>
                <td className="border-2 border-black">{employee.lastname}</td>
                <td className="border-2 border-black">{employee.position}</td>
                <td className="border-2 border-black">
                  <p
                    className="text-red-600 hover:text-red-300 hover:cursor-pointer"
                    onClick={() => deleteData(employee.id)} // ออนคลิกให้ฟังชั่น ลบข้อมูลทำงาน ฟังชั่นด้านบน
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
  const [name, setName] = useState(""); // เก็บค่าชื่อ
  const [lastname, setLastname] = useState("");  // เก็บค่านามสกุล
  const [position, setPosition] = useState(""); // เก็บค่าตำแหน่ง

  const submitHandle = (e) => {
    e.preventDefault();
    createData(name, lastname, position); // เรียกฟังก์ชันสร้างข้อมูลใหม่
    setName(""); // ล้างช่องกรอกทั้ง3ตัวให้ว่าง
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
            onChange={(event) => setName(event.target.value)} // อัปเดตค่าเมื่อเราพิมในช่อง
            placeholder="Name"
            className="px-2 py-1"
          />
        </div>
        <div className="border">
          <input
            type="text"
            value={lastname}
            onChange={(event) => setLastname(event.target.value)} // อัปเดตค่าชเมื่อเราพิมในช่อง
            placeholder="Last Name"
            className="px-2 py-1"
          />
        </div>
        <div className="border">
          <input
            type="text"
            value={position}
            onChange={(event) => setPosition(event.target.value)} // อัปเดตค่าชเมื่อเราพิมในช่อง
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
