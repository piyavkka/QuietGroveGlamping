import {useState} from 'react';

import { SiVk } from "react-icons/si";
import { FaTelegram } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import logo from '/src/assets/logo.png';

export const Header = () => {
        const [isOpen, setIsOpen] = useState(false);
        return (
            <header>
                <div className="header-container">
                    <div className="logo-container">
                        <img src={logo} alt="Logo" />
                        <span className="logo">Тихая Роща</span>
                    </div>


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
                        <li><a href='#'>Дома</a></li>
                        <li><a href='#'>Развлечения</a></li>
                        <li><a href='#'>Мероприятия</a></li>
                        <li><a href='#'>Банный комплекс</a></li>
                        <li><a href='#'>Вход</a></li>
                    </ul>

                    <div className="mobile-contacts">
                        <div className="vk">
                            <SiVk className="header-icon" />
                            <span className="header-text">@quiet_grove</span>
                        </div>
                        <div className="tg">
                            <FaTelegram className="header-icon" />
                            <span className="header-text">@quiet_grove</span>
                        </div>
                        <div className="phone">
                            <MdOutlinePhoneIphone className="header-icon" />
                            <span className="header-text">+7 (986) 742 70 80</span>
                        </div>
                        <div className="location">
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