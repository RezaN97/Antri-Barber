import { useState } from "react"
import { Link } from "react-router-dom"
const Login = () => {

    const [userid, setUserId] = useState("")
    const [password, setPassword] = useState("")



    return (
        <>
        <div className="container w-full h-screen p-8 max-w-md mx-auto ">
            <div className="flex flex-col border-5 rounded-xl w-full h-full justify-start items-center">
                <div className="w-80 h-20 flex flex-col justify-center items-center text-black ">
                    <h1 className="text-2xl font-semibold">Login Page</h1>
                    <h3 className="text-md font-light">Masukan UserId dan Password</h3>
                </div>
                <form className="flex flex-col w-80 mt-10  gap-2 ">
                    <label htmlFor="userid">User ID:</label>
                    <input placeholder="Masukan UserID anda" className="border rounded p-2" type="text" id="userid" name="userid" />
                    <label htmlFor="password">Password:</label>
                    <input placeholder="Masukan Password anda" className="border rounded p-2" type="password" id="password" name="password" />
                    <button className="bg-blue-500 text-white rounded p-2 mt-5 cursor-pointer hover:bg-blue-600" type="submit">Login</button>
                    <p className="mt-2 text-center font-light">atau</p>
               <Link to="/" className="text-center bg-green-500 text-white rounded p-2 mt-5 cursor-pointer hover:bg-green-600">
               Guest
               </Link>   
                </form>
            </div>
        </div>
        
        </>
    )
}
 export default Login