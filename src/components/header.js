import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import './header.css';
import logo from '../img/portLogo.png';
import { headerNav } from "../data/index";

const Header = () => {
    const [show, setShow] = useState(false);

    const toggleMenu = () => {
        setShow((prevShow) => !prevShow);
    }

    return (
        <header>
            <div>
                <h1><Link to='/Portfolio/'><img src={logo} /></Link></h1>
                {/* <ul className="gnb">
                    <li>ABOUT ME</li>
                    <li>WORK</li>
                    <li>PROJECT</li>
                    <li>CONTACT</li>
                </ul> */}
                <ul className={`gnb ${show ? "show" : ""}`}>
                    {headerNav.map((nav, key) => (
                        <li key={key}>
                            <a href={nav.url}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}
export default Header;
