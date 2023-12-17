import './project.css';
import { forwardRef, useEffect, useRef, useState } from 'react';

const ProjectSection = forwardRef(function ProjectSection(props, ref) {
    const carouselRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
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
    useEffect(() => {
        const interval = setInterval(() => {
            // Auto slide to the next project
            const newIndex = (activeIndex + 1) % projectData.length;
            setActiveIndex(newIndex);
        }, 5000); // Adjust the interval as needed

        return () => clearInterval(interval);
    }, [activeIndex]);


    function changeBg(index, title) {
        const contents = document.querySelectorAll('.content');
    
        contents.forEach((content, i) => {
            content.classList.toggle('active', i === index || (i === 0 && index === projectData.length));
        });
    }

    
    const projectData = [
        { title: '광주컨트리클럽',img:'golf', contribute: '100%(개인)', period: '3 weeks', useStack: 'HTML5, CSS3, JavsScript', code: 'https://github.com/kyuleee/golf', view: 'https://kyuleee.github.io/golf/', review: '기존 광주 컨트리클럽 웹사이트의 디자인과 더불어 웹사이트의 콘텐츠, 사용자 경험, 반응형 작업을 개선하려 진행한 개인 프로젝트입니다.<br/> 웹 사이트의 시각 및 감성적인 요소는 다른 필수적인 세부 사항을 고려하기에 앞서 먼저 결정했습니다. 시각적 언어가 전반적인 브랜드 아이덴티티와 일치해야 되기 때문에 로고, 브랜드 색상 및 웹사이트 색 구성 표가 추구하는 새로운 스타일에 적합한지 고민하면서 개발했습니다. 골프 사이트의 가장 핵심적인 부분을 시작으로 정해진 순서에 맞춰 사이트 요소를 하나씩 살펴볼 수 있도록 유도했습니다.', gif: '' },
        { title: '경복궁 별빛야행',img:'palace', contribute: '40%(팀원)', period: '4 weeks', useStack: 'HTML5, CSS3, node.js, react', code: 'https://github.com/kyuleee/Gyeongbokgung-Starlight-Tour', view: 'https://kyuleee.github.io/Gyeongbokgung-Starlight-Tour/', review: 'three.js를 활용하여 홍보 목적을 갖는 경복궁 별빛야행 축제 사이트 디자인과 매체의 특성에 맞게 프로젝트를 제작했습니다. <br/>홈페이지 소개 페이지를 포함한 서브 페이지를 node.js, route.js를 사용하여 각 페이지를 연동했습니다. 사용성, 편의성, 구현 환경을 고려하여  PWA 형태로 구현했습니다.', gif: '' },
        { title: '프론트엔드 사전',img:'dict', contribute: '100%(개인)', period: '3days', useStack: 'HTML5, CSS3, node.js, react', code: 'https://github.com/kyuleee/dictionary', view: 'https://kyuleee.github.io/dictionary/', review: 'Search 기능, Remove 기능, Edit 기능, Create 기능이 되는 사전을 react를 사용하여 프론트엔드 사전을 만들었습니다. <br/>함수 컴포넌트를 사용하여 직관적인 코드를 작성할 수 있었고 메모리 자원을 적게 사용할 수 있었습니다. 또한 Hook의 useState를 사용하여 state를 관리할 수 있고, useEffect, useReducer, createContext, useCallback, useRef 등울 사용하여 컴포넌트에서 다양한 기능을 경험했습니다. ', gif: '' },
        { title: '독:수리',img:'doc', contribute: '30%(팀장)', period: '4 weeks', useStack: 'HTML5, CSS3, node.js, react', code: 'https://github.com/kyuleee/docsuri', view: 'https://kyuleee.github.io/docsuri/', review: 'three.js 를 활용하여 초등학교 고학년을 대상으로 한 수학 문제 사이트가 갖고 있는 도서 단행물의 특성을 파악하고 프로젝트를 제작했습니다. <br/>메인 페이지에 3D API를 이용한 Blender 제작물을 넣어 시각적인 흥미를 끌 수 있었습니다. 콘텐츠 기획과 개발을 명확히 하여 분야에 맞는 스마트 북의 콘텐츠(ex. 표지 및 목차, 차시별 콘텐츠)를 포함한 서브 페이지를 구현했습니다. 가독성 및 심미성을 고려하여 정보 구조를 설계하여 PWA 형태로 구현했습니다. ', gif: '' }
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
                        <p dangerouslySetInnerHTML={{__html:project.review}} />
                        <div className='button'>
                            <a href={project.view} target='_blank' rel='noopener noreferrer'>Watch</a>
                            <a href={project.code} target='_blank' rel='noopener noreferrer'>My Code</a>
                        </div>
                    </div>
                ))}
                
                <div className='carousel-box'>
                    <div className='carousel' ref={carouselRef}>
                        {projectData.map((project, index) => (
                            <div key={index} className={`carousel-item`} onClick={() => changeBg(index, project.title)}>
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