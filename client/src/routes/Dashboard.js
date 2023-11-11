import { Icon } from '@iconify/react';
import { useState } from 'react';

const Dashboard = () => {
    const [open, setOpen] = useState(true);
    const Items = [
        { title: "Dashboard", icon: "uis:chart" },
        { title: "Inbox", icon: "material-symbols:inbox" },
        { title: "Accounts", icon: "mdi:accounts", gap: true },
        { title: "Schedule ", icon: "mdi:calendar-month-outline" },
        { title: "Search", icon: "material-symbols:search" },
        { title: "Analytics", icon: "material-symbols:analytics" },
        { title: "Files ", icon: "material-symbols:folder", gap: true },
        { title: "Setting", icon: "material-symbols:settings" },
    ];

    return (
        <div className="flex w-full h-full">
            <div
                className={` ${open ? "w-1/6" : "w-20 "
                    } bg-gray-800 h-screen p-5  pt-8 relative duration-300`}
            >
                <Icon
                    icon='mdi:arrow-left-thin'
                    width='30'
                    color='white'
                    className={`bg-black font-bold absolute cursor-pointer -right-4 top-9 w-7 border-dark-purple border-2 rounded-full  ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                />
                <div className="flex gap-x-2 items-center">
                    <img
                        src="/logo.png"
                        className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
                            }`}
                        width='60'
                    />
                    <h1
                        className={`text-white origin-left font-medium text-4xl duration-200 ${!open && "scale-0"
                            }`}
                    >
                        Taurus<span className='text-purple-700'>.</span>
                    </h1>
                </div>
                <ul className="pt-6">
                    {Items.map((item, index) => (
                        <li
                            key={index}
                            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${item.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"
                                } `}
                        >
                            <Icon icon={`${item.icon}`} color='white' width='25' />
                            <span className={`${!open && "hidden"} origin-left duration-200 font-bold`}>
                                {item.title}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="h-full w-full flex-1 p-7 bg-black text-white">
                <h1 className="text-2xl font-semibold ">
                    Content
                </h1>
            </div>
        </div>
    );
}
export default Dashboard;