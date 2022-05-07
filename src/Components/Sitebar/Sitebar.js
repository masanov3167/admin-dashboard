import { NavLink } from "react-router-dom";

import Logo from "./Logo";
import {
	Tickets,
	Overwiew,
	Ideas,
	Contacts,
	Agents,
	Articles,
	Settings,
	Subscription,
} from "./Navbar";

const Sitebar = () =>{
    return (
        <div className='sitebar'>
				<Logo />
                <div className='nav'>
                    <Overwiew />
                    <Tickets />
                    <Ideas />
                    <Contacts />
                    <Agents />
                    <Articles />
                    <span className='nav-line'></span>
                    <Settings />
                    <Subscription />
                </div>
	    </div>
    )
}

export default Sitebar;