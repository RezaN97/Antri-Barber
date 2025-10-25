import { ToastContainer, toast } from "react-toastify"

const Admin = () => {
    const notify = () => toast.success("Success Reza Your First Notification!")

    return (
        <>
            <div className="w-full h-25 bg-amber-300 flex justify-center items-center">
                <button className="bg-red-600 w-20 h-10 text-white font-bold" onClick={notify}>Notify</button>
                <ToastContainer />
            </div>


           <div className="bg-[url('/img/bg-desktop.png')]  bg-cover bg-center bg-no-repeat h-100vh w-full ">
           {/* text title */}
                <div className="w-full h-screen flex pt-10 items-center flex-col ">
                    <h1 className="text-white text-5xl font-light">BAMBANG BARBER SHOP</h1>
                    <p className="flex text-white text-4xl font-bold">Antrian Customer</p>
            <div className="bg-white text-black w-[23vw] h-[50vh] rounded-lg mt-10 flex flex-col items-center "> 
                <h1 className="text-[2em] font-normal ">Customer</h1>
                <h1 className="text-[6em] font-bold">1</h1> {/*next will update code */}
              {/* customer data */}
                <div className="text-[1.2em] font-semibold text-center">
                    <p className="">Nico Afrian</p>
                    <p className="font-normal">Hair Style: Undercut</p>
                </div>
                <button className="mt-5 text-[1.2em] w-[21vw] h-[20vh] pt-5 pb-5 text-center mb-10 rounded-3xl text-white font-semibold bg-red-500 cursor-pointer hover:bg-red-700 ">Selesai Cukur</button>

            </div>

                </div>
            {/* info customer */}
        </div>
        </>
    )
}

export default Admin