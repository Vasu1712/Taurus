import logo from '../assets/images/Taurus_name.png';
import mock from '../assets/images/mock.png';
import { Link } from "react-router-dom";

const Pricing = () => {
    return (
        <div className="w-full h-full bg-app-blue">
            <div className="flex p-8 justify-between font-semibold">
                <div className='ml-10'>
                    <Link to="/home">
                        <img src={logo} alt='logo' style={{ width: "209px", height: "51px" }} />
                    </Link>
                </div>
                <div className='text-white text-xl mt-3'>
                    <Link to={"/home"} className='pr-10 text-color6 active:text-white'>Home</Link>
                    <Link to={"/jobs"} className='pr-10 text-color6 active:text-white'>Jobs</Link>
                    <Link to={"/past"} className='pr-10 text-color6 active:text-white'>Past</Link>
                    <Link to={"/about"} className='text-color6 active:text-white'>About</Link>
                </div>
                <div className='flex'>
                    <Link to="/signup" className="bg-white h-2/3 px-6 mt-2 flex items-center justify-center rounded-full font-semibold cursor-pointer mr-4">
                        Sign Up
                    </Link>
                    <Link to="/login" className="bg-gradient-to-r from-red-400 to-pink-600 h-2/3 px-6 mt-2 flex items-center justify-center rounded-full font-semibold cursor-pointer mr-14">
                        Log in
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Pricing;