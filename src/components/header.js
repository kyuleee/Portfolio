import { Routes, Route, Link } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import './header.css';
import logo from '../img/LOGO.png';
const throttle = function (callback, waitTime) {
    let timerId = null;
    return (e) => {
        if (timerId) return;
        timerId = setTimeout(() => {
            callback.call(this, e);
            timerId = null;
        }, waitTime);
    };
};

const Header = ({ scrollRef }) => {
    const headerNav = [
        { idx: 0, name: 'ABOUT ME' },
        { idx: 1, name: 'WORK' },
        { idx: 2, name: 'PROJECT' },
        { idx: 3, name: 'CONTACT' }
    ];
    const [navIndex, setNavIndex] = useState(null);
    const navRef = useRef([]);
    // const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        scrollRef.current[navIndex]?.scrollIntoView({ behavior: 'smooth'});
        setNavIndex(null);
    }, [scrollRef, navIndex]);

    // useEffect(() => {
    //     const changeNavBtnStyle = () => {
    //         console.log('Scroll Event Triggered');
    //         scrollRef.current.forEach((ref, idx) => {
    //             if (ref.offsetTop - 200 < window.scrollY) {
    //                 navRef.current.forEach(ref => {
    //                     // ref.className = ref.className.replace('active','');
    //                     ref.classList.remove('active');
    //                 });
    //                 // navRef.current[idx].className += 'active';
    //                 navRef.current[idx].classList.add('active');
    //             }
    //         });
    //     };
        
    //     window.addEventListener('scroll', changeNavBtnStyle);

    //     return () => {
    //         window.removeEventListener('scroll', changeNavBtnStyle);
    //     };
    // }, [scrollRef]);

    
    return (
        <header>
            <div>
                <h1 ><Link to='/Portfolio/'><img src={logo}/></Link></h1>
                <ul className='gnb'>
                    {headerNav.map(({ idx, name }) => (
                        <li key={idx} ref={ref => (navRef.current[idx] = ref)} onClick={() => {setNavIndex(idx);}}>
                            {name}
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}
export default Header;
