import { Link } from "react-router-dom";
import google from '../assets/images/google.png';
import insta from '../assets/images/insta.png';
import LinkedIn from '../assets/images/LinkedIn.png';
import slack from '../assets/images/slack.png';
import snap from '../assets/images/snap.png';
import telegram from '../assets/images/telegram.png';
import x from '../assets/images/x.png';

const Integration = () => {
    return (
        <div className="w-full h-full bg-white">
            <div className="w-64 m-20 p-4 rounded-xl font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-indigo-500">
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
            <div class="grid grid-rows-4 grid-flow-col gap-4 p-16">
                <div class="row-span-4 border border-zinc-700 rounded-2xl p-6">
                    <img src={google}/>
                    <div className="m-4 mt-12 text-2xl font-semibold">
                        Google
                    </div>
                    <div className="w-40 m-4 font-thin text-lg text-slate-800">
                        The most important tool for everything
                    </div>
                </div>
                <div class="row-span-2 border rounded-2xl p-6 flex flex-row">
                    <img src={x} className="w-10 h-10"/>
                    <div className="flex flex-col ml-6">
                        <div className="ml-4 text-2xl font-semibold">
                            Twitter
                        </div>
                        <div className="w-40 ml-4 mt-2 font-thin text-lg text-slate-800">
                            The most important tool for everything
                        </div>
                    </div>
                </div>
                <div class="row-span-2 border rounded-2xl p-6 flex flex-row">
                    <img src={insta} className="w-10 h-10"/>
                    <div className="flex flex-col ml-6">
                        <div className="ml-4 text-2xl font-semibold">
                            Instagram
                        </div>
                        <div className="w-40 ml-4 mt-2 font-thin text-lg text-slate-800">
                            The most important tool for everything
                        </div>
                    </div>
                </div>
                <div class="row-span-4 border border-zinc-700 rounded-2xl p-6">
                <img src={slack}/>
                <div className="m-4 mt-12 text-2xl font-semibold">
                    Slack
                </div>
                <div className="w-40 m-4 font-thin text-lg text-slate-800">
                    The most important tool for everything
                </div>
            </div>
            <div class="row-span-2 border rounded-2xl p-6 flex flex-row">
                <img src={snap} className="w-10 h-10"/>
                <div className="flex flex-col ml-6">
                    <div className="ml-4 text-2xl font-semibold">
                        Snapchat
                    </div>
                    <div className="w-40 ml-4 mt-2 font-thin text-lg text-slate-800">
                        The most important tool for everything
                    </div>
                </div>
            </div>
            <div class="row-span-2 border rounded-2xl p-6 flex flex-row">
                <img src={telegram} className="w-10 h-10"/>
                <div className="flex flex-col ml-6">
                    <div className="ml-4 text-2xl font-semibold">
                        Telegram
                    </div>
                    <div className="w-40 ml-4 mt-2 font-thin text-lg text-slate-800">
                        The most important tool for everything
                    </div>
                </div>
            </div>
            <div class="row-span-4 border border-zinc-700 rounded-2xl p-6">
                <img src={LinkedIn}/>
                <div className="m-4 mt-12 text-2xl font-semibold">
                    LinkedIn
                </div>
                <div className="w-40 m-4 font-thin text-lg text-slate-800">
                    The most important tool for everything
                </div>
            </div>
            </div>
            
        </div>
    )
};

export default Integration;
