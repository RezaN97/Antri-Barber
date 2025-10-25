const Antrian = () => {
    return (
        <>
        <div className="container">
            <div className="flex gap-5">
                <div className=" text-white flex items-center flex-col font-normal text-xl w-[20vw] h-[36vh]  bg-amber-600 ">
                    <h1 className="">Nomor Antrian</h1>
                    <h1 className="text-[5.5em]">02</h1>
                </div>
            <div className=" text-white flex items-center flex-col font-normal text-xl w-[20vw] h-[36vh]  bg-red-600 ">
                <h1 className="">Dalam Proses</h1>
                <h1 className=" text-[5.5em]">01</h1>
                <p className=" font-light mb-20">estimasi waktu : 10 menit</p>
            </div>
            <div className=" text-white flex items-center flex-col font-normal text-xl w-[20vw] h-[36vh]  bg-green-600 ">
                <h1 className="">Selesai</h1>
                <h1 className="text-[5.5em]">01</h1>
                <p className=" font-light mb-20">selesai no antian: 01</p>
            </div>


            </div>
            <div className="flex justify-center mt-10">
                <button className="  w-40 h-13 rounded-4xl bg-blue-500 text-white font-semibold cursor-pointer hover:bg-red-500 hover:text-white ">Selesai Cukur</button>

            </div>
        </div>
        

        </>
    )
}

export default Antrian