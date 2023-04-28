import React from 'react';
import { useForm } from 'react-form';
import style from './Contacts.module.scss';
import styleContainer from './Contacts.module.scss';
import { Title } from './../../../../src/common/Components/title/Title';
import axios from "axios";

export const Contacts = () => {
    const handleSubmit = async (values) => {
        // Handle form submission logic here
        // For example, send data to a server or show a success message
        console.log(values);
        try {
            const response = await axios.post('http://localhost:3010/sendMessage', values);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const {
        Form,
        meta: { isSubmitting },
    } = useForm({ onSubmit: handleSubmit });

    return (
        <div id="Contacts" className={style.contactsBlock}>
            <div id="Contacts" className={`${style.contactsContainer}`}>
                <Title header={'Contacts'} />
                <Form className={style.contactForm}>
                    <label htmlFor="name">Name*</label>
                    <input type="text" name="name" id="name" required />
                    <label htmlFor="email">Email*</label>
                    <input type="email" name="email" id="email" required />
                    <label htmlFor="message">Message*</label>
                    <textarea name="message" id="message" required />
                    <button type="submit" disabled={isSubmitting} className={style.submitBtn}>
                        Send
                    </button>
                </Form>
            </div>
        </div>
    );
};
