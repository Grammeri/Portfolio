import React, { useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import style from './Contacts.module.scss';
import {Title} from './../../../../src/common/Components/title/Title';

export const Contacts = () => {
    const form:any = useRef();

    useEffect(() => {
        emailjs.init('SW5P4TVHUa0JytrLA');

        form.current.addEventListener('submit', function(event) {
            event.preventDefault();
            // these IDs from the previous steps
            emailjs.sendForm('service_lal0mp4', 'contact_form', this)
                .then(function() {
                    console.log('SUCCESS!');
                    window.alert('Email successfully sent!');
                }, function(error) {
                    console.log('FAILED...', error);
                });
        });
    }, []);

    return (
        <div id="Contacts" className={style.contactsBlock}>
            <div id="Contacts" className={`${style.contactsContainer}`}>
                <Title header={'Contacts'} />

                <form ref={form} className={style.contactForm}>
                    <label htmlFor="name">Name*</label>
                    <input type="text" name="user_name" id="name" required placeholder={"Your name"}/>
                    <label htmlFor="email">Email*</label>
                    <input type="email" name="user_email" id="email" required placeholder={"Your e-mail"}/>
                    <label htmlFor="message">Message*</label>
                    <textarea name="message" id="message" required placeholder={"Your message"}/>
                    <button type="submit" className={style.submitBtn}>
                        Send
                    </button>
                    <div>
                        I am a working form configured with emailjs, please send your messages to Dmitry!
                    </div>
                </form>
            </div>
        </div>
    );
};
