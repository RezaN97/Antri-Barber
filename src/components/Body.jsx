// import bgHome from '/img/bg-dekstop.png'
import Antrian from "./Antrian"

const Body = () => {
    return (
        <>
        {/* DIv dengan bg  */}
        <div className="bg-[url('/img/bg-desktop.png')]  bg-cover bg-center bg-no-repeat h-90vh w-full ">
            <div className="w-full h-screen flex pt-25 items-center flex-col ">
                <h1 className="text-white text-5xl font-black">BAMBANG BARBER SHOP</h1>
                <p className="flex text-white text-4xl font-semibold">-- Antrian Customer --</p>
                <div className="mt-3">
                    <Antrian />
                </div>
            </div>
        </div>

        
        </>
    )
}

export default Body