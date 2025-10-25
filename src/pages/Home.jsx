import Body from "../components/Body"
import Admin from "./Admin"
import Customer from "./Customer"
import React, {useState} from 'react'

const Home = () => {
    
    const [dataUser, setDataUser] = useState ({
        nama:'',
        email:''
    })

    return (

        <>
        {/* option admin / customer */}
        <div className="w-full h-auto p-5 text-white flex justify-center items-center">
            <div className="bg-gray-400 w-250 h-180 p-10 rounded-2xl flex flex-col items-center justify-start gap-2">
                <h1 className="text-white font-bold text-3xl">BARBERSHOP ANTRIAN ONLINE </h1>
                {/* form */}
                <div className="w-200 h-35 bg-gray-500 rounded-2xl p-5">
                    <h2 className="text-white text-xl font-semibold">Pilih Layanan</h2>
                    <div className="flex justify-between">
                        <input type="button" value="Hair Cut " name="haircut" className="text-white font-semibold w-50 hover:bg-gray-600 h-10 border-b-2" />
                        <input type="button" value="Beard Cut" name="haircut" className="text-white font-semibold w-50 hover:bg-gray-600 h-10 border-b-2" />
                        <input type="button" value="Kids Cut" name="haircut" className="text-white font-semibold w-50 hover:bg-gray-600 h-10 border-b-2" />
                    </div>
                    <div className="flex justify-between px-10">
                        <h3>Tarif : Rp. 20.000</h3>
                        <h3>Tarif : Rp. 10.000</h3>
                        <h3>Tarif : Rp. 15.000</h3>
                    </div>
                </div>
            <div className="w-200 h-40 bg-gray-500 rounded-2xl p-5">
                <h1 className="text-xl mb-2 font-semibold">Pilih Waktu</h1>
                <div className="flex gap-3">
                    <input type="time" name="waktu" id="waktu" className="p-10 w-100 h-20 bg-gray-600 rounded-lg" />
                    <p className="pt-5 font-light">*Silahkan klik icon jam </p>
                </div>
            </div>

            <div className="w-200 h-50 bg-gray-500 rounded-2xl p-5">
                <h1 className="text-xl font-semibold ">Masukan Data Diri</h1>
                <form action="addDataDiri" method="post" className="mt-2 flex flex-col">
                    <label htmlFor="nama">Nama Lengkap :</label>
                    <input type="text" name="nama" id="nama" className="px-5 w-190 h-10 bg-gray-600 rounded-lg font-semibold" />
                    <label htmlFor="nama">No Hp/ Email :</label>
                    <input type="text" name="nama" id="nama" className="px-5 w-190 h-10 bg-gray-600 rounded-lg font-semibold" />
                </form>
            </div>
            
            <button className="mt-2 w-100 h-20 text-lg font-semibold rounded-2xl bg-gray-800" type="submit">Booking!</button>

            </div>
        </div>
        </>
    )
}

export default Home