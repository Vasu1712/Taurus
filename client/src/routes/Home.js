import logo from '../assets/images/Taurus_name.png';
import mock from '../assets/images/mock.png';
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import Intro from './Intro';
import Page2 from './Page2';
import Page3 from './Page3';
const Home = () => {
    return (
        <div className="w-full h-full bg-app-blue overflow-auto">
            <Navbar/>
            <Intro/>
            <Page2/>
            <Page3/>
        </div>
    )
};

export default Home;