import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Owner from "./Components/Owner"
import HomeUser from "./Components/HomeUser";
import HomeAdmin from "./Components/HomeAdmin";
import { Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/owner" element={<Owner />} />
        <Route path="/homeuser" element={<HomeUser />} /> 
        <Route path="/homeadmin" element={<HomeAdmin />} />
      </Routes>
    </>
  );
}
