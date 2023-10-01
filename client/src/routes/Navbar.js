import logo from '../assets/images/Taurus_name.png';
import mock from '../assets/images/mock.png';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="w-full h-1/5 bg-app-blue">
            <div className="flex p-8 justify-between font-thin">
                <div className='ml-10'>
                    <Link to="/home">
                        <img src={logo} alt='logo' style={{ width: "175px", height: "45px" }} />
                    </Link>
                </div>
                <div className='text-white text-xl mt-3'>
                    <Link to={"/pricing"} className='pr-10 text-color6 active:text-voilet2'>Pricing</Link>
                    <Link to={"/company"} className='pr-10 text-color6 active:text-white'>Company</Link>
                    <Link to={"/faq"} className='pr-10 text-color6 active:text-white'>FAQ</Link>
                    <Link to={"/contact"} className='text-color6 active:text-white'>Contact</Link>
                </div>
                <div className='flex'>
                    <Link to="/signup" className="bg-none h-8 px-6 mt-2 flex items-center justify-center border border-voilet1 rounded-lg font-normal text-lavender cursor-pointer mr-4">
                        Sign Up
                    </Link>
                    <Link to="/login" className="bg-gradient-to-b from-voilet1 to-voilet1 h-8 px-6 mt-2 flex items-center justify-center rounded-lg font-normal text-lavender cursor-pointer mr-14">
                        Log in
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Navbar;