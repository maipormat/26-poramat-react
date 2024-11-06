import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="flex justify-end bg-slate-500 py-5">
        <button className="mr-[5rem] text-[32px] text-white font-bold"><Link to={'/'}>Home</Link></button>
        <button className="mr-[5rem] text-[32px] text-white font-bold"><Link to={'/owner'}>Owner</Link></button>
    </div>
  )
}

export default Navbar