import reports from '../assets/images/reports.png';
import piechart from '../assets/images/pie chart.png';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
const Page3 = () => {
    return (
        <div className="w-full bg-app-blue">
            <div className="flex flex-col">
                <div className="flex flex-row mt-72">
                    <div className="w-1/2 m-4 ml-10 p-4">
                        <img src={reports} alt='map' className='opacity-99 mix-blend-screen m-4' />
                    </div>
                    <div className="w-1/2 ">
                        <div className="m-4 w-3/4 font-bold text-6xl text-white tracking-wide leading-snug">
                            A nice & simple statistical overview 
                        </div>
                        <div className="w-2/3 m-4 mt-10 text-thin text-lg italic text-lavender">
                        The platform, through A/B testing, helps minimize risks by allowing users to experiment with different strategies. Furthermore, by analyzing customer journey paths and incentivizing customers, the loyalty of the communities can be promoted to higher levels. Thus, with these functions businesses are better positioned for expansion into new markets. 
                        </div>
                        <div className="m-4 ml-8 mt-10 text-thin text-lg flex flex-col gap-4">
                          <div className="flex flex-row gap-6">
                            <Icon icon="mdi:tick-circle" color="#602EE3" width="40" />
                            <div className="text-white font-medium text-2xl">
                                Profit ↑
                            </div>
                          </div>
                          <div className="flex flex-row gap-6">
                            <Icon icon="mdi:tick-circle" color="#602EE3" width="40" />
                            <div className="text-white text-2xl">
                                Cost & Risk ↓ 
                            </div>
                          </div>
                          <div className="flex flex-row gap-6">
                            <Icon icon="mdi:tick-circle" color="#602EE3" width="40" />
                            <div className="text-white text-2xl">
                               Asset utilisation ↑
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="w-1/2 m-4 ml-32">
                        <div className="m-4 w-3/4 font-bold text-6xl text-white tracking-wide leading-tight">
                          Great overview of your entire sales funnel and leads
                        </div>
                        <div className="w-2/3 m-4 mt-10 text-thin text-lg italic text-lavender">
                        Taurus enhances strategies, streamlines product promotion, and informs decisions, ultimately driving revenue and catalyzing growth for partner businesses.
                        </div>
                        <div className='h-12 w-48 m-4 mt-16 flex items-center justify-center rounded-full border border-voilet1 text-white py-3 px-5 mt-6 '>
                            <Link to="/login">
                                Learn More
                            </Link>    
                       </div>
                    </div>
                    <div className="w-1/2 m-4 ml-12">
                        <img src={piechart} alt='map' className='opacity-99 mix-blend-screen' />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Page3;