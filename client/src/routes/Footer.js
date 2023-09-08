import { Link } from "react-router-dom";
import footer from '../assets/images/taurus_footer.png'
const Footer = () => {
    return (
        <div className="w-full h-2/3 bg-app-blue ">
            <div className='text-center text-5xl mt-10'>
                    <div className='mt-2 text-transparent text-6xl font-bold text-'>
                        Lift up your Rocket-ship with Taurus 🚀
                    </div>
                    <div className='mt-24 text-transparent text-6xl font-bold text-white'>
                        Lift up your Rocket-ship with Taurus 🚀
                    </div>
                </div>
                <div className='text-base mt-10 flex flex-row items-center justfy-self-center gap-10 text-white tracking-wide font-semibold'>
                    <div className='rounded-full bg-gradient-to-b from-purple-600 to-purple-800 py-3 px-5 mt-6 '>
                        <Link to="/login">
                            Get Started
                        </Link>     
                    </div>
                </div>  
            <div className="flex flex-col justify-center">
            <div className="w-2/3 h-0.5 text-white"/>
            <div className="font-thin text-white text-center">
                @Copyright 2023. All Rights Reserved
            </div>
            </div>
        </div>
    )
}

export default Footer;