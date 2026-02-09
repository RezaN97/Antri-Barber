import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Dashboard = () => {
    return (
        <>
        <div className="h-full w-full flex flex-col justify-between">
            <Navbar/>
            <div className="p-4 mt-5 flex gap-10 justify-end mr-5 items-center">
                <h1 className="text-2xl font-ligh">Dashboard Admin</h1>
                <input placeholder="Cari ID Booking ..." type="text" className="text-light text-slate-700 border-2 border-slate-300 p-3 w-60 rounded-3xl"/>
            <button className="bg-red-500 p-2 text-white rounded-[50%] cursor-pointer hover:bg-red-700 ">Cari</button>
            </div>
            {/* content */}
            <div className="border  flex w-full h-screen">
                <div id="leftMenu" className=" p-2 bg flex-col flex gap-2  ">
                    <button className="bg-red-500 p-5  text-white uppercase  hover:bg-red-600 cursor-pointer font-bold w-50">Scan QR</button>
                    <button className="bg-slate-500 p-5 drop-shadow-2xl text-white   hover:bg-slate-600 cursor-pointer font-bold w-50">Schedule</button>
                    <button className="bg-slate-500 p-5 drop-shadow-2xl text-white   hover:bg-slate-600 cursor-pointer font-bold w-50">Barbers</button>
                    <button className="bg-slate-500 p-5 drop-shadow-2xl text-white   hover:bg-slate-600 cursor-pointer font-bold w-50">Analytics</button>
                    <button className="bg-slate-500 p-5 drop-shadow-2xl text-white   hover:bg-slate-600 cursor-pointer font-bold w-50">Setting</button>
                </div>
                <div id="rightMenu" className="border-l-red-500 border-l-4 p-2">
                    <h1 className="text-xl text-slate-700 " >Laporan Customer</h1>
                    <div className="p-3 flex flex-col gap-2 w-full mt-3">
                        <div className="w-50 h-20 font-bold flex flex-col rounded-lg justify-center items-center border-1">
                            <h3 className="underline">Total Customer</h3>
                            <h3 className="text-2xl">10</h3>
                        </div>
                        <div className="w-50 h-20 font-bold flex flex-col rounded-lg justify-center items-center border-1">
                            <h3 className="underline">Menunggu</h3>
                                <h3 className="text-2xl">5</h3>
                        </div>
                        <div className="w-50 h-20 font-bold flex flex-col rounded-lg justify-center items-center border-1">
                            <h3 className="underline">Proses Cukur</h3>
                                <h3 className="text-2xl">2</h3>
                        </div>
                     
                    </div>
                </div>
            </div>
            <Footer/>

        </div>
        
        </>
    );
}
export default Dashboard