const Page2 = () => {
    return (
        <div className="w-full h-full bg-white">
            <div className="w-5/6 h-0.5 bg-app-blue mt-32 ml-32"></div>
            <div className="flex justify-around items-center mt-16 gap-40 ml-40">
                <div className="text-4xl font-semibold w-80 text-left">
                    We leverage AI to help businesses scale rapidly
                </div>
                <div className="w-3/5 flex flex-row content-center gap-24">
                    <div className="w-48 flex flex-col">
                        <span className="font-bold text-6xl text-purple-500 text-justify">
                            98%
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
                            7.6M
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
                <div className="w-1/4 h-72 bg-lavender border rounded-2xl flex flex-col">
                        <div className="m-4 p-4">
                            Icon
                        </div>
                        <span className="m-8 ml-16 font-semibold text-2xl">
                            Feature 1
                        </span>
                        <span className="mt-2 ml-16 text-slate-700 font-light">
                            Lorem ipsum lorem ipsum
                            Lorem ipsum lorem ipsum
                            Lorem ipsum lorem ipsum
                        </span>
                </div>
                <div className="w-1/4 h-72 bg-green-200 border rounded-2xl flex flex-col">
                        <div className="m-4 p-4">
                            Icon
                        </div>
                        <span className="m-8 ml-16 font-semibold text-2xl">
                            Feature 2
                        </span>
                        <span className="mt-2 ml-16 text-slate-700 font-light">
                            Lorem ipsum lorem ipsum
                            Lorem ipsum lorem ipsum
                            Lorem ipsum lorem ipsum
                        </span>
                </div>
                <div className="w-1/4 h-72 bg-blue-100 border rounded-2xl flex flex-col">
                        <div className="m-4 p-4">
                            Icon
                        </div>
                        <span className="m-8 ml-16 font-semibold text-2xl">
                            Feature 3
                        </span>
                        <span className="mt-2 ml-16 text-slate-700 font-light">
                            Lorem ipsum lorem ipsum
                            Lorem ipsum lorem ipsum
                            Lorem ipsum lorem ipsum
                        </span>
                </div>
             </div>
        </div>
    )
};

export default Page2;