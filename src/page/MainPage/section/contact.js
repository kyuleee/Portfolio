import { forwardRef } from 'react';
import { useRef, useEffect } from 'react';
import './contact.css';

const Contact = forwardRef(function Contact(props, ref) {
    


    return (
        <section className='contact' ref={reviewRef => (ref.current[3] = reviewRef)}>
            <h2>CONTACT</h2>
           
        </section>

    );

});

export default Contact;