import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TableAntrian from "../components/TableAntrian";
const Dashboard = () => {
    return (
        <>
        <div className="h-full w-full flex flex-col justify-between">
            <Navbar/>
            <div className="h-20 mt-5 text-white px-2 shadow-xl flex bg-black justify-between  gap-2 items-center">
                <input placeholder="Cari ID Booking ..." type="text" className="text-light text-white border-2 border-white p-3 w-60 rounded-3xl"/>
                <div className="flex justify-center items-center gap-3">
                    <p className="font-bold text-lg">Nico</p>
                    <div className="w-10 h-10 bg-green-400 rounded-[50%]">     </div>
                </div>
            </div>
            {/* content */}
            <div className=" overflow-x-hidden flex w-full h-screen">
                <div id="leftMenu" className="bg-black w-35 h-auto gap-5 flex-col flex  ">
                    <button className="bg-red-500 p-5  text-white uppercase  hover:bg-red-600 cursor-pointer font-bold ">Scan QR</button>
                    <button className="bg-black p-5  text-white   hover:bg-slate-600 cursor-pointer font-bold ">Schedule</button>
                    <button className="bg-black p-5  text-white   hover:bg-slate-600 cursor-pointer font-bold ">Barbers</button>
                    <button className="bg-black p-5  text-white   hover:bg-slate-600 cursor-pointer font-bold ">Analytics</button>
                    <button className="bg-black p-5  text-white   hover:bg-slate-600 cursor-pointer font-bold ">Setting</button>
                </div>
                <div id="rightMenu" className="  overflow-y-scroll p-1">
                    <h1 className="text-center uppercase ml-4 text-lg text-slate-700 " >Laporan Customer</h1>
                    <div className="p-3 flex flex-col items-center gap-2 w-full mt-3">
                        <div className=" w-65 h-20 font-bold flex flex-col rounded-lg justify-center items-center shadow-xl">
                            <h3 className="underline">Total Customer</h3>
                            <h3 className="text-2xl">10</h3>
                        </div>
                        <div className=" w-65 h-20 font-bold flex flex-col rounded-lg justify-center items-center shadow-xl">
                            <h3 className="underline">Menunggu</h3>
                                <h3 className="text-2xl">5</h3>
                        </div>
                        <div className="w-65 h-20 font-bold flex flex-col rounded-lg justify-center items-center shadow-xl">
                            <h3 className="underline">Proses Cukur</h3>
                                <h3 className="text-2xl">2</h3>
                        </div>
                    </div>
{/* antrian */}
                    <TableAntrian/>
                </div>
            </div>
            <Footer/>

        </div>
        
        </>
    );
}
export default Dashboard