import React, {useState} from 'react'

const Booking = () => {
//   const [user, setUser] = useState({
//     name:name,
//     email:email,
//     whatsapp:wa,
//   })

    return (
        <>
        <div className=" font-bold  text-center ">
            <h1 className="text-amber-400 drop-shadow-lg text-[5rem]">Cogan Barber</h1>
        </div>
        <div className="flex flex-col w-full h-50 ">
            <p className="p-5 text-xl text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus recusandae enim libero! Eos architecto distinctio asperiores, modi, ratione pariatur reprehenderit quisquam magni quae voluptatibus est laboriosam, voluptatem consectetur numquam! Corrupti!</p>
            <form className="text-2xl gap-2 flex flex-col w-full h-100 p-5">
                <h1 className="font-bold mb-5 border-b-1">Masukan Data Anda</h1>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" className="w-120 border-1 rounded px-3 bg-white" />
                <label htmlFor="name">Email:</label>
                <input type="email" name="name" className="w-120 border-1 rounded px-3 bg-white" />
                <label htmlFor="name">Whatsapp:</label>
                <input type="number" name="name" className="w-120 border-1 rounded px-3 bg-white" />
                <button className=" mt-2 bg-blue-500 w-40 h-15 text-white font-semibold text-2xl">Submit</button>
            </form>
        </div>
        </>
    )
    }

export default Booking