import logo from '../assets/images/Taurus_name.png';
import mock from '../assets/images/mock.png';
import { Link } from "react-router-dom";
import Navbar from './Navbar';

const Intro = () => {
    return (
            <div className='content-between flex flex-col items-center justify-center mt-14'>
                <div className='text-center text-white text-5xl mt-10'>
                    <div className='text-6xl font-bold tracking-wide'>
                     Make the best use of 
                    </div>
                    <div className='mt-2 text-transparent text-6xl font-bold bg-clip-text bg-gradient-to-b from-purple-400 to-purple-800'>
                      AI in your Business
                    </div>
                </div>
                <div className='text-lavender text-base mt-6 w-1/3 font-extralight text-center'>
                  Taurus enhances strategies, streamlines product promotion, and informs decisions, ultimately driving revenue and catalyzing growth 
                </div>
                <div className='text-base mt-10 flex flex-row gap-10 text-white tracking-wide font-semibold'>
                    <div className='h-2/3 flex items-center justify-center rounded-full bg-gradient-to-b from-purple-600 to-purple-800 py-3 px-5 mt-6 '>
                        <Link to="/login">
                            Get Started
                        </Link>     
                    </div>
                    <div className='h-2/3 flex items-center justify-center rounded-full border border-voilet1 text-white py-3 px-5 mt-6 '>
                        <Link to="/login">
                            Learn More
                        </Link>   
                    </div>
                </div>    
                <div className='flex justify-center mt-16'>
                    <img src={mock} alt='map' className='opacity-99 mix-blend-screen w-3/4' />
                </div>
            </div>
    )
};

export default Intro;