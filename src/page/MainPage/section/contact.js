import {forwardRef } from 'react';
import './contact.css';

const Contact = forwardRef(function Contact(props, ref) {
    const copyText = "mindy7453@naver.com";
    const handleCopy = () => {
      navigator.clipboard.writeText(copyText);
      alert('복사되었습니다.')
    };
    return (
        <section className='contact' ref={reviewRef => (ref.current[3] = reviewRef)}>
            <h2>CONTACT</h2>
            <div className='contactTxt'>
                <div>
                    <p>E-MAIL</p>
                    <span onClick={handleCopy}>mindy7453@naver.com</span>
                </div>    
                <div>
                    <p>GITHUB</p>
                    <a href='https://github.com/kyuleee' target='_blank' rel='noreferrer noopener'>https://github.com/kyuleee</a>
                </div>            
            </div>
            <p className='copyright'>본 페이지는 상업적 목적이 아닌 개인 포트폴리오용으로 만들어진 사이트입니다.
                        <br/>MINKYULEE ⓒ 2023 PORTFOLIO
                    </p>
            </section>

    );

});

export default Contact;