import React, { useEffect, useState } from 'react';
import './modal.css';

const Modal = (props) => {
    const { open, close, header } = props

    const [animate, setAnimate] = useState(false)
    const [visible, setVisible] = useState(open)

    useEffect(() => {
        setVisible(open)

        if (visible && !open) {
            setAnimate(true)
            setTimeout(() => setAnimate(false), 200)
        }
        return () => {
            setVisible(false)
        }
    }, [visible, open])

    if (!animate && !visible) return null
    return (
        <div className={open ? "modal open" : "modal"}>
            <section>
                <header>
                    {props.selectedItem.title}
                    <button className="close" onClick={close}>
                        &times;
                    </button>
                </header>
                <main>
                    {props.selectedItem && (
                        <div className='workDetail'>
                            <div>
                                <img src={props.selectedItem.gif} alt={props.selectedItem.title} />
                                <ul className='worktxt'>
                                    {/* <li>{props.selectedItem.title}</li> */}
                                    <li>
                                        <strong>Review</strong>
                                        <p dangerouslySetInnerHTML={{ __html: props.selectedItem.comm }} />
                                    </li>
                                    <li>
                                        <strong>Use Stack</strong>
                                        <p>{props.selectedItem.use_stack}</p>
                                    </li>
                                    <li>
                                        <strong>CODE</strong>
                                        <a href={props.selectedItem.code} target='_blank' rel='noopener noreferrer'>{props.selectedItem.code}</a>
                                    </li>
                                    <li>
                                        <strong>VIEW</strong>
                                        <a href={props.selectedItem.view} target='_blank' rel='noopener noreferrer'>{props.selectedItem.view}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </main>
            </section>
        </div>
    );
}

export default Modal;
