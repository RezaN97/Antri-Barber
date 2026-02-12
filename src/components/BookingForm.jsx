import QueueDisplay from "./QueueDisplay"
import React, { useState } from "react"
const BookingForm = () => {

    const [isSubmit, setIsSubmit] = useState(false)
    const [formData, setFormData] = useState({
        layanan: "",
        tgl: "",
        nama: "",
        hp: "",
        time: ""
    })

    const estimasiWaktu = {
        dewasa: "30 menit",
        anak: "20 menit",
        kumis: "15 menit"
    }


    const handleInput = (e) => {
        const {name, value} = e.target

        if (name === "layanan") {
            setFormData((prev)=> ({
                ...prev,
                layanan: value,
                time: estimasiWaktu[value] || ""
            }) )}
            else {
                setFormData((prev) => ({
                ...prev,
                [name]: value
            }))}
        
     
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmit(true);
     
           if(!formData.layanan || !formData.tgl || !formData.nama || !formData.hp ){ 
            alert("Harap lengkapi semua field sebelum melanjutkan booking")
            return
        }
     
    }

    const handleCancel = () => {
        setIsSubmit(false)
        setFormData({
            layanan: "",
            tgl:"",
            nama: "",
            hp: ""
        })
    }

    return (
        <>
        <div className="flex justify-center p-4 bg-black text-white mt-5">
            <h1 className="text-2xl font-semibold ">Booking / Antrian Pages</h1>
        </div>
        <form onSubmit={handleSubmit} className="w-full h-auto flex flex-col gap-2 p-3 ">
            <label className="font-bold w-full p-2" htmlFor="layanan">Pilih Layanan</label>
                <select className="border p-2 w-100" value={formData.layanan} onChange={handleInput} name="layanan" id="layanan">
                    <option value=""> --Pilih Layanan--</option>
                    <option value="dewasa"> Dewasa</option>
                    <option value="anak">Anak-anak</option>      
                    <option value="kumis">Kumis/Jenggot</option>      
                </select>
            <label className="font-bold" htmlFor="date">Pilih Tanggal & Jam</label>
              <div className="flex w-full gap-3">
                <input className="border p-2" value={formData.tgl} onChange={handleInput} type="date" name="tgl" id="tgl" />
                <input className="border p-2" type="time" name="time" id="time" />
              </div>
            <label className="font-bold" htmlFor="customer">Customer</label>
                <div className="flex gap-2 w-full ">
                    <input type="text" value={formData.nama} onChange={handleInput} placeholder="Masukan nama anda..." name="nama" id="nama" className="border p-2"/>
                    <input type="text" value={formData.hp} onChange={handleInput} placeholder="Masukan Nomor HP" name="hp" id="hp" className="border p-2"/>
                </div>
            <button className="mt-2 border-2 w-80 self-center cursor-pointer p-2 font-semibold text-lg rounded-xl" type="submit">Konfirmasi Booking</button>
        </form>
    {/* Toggle Queueu Display */}
        {isSubmit && <QueueDisplay userData={formData} onCancel={handleCancel}/>} 

        
        </>
    )
}

    export default  BookingForm