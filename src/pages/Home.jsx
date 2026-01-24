// import Body from "../components/Body"
import Navbar from "../components/Navbar"
import Admin from "./Admin"
import Booking from "./Booking"
import Footer from "../components/Footer"
import BookingForm from "../components/BookingForm"
import { NavLink } from "react-router-dom"

const Home = () => {
    
 
    

    return (

        <>

        <Navbar/>
        <div className="flex flex-col gap-5">
            <BookingForm/>

        </div>
            <Footer />
        </>
    )
}

export default Home