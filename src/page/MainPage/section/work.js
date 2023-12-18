import './work.css';
import Workjson from '../../../data/work.json';
import { useState, useEffect, forwardRef } from 'react';
import Modal from '../../../components/modal';

const Work = forwardRef(function Work(props,ref){
    const [modalTap, setModalTap] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const modalWindowTap = (item) => {
        setSelectedItem(item);
        setModalTap(true);
    }

    const closeModal = () => {
        setModalTap(false)
    }

    return (
        <section className="work" ref={reviewRef => (ref.current[1] = reviewRef)}>
            <div className='work_inner'>
                <h2>WORK</h2>
                <ul className='workList'>
                    {Workjson.map(item => (
                        <li key={item.key} onClick={() => modalWindowTap(item)}>
                            <div className='usecase'>
                                <div className='front'>
                                    <img src={item.img} />
                                </div>
                                <div className='back'>
                                    <h3>{item.title}</h3>
                                    <p dangerouslySetInnerHTML={{ __html: item.desc }} />
                                </div>
                                <p className='ddd'>{item.title}</p>
                            </div>
                        </li>
                    ))}
                </ul>
                <Modal open={modalTap} close={closeModal} header={selectedItem} selectedItem={selectedItem}/>
            </div>
        </section>
    )
});

export default Work;