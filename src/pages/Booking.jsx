import BookingForm from "../components/BookingForm"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
const Booking = () => {
    return (
        <>
        <div className="flex flex-col w-full h-auto container ">
            <Navbar/>
            <BookingForm/>
            <Footer/>

        </div>
        </>
    )
}
    export default Booking