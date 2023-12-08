import './project.css';
import {siteText} from '../../../data/index';

const ProjectSection = () => {

    return (
        <div className="projectSection">
            <div className="site__inner">
                <h2 className="site__title">
                    PROJECT
                </h2>
                <div className="site__wrap">
                    {siteText.map((site, key) => (
                        <article className={`site__item s${key+1}`} key={key}>
                            <span className="num"> {site.title} 0{key+1}</span>
                            <h3 className="title">
                                {site.title}
                            </h3>
                            <div className="text">
                                <div>{site.text[0]}</div>
                                <div>{site.text[1]}</div>
                                <div>{site.text[2]}</div>
                            </div>
                            <div className="btn">
                                <a href={site.code} target='_blank' rel='noopener noreferrer'>github</a>
                                <a href={site.view} target='_blank' rel='noopener noreferrer'>viewmore</a>
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