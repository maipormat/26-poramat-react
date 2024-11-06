import axios from "axios"; {/*อิมพอร์ทaxiosมาใช้สำหรับการfetch api*/}
import { useState, useEffect } from "react"; 

{/* ฟังชั่นสำหรับดึงข้อมูลจากapi */}
function UserTable() {
    const Api = "https://jsd5-mock-backend.onrender.com"; {/* กำหนดค่า URL หลักของ API ไว้ในตัวแปร Api เพื่อให้ง่ายต่อการใช้ */}
  const [employees, setEmployees] = useState([]);   // ประกาศสถานะสำหรับเก็บข้อมูล และฟังก์ชันสำหรับอัปเดตข้อมูล

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${Api}/members`); {/* เกทข้อมูลจากลิ้งapi/members เก็บไว้ในresponse */}
      setEmployees(response.data);   // อัปเดตสถานะ employees ให้มีค่าตามข้อมูลจาก API เพื่อเตรียมข้อมูลสำหรับการแสดงผล
    };
    getData();
  }, []);

// แสดงผลตารางข้อมูล
return(
    <div className="flex justify-center">
        <table className="text-center text-[1.5rem] text-white bg-gray-500 mt-[5rem]">
          <thead>
               {/* หัวตาราง */}
            <tr>
              <th className="border-2 border-black w-[15rem]">Name</th>
              <th className="border-2 border-black w-[15rem]">Last Name</th>
              <th className="border-2 border-black w-[15rem]">Position</th>
            </tr>
          </thead>
          <tbody>
            {/* แสดงข้อมูลพนักงาน ใช้ .mapเพื่อวนลูปผ่านรายการพนักงานแต่ละคน */}
            {employees.map((employee) => (
              <tr key={employee.id}>  {/* ใช้ employee.id เป็น key สำหรับแต่ละแถว */}
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