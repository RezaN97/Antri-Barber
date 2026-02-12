import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TableAntrian from "../components/TableAntrian";
import Analytics from "../components/Analytics";
import ScanQR from "../components/ScanQR";
import { useState } from "react";

const Dashboard = () => {

    const [showAnalytics, setShowAnalytics] = useState(false)
    const [showTable, setShowTable] = useState(false)
    const [showScanQR, setShowScanQR] = useState(false)
    const [showQRFirst, setShowQRFirst] = useState(true)

    const handleBtnAnalytics = () => {
        setShowAnalytics(true)
        setShowTable(false)
        setShowScanQR(false)
        setShowQRFirst(false)
    }

    const handleBtnTable = () => {
        setShowTable(true)
        setShowAnalytics(false)
        setShowScanQR(false)
         setShowQRFirst(false)
    }

    const handleBtnScanQR = () => {
        setShowScanQR(true)
        setShowAnalytics(false)
        setShowTable(false)
        setShowQRFirst(false)
    }
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
            <div className=" flex w-full h-screen">
                <div id="leftMenu" className="bg-black w-35 h-auto gap-5 flex-col flex  ">
                    <button onClick={handleBtnScanQR} className="bg-red-500 p-5  text-white uppercase  hover:bg-red-600 cursor-pointer font-bold ">Scan QR</button>
                    <button onClick={handleBtnTable} className="bg-black p-5  text-white   hover:bg-red-600 cursor-pointer font-bold ">Schedule</button>
                    <button className="bg-black p-5  text-white   hover:bg-red-600 cursor-pointer font-bold ">Barbers</button>
                    <button onClick={handleBtnAnalytics} className="bg-black p-5  text-white   hover:bg-red-600 cursor-pointer font-bold ">Analytics</button>
                    <button className="bg-black p-5  text-white   hover:bg-red-600 cursor-pointer font-bold ">Setting</button>
                </div>


            {/* SHow Data Right Side of Dashboard*/}
                <div id="rightMenu" className="w-full  p-1">

                        {showQRFirst && <ScanQR/>}
                        {showTable && <TableAntrian/>}
                        {showAnalytics && <Analytics/>}
                        {showScanQR && <ScanQR/>} 
                </div>
            </div>
            <Footer/>

        </div>
        
        </>
    );
}
export default Dashboard