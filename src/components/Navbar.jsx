import logo from "../assets/img/logo.png"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <>
        <div className="flex w-full  justify-between gap-1">
            <div className="w-25 h-20">
                <img src={logo} alt="logo" />
            </div>
            <div className="w-100 h-20  rounded-bl-4xl bg-black text-white flex gap-6 justify-evenly items-center text-lg">
                <div>
             <NavLink to="/" className="text-white hover:text-gray-300">Home</NavLink>
                </div>
                <div>
                    <NavLink to="/dashboard" className="text-white hover:text-gray-300">Dashboard</NavLink>
                </div>
                <div>
                   <NavLink to="/login" className="text-white hover:text-gray-300">Login</NavLink>
                </div>

            </div>
        </div>
        </>
    )
}
    export default Navbar