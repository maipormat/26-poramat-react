import Button from "./Button";
import UserTable from "./UserTable";


function HomeUser() {
  

  return (
    <div>
      {/* ส่วนหัวของหน้า */}
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-4xl font-bold text-center">Generation Thailand</h1>
        <h2 className="text-2xl font-semibold text-center mt-4">Home - User Sector</h2>
        <Button />
      </div>
      <UserTable/>
    </div>
  
  );
}

export default HomeUser;
