import DashSidebar from "./DashSidebar";
import DashboardNav from "./DashboardNav";
import DashboardGraphs from "./DashboardGraphs";
import DashboardDisplay from "./DashboardDisplay";
const Dashboard = () => {
    return (
        <div className="flex flex-row w-full h-full">
            <DashSidebar/>
            {/* <DashboardDisplay/> */}
            <DashboardNav/>
        </div>
    );
}
export default Dashboard;