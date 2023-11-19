import DashboardGraph1 from './DashboardGraph1';
import DashboardGraph2 from './DashboardGraph2';
import DashboardGraph3 from './DashboardGraph3';
import DashboardNav from './DashboardNav';
const DashboardDisplay = () => {

    return (
        <div className="flex flex-col w-full">
                 <DashboardNav />
                 <DashboardGraph1/>
            <div className="flex flex-row justify-evenly mt-12">
                <DashboardGraph2/>
                <DashboardGraph3/>
            </div>     
        </div>
    );
}
export default DashboardDisplay;