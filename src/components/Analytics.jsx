const Analytics = () => {
    return (
        <>
        <div className="flex flex-col w-full h-auto">
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

        </div>
        </>
    )
}
    export default Analytics