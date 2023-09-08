import { Link } from "react-router-dom";

const Integration = () => {
    return (
        <div className="w-full h-full bg-white">
            <div className="w-48 m-20 bg-lavender border p-4 rounded-xl font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-600">
                INTEGRATION
            </div>
            <div className="flex flex-row m-20 justify-between">
                <div className="w-1/2 text-6xl font-bold leading-normal">
                    Integrated with your Favourite Tools
                </div>
                <div className='h-2/3 place-self-start rounded-full border border-voilet1 text-voilet1 text-xl font-medium tracking-wide py-3 px-5 mt-6 '>
                        <Link to="/login">
                            Learn More
                        </Link>           
                </div>
            </div>
            {/* social media */}
            
        </div>
    )
};

export default Integration;
