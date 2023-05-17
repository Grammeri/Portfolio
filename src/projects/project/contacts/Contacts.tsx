import React, { useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from './Contacts.module.scss';
import {Title} from './../../../../src/common/Components/title/Title';

export const Contacts = () => {
    const form:any = useRef();
    const hasAttachedListener = useRef(false); // create a new ref

    useEffect(() => {
        emailjs.init('SW5P4TVHUa0JytrLA');

        const handleFormSubmit = (event) => {
            event.preventDefault();
            emailjs.sendForm('service_lal0mp4', 'contact_form', form.current)
                .then(() => {
                    console.log('SUCCESS!');
                    toast.success('Email successfully sent!', {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    form.current.reset(); // reset the form
                }, (error) => {
                    console.log('FAILED...', error);
                    toast.error('An error occurred.', {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                });
        };

        // Only attach the listener if we haven't already
        if (!hasAttachedListener.current) {
            form.current.addEventListener('submit', handleFormSubmit);
            hasAttachedListener.current = true; // set the ref to true
        }

        // Clean up function
        return () => {
            form.current.removeEventListener('submit', handleFormSubmit);
        };
    }, []);

    return (
        <div id="Contacts" className={style.contactsBlock}>
            <h2 style={{color:"orange", position:"absolute", margin:"auto", marginLeft:"20px", marginTop:"100px"}}>
                {"<Contacts />"}</h2>


            <div id="Contacts" className={`${style.contactsContainer}`}>


                <Title header={'Let\'s get in touch'} />


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
            <h2 style={{color:"orange", position:"absolute", margin:"auto", marginLeft:"20px", marginTop:"300px"}}>
                {"<Contacts />"}</h2>
            <ToastContainer className={style.toastContainer} />
        </div>
    );
};
