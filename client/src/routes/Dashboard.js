import DashSidebar from "./DashSidebar";
import DashboardNav from "./DashboardNav";
import DashboardGraph1 from "./DashboardGraph1";
import DashboardDisplay from "./DashboardDisplay";
const Dashboard = () => {
    return (
        <div className="flex flex-row w-full h-full">
            <DashSidebar/>
            <DashboardDisplay/>
        </div>
    );
}
export default Dashboard;