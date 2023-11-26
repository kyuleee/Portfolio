import About from "./section/about";
import Work from "./section/work";
import MainIntro from "./section/mainIntro";
import Contact from "./section/contact";
// import {About, Work, MainIntro} from './section';
import './main.css';

const Main = ()=>{
    return(
        <div className="main">
            <MainIntro/>
            <About/>
            <Work/>
            <Contact/>
            <div className="scrolling">
                <p>scrolling</p>
            </div>
        </div>
    );
}
export default Main;
