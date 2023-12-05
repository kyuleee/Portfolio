import './work.css';
// import img1 from '../../../img/kolon.jpg';
// import img2 from '../../../img/dokdo.jpg';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portText } from '../../../data';

const Work = () => {
    const horizontalRef = useRef(null);
    const sectionRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const horizontal = horizontalRef.current;
        const sections = sectionRef.current;

        let scrollTween = gsap.to(sections, {
            xPercent: -120 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: horizontal,
                start: "top 56px",
                end: () => "+=" + horizontal.offsetWidth,
                pin: true,
                scrub: 1,
                markers: false,
                invalidateOnRefresh: true,
                anticipatePin: 1,
            }
        })

        return () => {
            scrollTween.kill();
        };
    }, []);

    return (

        <section className="work" id="port" ref={horizontalRef}>
            <div className="port__inner">
                <h2 className="port__title">
                    WORK 
                </h2>
                <div className="port__wrap">
                    {portText.map((port, key) => (
                        <article
                            className={`port__item p${key + 1}`}
                            key={key}
                            ref={(el) => (sectionRef.current[key] = el)}
                        >
                            <span className="num">{port.num}.</span>
                            <a
                                href={port.code}
                                target="_blank"
                                className="img"
                                rel="noreferrer noopener"
                            >
                                <img src={port.img} alt={port.name} />
                            </a>
                            <h3 className="title">{port.title}</h3>
                            <p className="desc">{port.desc}</p>
                            <a
                                href={port.view}
                                target="_blank"
                                className="site"
                                rel="noreferrer noopener"
                            >
                                사이트 보기</a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Work;