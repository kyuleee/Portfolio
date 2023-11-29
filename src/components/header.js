import { Routes, Route, Link } from 'react-router-dom';
import './header.css';
import logo from '../img/portLogo.png';

const Header = () => {
    
    return (
        <header>
            <div>
                <h1><Link to='/Portfolio/'><img src={logo}/></Link></h1>
                <ul className="gnb">
                    <li>ABOUT ME</li>
                    <li>WORK</li>
                    <li>PROJECT</li>
                    <li>CONTACT</li>
                </ul>
            </div>
        </header>
    );
}
export default Header;
