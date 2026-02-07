import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Dashboard = () => {
    return (
        <>
        <div className="h-full w-full flex flex-col justify-between">
        <Navbar/>
        <div className="p-8 mt-5">
            <h1 className="bg-black text-white p-4 text-center rounded-2xl w-70 text-2xl font-bold ">Dashboard Admin</h1>
        </div>
        <Footer/>

        </div>
        
        </>
    );
}
export default Dashboard