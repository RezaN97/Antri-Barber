import React, {useState} from 'react'

const Customer = () => {
    const [nameCustomer, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Data berhasil di simpan`)
    }
    return (
        <>
        <div className="fixed bg-[url('/img/bg-desktop.png')]  bg-cover bg-center bg-no-repeat h-auto w-full ">
            <div className="w-full h-screen flex pt-25 items-center flex-col "> 
               <h1 className="text-white text-4xl font-black">BAMBANG BARBER SHOP</h1>
            </div>
            <div className='bg-amber-300 w-90 h-80 rounded p-40'>
                <h1 className='text-2xl'>  sdsd</h1>
            </div>
        
        </div>
        </>
    )
}

export default Customer