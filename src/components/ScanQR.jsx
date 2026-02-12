const ScanQR = () => {
    return (
        <>
        <div className="flex flex-col gap-2 justify-center items-center text-2xl">
            <h1 className="text-2xl font-bold mt-10">Scan QR Customer</h1>
            <div className="w-50 h-50 rounded-3xl bg-black flex justify-center items-center mt-5"> 
                <div className="flex rounded-3xl justify-center items-center w-45 h-45 bg-red-300">
                    Kode QR
                </div>
            </div>
            <p className="text-red-500 text-lg font-normal">*check in customer untuk memulai antrian</p>
        </div>
        </>
    )}
     export default ScanQR