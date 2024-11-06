import Button from "./Button";
import AdminTable from "./AdminTable"; 

function HomeAdmin() {
  return (
    <div>
      {/* ส่วนหัวของหน้า */}
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-4xl font-bold text-center">Generation Thailand</h1>
        <h2 className="text-2xl font-semibold text-center mt-4">Home - Admin Sector</h2>
        <Button /> 
      </div>


      <AdminTable /> 
    </div>
  );
}

export default HomeAdmin;
