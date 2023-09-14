import { Link } from "react-router-dom";
import google from '../../public/img/google.png';
import insta from '../../public/img/insta.png';
import LinkedIn from '../../public/img/LinkedIn.png';
import slack from '../../public/img/slack.png';
import snap from '../../public/img/snap.png';
import telegram from '../../public/img/telegram.png';
import x from '../../public/img/x.png';

export function Promote() {
    return (
            <div className='content-between flex flex-col items-center justify-center mt-4'>
                <div className='text-center text-black font-semibold text-5xl mt-10'>
                    Promote your Build
                </div>
                {/* social media */}
                    <div class="grid grid-rows-4 grid-flow-col gap-4 p-16">
                        <div class="row-span-4 border border-zinc-700 rounded-2xl p-6">
                            <img src={google}/>
                            <div className="m-4 mt-20 text-2xl font-semibold">
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
                        <div className="m-4 mt-20 text-2xl font-semibold">
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
                        <div className="m-4 mt-20 text-2xl font-semibold">
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

export default Promote;