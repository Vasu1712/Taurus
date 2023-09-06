import logo from '../assets/images/Taurus_name.png';
import mock from '../assets/images/mock.png';
import { Link } from "react-router-dom";
import Navbar from './Navbar';

const HomeComponent = () => {
    return (
        <div className="w-full h-full bg-app-black overflow-auto">
            
            <Navbar/>

            <div className='content-between flex flex-col items-center justify-center mt-14'>
                <div className='text-center text-white font-semibold text-6xl mt-32'>
                    <div className=''>
                       Make the best use of 
                    </div>
                    <div className='mt-2 text-transparent text-6xl font-semibold bg-clip-text bg-gradient-to-r from-red-400 to-pink-600'>
                       AI in your Business
                    </div>
                </div>
                <div className='w-1/3 text-color12 mt-5'>
                         Taurus enhances strategies, streamlines product promotion, and 
                         informs decisions, ultimately driving revenue and catalyzing growth 
                </div>
                <div className='h-2/3 flex items-center justify-center rounded-full font-semibold bg-gradient-to-r from-red-400 to-pink-600 py-3 px-4 mt-6 '>
                    <Link to="/login">
                        Start Applying
                    </Link>
                </div>
                <div className='flex justify-center mt-10'>
                    <img src={mock} alt='map' className='opacity-75 mix-blend-screen w-3/4' />
                </div>
            </div>
        </div>
    )
};

export default HomeComponent;