import promote from '../assets/images/promote.png';
import analyse from '../assets/images/analyse.png';
import strategize from '../assets/images/strategize.png';

const Page2 = () => {
    return (
        <div className="w-full h-4/6 bg-white">
            <div className="w-5/6 h-0.5 bg-app-blue mt-32 ml-32"></div>
            <div className="flex justify-around items-center mt-16 gap-40 ml-40">
                <div className="text-4xl font-semibold w-80 text-left">
                    We leverage AI to help businesses scale rapidly
                </div>
                <div className="w-3/5 flex flex-row content-center gap-24">
                    <div className="w-48 flex flex-col">
                        <span className="font-bold text-6xl text-purple-500 text-justify">
                            96%
                        </span>
                        <span className="italic font-light mt-2">
                            Client's Satisfaction
                        </span>
                    </div>
                    <div className="w-48 flex flex-col">
                        <span className="font-bold text-6xl text-purple-500 text-justify">
                            38%
                        </span>
                        <span className="italic font-light mt-2">
                            Decrease in Burn
                        </span>
                    </div>
                    <div className="w-48 flex flex-col">
                        <span className="font-bold text-6xl text-purple-500 text-justify">
                            7.6K
                        </span>
                        <span className="italic font-light mt-2">
                            Users Benifitted
                        </span>
                    </div>
                </div>
            </div>
             <div className="w-5/6 h-0.5 bg-app-blue mt-16 ml-32"></div>
             <div className="flex justify-center items-center">
                <div className="text-6xl mt-16 w-3/5 font-semibold text-center ">
                Taurus ensures that businesses reach their target audience 
                </div>
             </div>
             <div className="flex flex-row mt-20 gap-10 justify-center">
                <div className="w-1/4 h-72 bg-lavender rounded-2xl flex flex-col">
                        <div className="-m-8">
                        <img src={promote} alt='promote' className='w-28' />
                        </div>
                        <span className="m-8 mt-14 ml-16 font-semibold text-3xl">
                            Promote
                        </span>
                        <span className="ml-16 text-gray-600 font-light">
                        <p>Intelligent AI Generated Textual and Graphical Content</p>
                        <p>Announce your offers to everyone with multiple social media domains</p>
                        </span>
                </div>
                <div className="w-1/4 h-72 bg-green-200 rounded-2xl flex flex-col">
                        <div className="-m-8 p-4">
                        <img src={analyse} alt='analyse' className='w-32' />
                        </div>
                        <span className="m-8 mt-12 ml-16 font-semibold text-3xl">
                            Analyze
                        </span>
                        <span className=" ml-16 text-gray-600 font-light"> 
                        <p>Get most important information of your sales with bar and Line</p>
                        <p>Analyze data with custom queries in natural language</p>
                        </span>
                </div>
                <div className="w-1/4 h-72 bg-blue-100 rounded-2xl flex flex-col">
                        <div className="-m-8 p-4">
                        <img src={strategize} alt='stratigize' className='w-24' />
                        </div>
                        <span className="m-8 ml-16 font-semibold text-3xl">
                            Strategize
                        </span>
                        <span className=" ml-16 text-gray-600 font-light">
                        <p>Use AI to increase sales and to determine highs and lows of products </p>
                        <p>  Forecast sales and handpick strategy based on chance of success</p>
                        </span>
                </div>
             </div>
        </div>
    )
};

export default Page2;