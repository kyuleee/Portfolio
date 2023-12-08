import './work.css';
import Workjson from '../../../data/work.json';
import { useState, useEffect } from 'react';
import Modal from '../../../components/modal';


const Work = () => {
    const [modalTap, setModalTap] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const modalWindowTap = (item) => {
        setSelectedItem(item);
        setModalTap(true);
    }

    // const [modalOpen, setModalOpen] = useState(false)

    // const openModal = (item) => {
    //     setModalOpen(true)
    //     setSelectedItem(item);
    // }
    // const closeModal = () => {
    //     setModalOpen(false)
    // }
    const closeModal = () => {
        setModalTap(false)
    }
   

    return (
        <section className="work">
            <div className='work_inner'>
                <h2>WORK</h2>
                <ul className='workList'>
                    {Workjson.map(item => (
                        <li key={item.key} onClick={() => modalWindowTap(item)}>
                            <div className='usecase'>
                                <div className='front'>
                                    <img src={item.img} />
                                    <p>{item.title}</p>
                                </div>
                                <div className='back'>
                                    <h3>{item.title}</h3>
                                    <p dangerouslySetInnerHTML={{ __html: item.desc }} />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <Modal open={modalTap} close={closeModal} header={selectedItem} selectedItem={selectedItem}/>
            </div>
        </section>
    )
}

export default Work;