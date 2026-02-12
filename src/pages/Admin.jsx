// import { ToastContainer, toast } from "react-toastify"
import Dashboard from "./Dashboard"

const Admin = () => {
    const notify = () => toast.success("Welcome back Nico")

    return (
        <>
            <div className="flex flex-col w-full h-auto">
                <Dashboard/>
            </div>
        </>
    )
}

export default Admin