import './work.css';
import img1 from '../../../img/kolon.jpg';
import img2 from '../../../img/dokdo.jpg';

const Work = ()=>{
    return(
        <section className="work">
            <h2>WORK</h2>
            <ul className='workList'>
                <li>
                    <div className='usecase'>
                        <div className='front'>
                            <img src={img1}/>
                            <p>KOLON</p>
                        </div>
                        <div className='back'>
                            <h3>KOLON</h3>
                            <p>grid 스타일을 이용한 레이아웃</p>
                            <ul className='workDetail'>
                                <li>
                                    <strong>사용기술</strong>
                                    <p>HTML, CSS</p>
                                </li>
                                <li>
                                    <strong>사이트주소</strong>
                                    <p>https://www.kolon.com/kr/main</p>
                                </li>
                                <li>
                                    <strong>github</strong>
                                    <p>https://github.com/kyuleee</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='usecase'>
                        <div className='front'>
                            <img src={img2}/>
                            <p>독도전시관</p>
                        </div>
                        <div className='back'>
                            <h3>KOLON</h3>
                            <p>grid 스타일을 이용한 레이아웃</p>
                            <ul className='workDetail'>
                                <li>
                                    <strong>사용기술</strong>
                                    <p>HTML, CSS</p>
                                </li>
                                <li>
                                    <strong>사이트주소</strong>
                                    <p>https://www.kolon.com/kr/main</p>
                                </li>
                                <li>
                                    <strong>github</strong>
                                    <p>https://github.com/kyuleee</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                
                <li>
                    3
                </li>
            </ul>
        </section>
    )
}

export default Work;