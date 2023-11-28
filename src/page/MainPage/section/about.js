import './about.css';
import me from '../../../img/meImg.jpg';

const About = ()=>{
    return(
        <section className="about">
            <article className='contWrap'>
                <div className='profile'>
                    <img src={me} alt='민규리 이미지'/>
                    <h3>MIN KYU LEE</h3>
                    <p>
                        안녕하세요
                        <br/>반갑습니다
                        <br/>연락주세요
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
                                    <p>webGL 수료</p>
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
}

export default About;