import logo from '../assets/images/Taurus_name.png';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex p-8 justify-between font-thin">
        <div className='ml-10'>
            <Link to="/home">
                <img src={logo} alt='logo' style={{ width: "170px", height: "45px" }} />
            </Link>
        </div>
        <div className='text-white text-xl mt-1'>
            <Link to={"/home"} className='pr-10 text-white active:text-gray'>Pricing</Link>
            <Link to={"/jobs"} className='pr-10 text-white active:text-gray'>Company</Link>
            <Link to={"/past"} className='pr-10 text-white active:text-gray'>FAQ</Link>
            {/* <Link to={"/about"} className='text-color6 active:text-white'>About</Link> */}
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

    )
};

export default Navbar;