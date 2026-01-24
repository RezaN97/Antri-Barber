import logo from "../assets/img/logo.png"

const Navbar = () => {
    return (
        <>
        <div className="flex gap-2 justify-baseline">
            <div className="w-25 h-20">
                <img src={logo} alt="logo" />
            </div>
            <div className="flex gap-10 items-center text-lg">
                <div>
                    <a href="#">Home</a>
                </div>
                <div>
                    <a href="#">Booking</a>
                </div>
                <div>
                    <a href="#">Services</a>
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