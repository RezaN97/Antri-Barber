
const QueueDisplay = ( { userData,onCancel} ) => {



    return (
        <>
        <div className="flex justify-center p-4 bg-black text-white text-2xl font-bold">
            <h1>Status Antrian</h1>
        </div>

        <div  className="flex flex-col gap-3 p-3 justify-center items-center">
            {/* Data nomor antrian dan estimasi tarik data dari DB */}
               <h3>Nomor Antrian Anda:</h3>
               <h1 className="text-5xl font-bold">01</h1>
              <h3 >{`Jenis Layanan : Cukur ${userData.layanan}`}</h3>
              <h3>Estimasi Waktu Tunggu: {userData.time}</h3>
              <button onClick={onCancel} className="border-2 rounded-xl text-lg font-semibold cursor-pointer p-2 w-80">Batalkan / Reschedule</button>

        </div>
        </>

    )}
    export default QueueDisplay