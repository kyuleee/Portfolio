import './about.css';
import me from '../../../img/meImg.jpg';
import { forwardRef } from 'react';

const About = forwardRef(function About(props,ref){
    return(
        <section className="about" ref={reviewRef => (ref.current[0] = reviewRef)}>
            <article className='contWrap'>
                <div className='profile'>
                    <img src={me} alt='민규리 이미지'/>
                    <h3>MIN KYU LEE</h3>
                    <p>
                        안녕하세요
                        <br/>프론트엔드 개발자입니다. 저는 UI 효과, 애니메이션, 직관적이고 역동적인 사용자 경험 제작에 깊은 열정을 갖고 있습니다.
                        전체 프론트엔드 스펙트럼에 관심이 있고 긍정적인 사람들과 함께 야심찬 프로젝트에 참여하고 있습니다. 
                    </p>

                </div>
                <div className='profileTxt'>
                    <div className='left'>
                        <div className='aboutme'>
                            <h3>ABOUT ME</h3>
                            <ul>
                                <li>
                                    <p>Name</p>
                                    <p>민규리 / Min Kyu Lee</p>
                                </li>
                                <li>
                                    <p>Birth</p>
                                    <p>1999.10.13</p>
                                </li>
                                <li>
                                    <p>Contact</p>
                                    <p>
                                    mindy7453@naver.com
                                    <br/>010-7777-7777
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className='edu'>
                            <h3>EDUCATION</h3>
                            <ul>
                                <li>
                                    <p>2018.02</p>
                                    <p>고등학교 졸업</p>
                                </li>
                                <li>
                                    <p>2023.02</p>
                                    <p>컴퓨터공학 졸업</p>
                                </li>
                                <li>
                                    <p>2023.02</p>
                                    <p>WebGL 수료</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='skills'>
                            <h3>SKILLS</h3>
                            <div className='skillLogo'>
                                <div className='fstline'>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className='secline'>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className='trdline'>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                            
                        </div>
                        <div className='certificate'>
                            <h3>CERTIFICATE</h3>
                            <ul>
                                <li>
                                    <p>2022.11</p>
                                    <p>정보처리기사</p>
                                </li>
                                <li>
                                    <p>2023.03</p>
                                    <p>컴퓨터활용능력 1급</p>
                                </li>
                                <li>
                                    <p>2023.12</p>
                                    <p>웹디자인기능사</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                        
                </div>
            </article>
            
        </section>
    );
});

export default About;