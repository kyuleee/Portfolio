import './project.css';
// import { siteText } from '../../../data/index';
import { forwardRef, useEffect, useRef } from 'react';
import M from 'materialize-css';

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
        { title: '광주컨트리클럽', contribute: '100%', period: '3 weeks', useStack: 'HTML5, CSS3, JavsScript', code: 'https://github.com/kyuleee/golf', view: 'https://kyuleee.github.io/golf/', review: '힘듦..', gif: '' },
        { title: '경복궁 별빛야행', contribute: '40%', period: '4 weeks', useStack: 'HTML5, CSS3, node.js, react', code: 'https://github.com/kyuleee/Gyeongbokgung-Starlight-Tour', view: 'https://kyuleee.github.io/Gyeongbokgung-Starlight-Tour/', review: '팀플망해라', gif: '' },
        { title: '프론트엔드 사전', contribute: '100%', period: '3days', useStack: 'HTML5, CSS3, node.js, react', code: 'https://github.com/kyuleee/dictionary', view: 'https://kyuleee.github.io/dictionary/', review: '뭐가 뭔지 1도 모름', gif: '' },
        { title: '독:수리', contribute: '40%', period: '4 weeks', useStack: 'HTML5, CSS3, node.js, react', code: 'https://github.com/kyuleee/docsuri', view: 'https://kyuleee.github.io/docsuri/', review: '팀장 다시는 안 해', gif: '' }
    ];

    return (
        <div className="projectSection" id='project' ref={reviewRef => (ref.current[2] = reviewRef)}>
            <div className='banner'>
                {/* <div className='content first active'>
                    <img className='movie-title' />
                    <h4>
                        <span>2023</span>
                        <span>100%</span>
                        <span>2weeks</span>
                        <span>gwangju</span>
                    </h4>
                    <p>1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt aliquet egestas. Aliquam facilisis, arcu vel tincidunt facilisis, turpis sapien accumsan neque, ut tempor nibh lacus at mi. Nam laoreet a massa quis ultrices. Etiam eget mi dapibus, vehicula nibh vel, finibus odio. Suspendisse in diam vehicula felis hendrerit molestie. Sed diam erat, pellentesque in enim et, auctor tincidunt urna. Curabitur vitae massa dictum, auctor justo non, gravida neque</p>
                    <div className='button'>
                        <a href='#'><i className='fa fa-play' aria-hidden='true'>Watch</i></a>
                        <a href='#'><i className='fa fa-plus' aria-hidden='true'>My List</i></a>
                    </div>
                </div>
                <div className='content bg-65'>
                    <img className='movie-title' />
                    <h4>
                        <span>2023</span>
                        <span>100%</span>
                        <span>32weeks</span>
                        <span>dokdo</span>
                    </h4>
                    <p>2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt aliquet egestas. Aliquam facilisis, arcu vel tincidunt facilisis, turpis sapien accumsan neque, ut tempor nibh lacus at mi. Nam laoreet a massa quis ultrices. Etiam eget mi dapibus, vehicula nibh vel, finibus odio. Suspendisse in diam vehicula felis hendrerit molestie. Sed diam erat, pellentesque in enim et, auctor tincidunt urna. Curabitur vitae massa dictum, auctor justo non, gravida neque</p>
                    <div className='button'>
                        <a href='#'><i className='fa fa-play' aria-hidden='true'>Watch</i></a>
                        <a href='#'><i className='fa fa-plus' aria-hidden='true'>My List</i></a>
                    </div>
                </div>
                <div className='content blacn'>
                    <img className='movie-title' />
                    <h4>
                        <span>2023</span>
                        <span>30%</span>
                        <span>2mon</span>
                        <span>kolon</span>
                    </h4>
                    <p>3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt aliquet egestas. Aliquam facilisis, arcu vel tincidunt facilisis, turpis sapien accumsan neque, ut tempor nibh lacus at mi. Nam laoreet a massa quis ultrices. Etiam eget mi dapibus, vehicula nibh vel, finibus odio. Suspendisse in diam vehicula felis hendrerit molestie. Sed diam erat, pellentesque in enim et, auctor tincidunt urna. Curabitur vitae massa dictum, auctor justo non, gravida neque</p>
                    <div className='button'>
                        <a href='#'><i className='fa fa-play' aria-hidden='true'>Watch</i></a>
                        <a href='#'><i className='fa fa-plus' aria-hidden='true'>My List</i></a>
                    </div>
                </div>
                <div className='content covenant'>
                    <img className='movie-title' />
                    <h4>
                        <span>2023</span>
                        <span>40%</span>
                        <span>3mon</span>
                        <span>mywokr</span>
                    </h4>
                    <p>4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt aliquet egestas. Aliquam facilisis, arcu vel tincidunt facilisis, turpis sapien accumsan neque, ut tempor nibh lacus at mi. Nam laoreet a massa quis ultrices. Etiam eget mi dapibus, vehicula nibh vel, finibus odio. Suspendisse in diam vehicula felis hendrerit molestie. Sed diam erat, pellentesque in enim et, auctor tincidunt urna. Curabitur vitae massa dictum, auctor justo non, gravida neque</p>
                    <div className='button'>
                        <a href='#'><i className='fa fa-play' aria-hidden='true'>Watch</i></a>
                        <a href='#'><i className='fa fa-plus' aria-hidden='true'>My List</i></a>
                    </div>
                </div> */}
                {projectData.map((project, index) => (
                    <div key={index} className={`content ${project.title} ${index === 0 ? 'active' : ''}`}>
                        <img className="movie-title" />
                        <h4>
                            <span>{project.title}</span>
                            <span>{project.contribute}</span>
                            <span>{project.period}</span>
                            <span>{project.useStack}</span>
                        </h4>
                        <p>{project.review}</p>
                        <div className='button'>
                            <a href={project.view} target='_blank' rel='noopener noreferrer'><i className='fa fa-play' aria-hidden='true'>Watch</i></a>
                            <a href={project.code} target='_blank' rel='noopener noreferrer'><i className='fa fa-plus' aria-hidden='true'>My List</i></a>
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
                                <img src={`/Portfolio/img/${project.title}.jpg`} alt={project.title} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
});

export default ProjectSection;