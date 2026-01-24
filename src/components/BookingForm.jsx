import QueueDisplay from "./QueueDisplay"
import React, { useState } from "react"

const BookingForm = () => {

    const [isSubmit, setIsSubmit] = useState(false)
    const [formData, setFormData] = useState({
        layanan: "",
        tgl: "",
        nama: "",
        hp: ""
    })



    const handleInput = (e) => {
        const {name, value} = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmit(true);
        console.log("Form Data Submitted: ", formData);
        setFormData({     //Reset form data
            layanan: "",
            tgl: "",
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
            <label className="font-bold" htmlFor="layanan">Pilih Layanan</label>
                <select className="border p-2" value={formData.layanan} onChange={handleInput} name="layanan" id="layanan">
                    <option value="Dewasa"> Dewasa</option>
                    <option value="Anak-anak">Anak-anak</option>      
                    <option value="Kumis/Jenggot">Kumis/Jenggot</option>      
                </select>
            <label className="font-bold" htmlFor="date">Pilih Tanggal & Jam</label>
                <input className="border p-2" value={formData.tgl} onChange={handleInput} type="date" name="tgl" id="tgl" />
            <label className="font-bold" htmlFor="konfirmasi">Konfirmasi</label>
                <div className="flex gap-2 w-full ">
                    <input type="text" value={formData.nama} onChange={handleInput} placeholder="Masukan nama anda..." name="nama" id="nama" className="border p-2"/>
                    <input type="text" value={formData.hp} onChange={handleInput} placeholder="Masukan Nomor HP" name="hp" id="hp" className="border p-2"/>
                </div>
            <button className="border-2 w-80 self-center cursor-pointer p-2 font-semibold text-lg rounded-xl" type="submit">Konfirmasi Booking</button>
        </form>
    {/* Toggle Queueu Display */}
        {isSubmit && <QueueDisplay queueData={formData}  onCancel={ () => setIsSubmit(false)}/>} 

        
        </>
    )
}

    export default  BookingForm