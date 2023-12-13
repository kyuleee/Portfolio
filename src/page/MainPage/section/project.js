import './project.css';
// import { siteText } from '../../../data/index';
import { forwardRef, useEffect, useRef } from 'react';
// import M from 'materialize-css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPlay } from '@fortawesome/free-solid-svg-icons';

const ProjectSection = forwardRef(function ProjectSection(props, ref) {
    const carouselRef = useRef(null);

    // function changeBg(bg, title) {
    //     const banner = document.querySelector('.banner');
    //     const contents = document.querySelectorAll('.content');
    //     // banner.style.background=`url("${bg}")`;
    //     // banner.style.backgroundSize='cover';
    //     // banner.style.backgroundPosition = 'center';

    //     contents.forEach(content => {
    //         content.classList.remove('active');
    //         if (content.classList.contains(title)) {
    //             content.classList.add('active')
    //         }
    //     })
        
    // }
    function changeBg(index, title) {
        const contents = document.querySelectorAll('.content');
    
        contents.forEach((content, i) => {
            content.classList.toggle('active', i === index || (i === 0 && index === projectData.length));
        });
    }

    // useEffect(() => {
    //     M.Carousel.init(carouselRef.current, {});
    //   }, []);
    const projectData = [
        { title: '광주컨트리클럽',img:'golf', contribute: '100%(개인)', period: '3 weeks', useStack: 'HTML5, CSS3, JavsScript', code: 'https://github.com/kyuleee/golf', view: 'https://kyuleee.github.io/golf/', review: '힘듦..', gif: '' },
        { title: '경복궁 별빛야행',img:'palace', contribute: '40%(팀원)', period: '4 weeks', useStack: 'HTML5, CSS3, node.js, react', code: 'https://github.com/kyuleee/Gyeongbokgung-Starlight-Tour', view: 'https://kyuleee.github.io/Gyeongbokgung-Starlight-Tour/', review: '팀플망해라', gif: '' },
        { title: '프론트엔드 사전',img:'dict', contribute: '100%(개인)', period: '3days', useStack: 'HTML5, CSS3, node.js, react', code: 'https://github.com/kyuleee/dictionary', view: 'https://kyuleee.github.io/dictionary/', review: '뭐가 뭔지 1도 모름', gif: '' },
        { title: '독:수리',img:'doc', contribute: '30%(팀장)', period: '4 weeks', useStack: 'HTML5, CSS3, node.js, react', code: 'https://github.com/kyuleee/docsuri', view: 'https://kyuleee.github.io/docsuri/', review: '독수리수리수리마수리', gif: '' }
    ];

    return (
        <div className="projectSection" id='project' ref={reviewRef => (ref.current[2] = reviewRef)}>
            <h2>PROJECT</h2>
            <div className='banner'>
                {projectData.map((project, index) => (
                    <div key={index} className={`content ${project.title} ${index === 0 ? 'active' : ''}`}>
                        <img className="movie-title" />
                        <h4>
                            <p>{project.title}</p>
                            <span>{project.contribute}</span>
                            <span>{project.period}</span>
                            <span>{project.useStack}</span>
                        </h4>
                        <p>{project.review}</p>
                        <div className='button'>
                            <a href={project.view} target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faPlay} pulse/>Watch</a>
                            <a href={project.code} target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faPlus} spin/>My Code</a>
                        </div>
                    </div>
                ))}
                {/* <div className='carousel-box'>
                    <div className='carousel' ref={carouselRef}>
                        <div className='carousel-item' onClick={() => changeBg('/Portfolio/img/kolon.jpg', 'first')}>
                            <img src='/Portfolio/img/kolon.jpg' alt='kolon' />
                        </div>
                        <div className='carousel-item' onClick={() => changeBg('/Portfolio/img/dokdo.jpg', 'bg-65')}>
                            <img src='/Portfolio/img/dokdo.jpg' alt='dokdo' />
                        </div>
                        <div className='carousel-item' onClick={() => changeBg('/Portfolio/img/domino.jpg', 'blacn')}>
                            <img src='/Portfolio/img/domino.jpg' alt='domino' />
                        </div>
                        <div className='carousel-item' onClick={() => changeBg('/Portfolio/img/kolon.jpg', 'covenant')}>
                            <img src='/Portfolio/img/kolon.jpg' alt='kolon' />
                        </div>
                    </div>
                </div> */}
                <div className='carousel-box'>
                    <div className='carousel' ref={carouselRef}>
                        {projectData.map((project, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} onClick={() => changeBg(index, project.title)}>
                                <img src={`/Portfolio/img/${project.img}.jpg`} alt={project.title} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
});

export default ProjectSection;