import About from "./section/about";
import Work from "./section/work";
import MainIntro from "./section/mainIntro";
import Contact from "./section/contact";
// import {About, Work, MainIntro} from './section';
import './main.css';
import Project from "./section/project";
import Header from "../../components/header";
import { useRef } from "react";

const Main = ()=>{
    const scrollRef = useRef([]);

    return(
        <div className="main">
            <Header scrollRef={scrollRef}/>
            <MainIntro/>
            <About ref={scrollRef}/>
            <Work ref={scrollRef}/>
            <Project ref={scrollRef}/>
            <Contact ref={scrollRef}/>
            <div className="scrolling">
                <p>scrolling</p>
            </div>
        </div>
    );
}
export default Main;
