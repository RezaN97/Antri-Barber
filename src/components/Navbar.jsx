import logo from "../assets/img/logo.png"

const Navbar = () => {
    return (
        <>
        <div className="flex w-full  justify-between gap-1">
            <div className="w-25 h-20">
                <img src={logo} alt="logo" />
            </div>
            <div className="w-100 h-20  rounded-bl-4xl bg-black text-white flex gap-6 justify-evenly items-center text-lg">
                <div>
                    <a href="#">Home</a>
                </div>
                <div>
                    <a href="#">Booking</a>
                </div>
                <div>
                    <a href="#">Login</a>
                </div>

            </div>
        </div>
        </>
    )
}
    export default Navbar