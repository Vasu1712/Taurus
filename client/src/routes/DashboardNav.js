import { Icon } from '@iconify/react';

const DashboardNav = () => {
    

    return (
        <div className="flex flex-row p-7 pl-16 h-1/10 w-full bg-app-blue text-white overflow-auto">
        <div className="text-2xl font-medium flex items-center">
          Dashboard
        </div>
        <div className="flex-grow flex justify-end items-end pr-10">
          <div className="flex items-center">
            <div className="bg-white text-black text-xl font-bold ml-10 px-4 py-2 flex items-center justify-center rounded-full font-semibold cursor-pointer">
              {/* {cookie?.username[0].toUpperCase()} */} V
            </div>
          </div>
          <div className="ml-4">
            <div className="bg-none rounded-full p-2 cursor-pointer">
              <Icon icon="mdi:cog" color="#9d79fc" width="28" />
            </div>
          </div>
        </div>
      </div>
    );
}
export default DashboardNav;