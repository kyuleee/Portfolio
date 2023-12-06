import './project.css';
<<<<<<< HEAD
import {siteText} from '../../../data/index';

const ProjectSection = () => {

    return (
        <div className="projectSection">
            <div className="site__inner">
                <h2 className="site__title">
                    PROJECT
=======
import { siteText } from '../../../data';

const ProjectSection = () => {
  
    return (
        <div className="projectSection">
             <div className="site__inner">
                <h2 className="site__title">
                    PROJECT <em>나의 작업물</em>
>>>>>>> 4b114eeb5d514982b1925e329ad299adc2dc1adc
                </h2>
                <div className="site__wrap">
                    {siteText.map((site, key) => (
                        <article className={`site__item s${key+1}`} key={key}>
<<<<<<< HEAD
                            <span className="num"> {site.title} 0{key+1}</span>
=======
                            <span className="num">PROJECT 0{key+1}</span>
>>>>>>> 4b114eeb5d514982b1925e329ad299adc2dc1adc
                            <h3 className="title">
                                {site.title}
                            </h3>
                            <div className="text">
                                <div>{site.text[0]}</div>
                                <div>{site.text[1]}</div>
                                <div>{site.text[2]}</div>
                            </div>
                            <div className="btn">
                                <a href={site.code}>github</a>
                                <a href={site.view}>viewmore</a>
                            </div>
                            <div className="info">
                                <span>{site.info[0]}</span>
                                <span>{site.info[1]}</span>
                                <span>{site.info[2]}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectSection;