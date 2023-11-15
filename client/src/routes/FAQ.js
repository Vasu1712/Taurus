import logo from '../assets/images/Taurus_name.png';
import Navbar from './Navbar';
import { Link } from "react-router-dom";
import Accordion from './Faqaccordian';

const FAQ = () => {
    return (
        <div className="w-full h-full bg-app-blue">
            <Navbar/>
            <div>
                <Accordion/> 
            </div>
        </div>
    )
};

export default FAQ;