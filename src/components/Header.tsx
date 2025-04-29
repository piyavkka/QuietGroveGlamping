import {useState} from 'react';

import { SiVk } from "react-icons/si";
import { FaTelegram } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import logo from '/src/assets/logo.png';

import '../styles/header.css';

export const Header = () => {
        const [isOpen, setIsOpen] = useState(false);
        return (
            <header>
                <div className="header-container">
                    <Link to="/" className="logo-container">
                        <img src={logo} alt="Logo" className="logo-img" />
                        <span className="logo">Тихая Роща</span>
                    </Link>

                    <div className="header-icons">
                        <SiVk className="header-icon"/>
                        <FaTelegram className="header-icon"/>

                        <div className="phone">
                            <MdOutlinePhoneIphone className="header-icon"/>
                            <span className="header-text">+7 (986) 742 70 80</span>
                        </div>

                        <div className="location">
                            <FaLocationDot className="header-icon"/>
                            <span className="header-text">Нижегородская область,<br />посёлок Ильиногорск</span>
                        </div>
                    </div>
                </div>
                <nav className={`header-nav ${isOpen ? 'active' : ''}`}>
                    <ul>
                        <li><Link to="/houses">Дома</Link></li>
                        <li><Link to="/entertainment">Развлечения</Link></li>
                        <li><Link to="/events">Мероприятия</Link></li>
                        <li><Link to="/bath-complex">Банный комплекс</Link></li>

                    </ul>

                    <div className="mobile-contacts">
                        <div className="group">
                            <SiVk className="header-icon" />
                            <span className="header-text">@quiet_grove</span>
                        </div>
                        <div className="group">
                            <FaTelegram className="header-icon" />
                            <span className="header-text">@quiet_grove</span>
                        </div>
                        <div className="group">
                            <MdOutlinePhoneIphone className="header-icon" />
                            <span className="header-text">+7 (986) 742 70 80</span>
                        </div>
                        <div className="group">
                            <FaLocationDot className="header-icon" />
                            <span className="header-text">посёлок Ильиногорск</span>
                        </div>
                    </div>
                </nav>
                <button className="menu-button-icon" onClick={()=> setIsOpen(!isOpen)}>
                    {isOpen ? <CloseIcon/> : <MenuIcon/>}</button>
            </header>
        );
};