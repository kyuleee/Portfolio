import './work.css';
// import img1 from '../../../img/kolon.jpg';
// import img2 from '../../../img/dokdo.jpg';
// import workBox from '../../../components/contentBox/workBox';
import Workjson from '../../../data/work.json';
import { useState } from 'react';


const Work = () => {
    const [modalTap, setModalTap] =useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const modalWindowTap = (item)=>{
        setSelectedItem(item);
        setModalTap(true);
    }


    return (
        <section className="work">
            <div className='work_inner'>
                <h2>WORK</h2>
                <ul className='workList'>
                {Workjson.map(item => (
                    <li key={item.key} onClick={()=>modalWindowTap(item)}>
                        <div className='usecase'>
                            <div className='front'>
                                <img src={item.img}/>
                                <p>{item.title}</p>
                            </div>
                            <div className='back'>
                                <h3>{item.title}</h3>
                                <p dangerouslySetInnerHTML={{ __html:item.desc}}/>
                            </div>
                        </div>
                    </li>
                ))}
                </ul>
                {modalTap &&
                    <div>
                        <div onClick={()=>setModalTap()}>
                            <div>
                                <p dangerouslySetInnerHTML={{ __html:selectedItem.comm}}/>
                                <ul>
                                    <li>디테일</li>
                                    <li>{selectedItem.title}</li>
                                </ul>
                                <ul>
                                    <li>
                                        <img src={selectedItem.img}/>
                                    </li>
                                    <li>
                                        <strong>사용기술</strong>
                                        <p>{selectedItem.use_stack}</p>
                                    </li>
                                    <li>
                                        <strong>사이트주소</strong>
                                        <a href={selectedItem.code} target='_blank' rel='noopener'>{selectedItem.code}</a>
                                    </li>
                                    <li>
                                        <strong>github</strong>
                                        <a href={selectedItem.view} target='_blank' rel='noopener'>{selectedItem.view}</a>
                                        {/* <p>{selectedItem.view}</p> */}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </section>
    )
}

export default Work;