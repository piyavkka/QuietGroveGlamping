import {Component} from 'react';

import { SiVk } from "react-icons/si";
import { FaTelegram } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

class Header extends Component {
    render() {
        return (
            <header>
                <div className="header-container">
                    <span className="logo">Quiet Grove</span>

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
                <ul className='nav'>
                    <li>Дома</li>
                    <li>Развлечения</li>
                    <li>Мероприятия</li>
                    <li>Банный комплекс</li>
                    <li>Вход</li>
                </ul>
            </header>
        );
    }
}

export default Header;