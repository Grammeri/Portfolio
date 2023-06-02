import React, { useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from './Contacts.module.scss';
import { Title } from './../../../../src/common/Components/title/Title';
import { useTranslation } from 'react-i18next';

export const Contacts = () => {
    const form:any = useRef();
    const hasAttachedListener = useRef(false); // create a new ref
    const { t } = useTranslation();

    // the rest of your code ...

    return (
        <div id="Contacts" className={style.contactsBlock}>
            <h2 style={{color:"orange", position:"absolute", margin:"auto", marginLeft:"20px", marginTop:"90px"}}>
                {t("contactsOpenTag")}
            </h2>

            <div id="Contacts" className={`${style.contactsContainer}`}>

                <Title header={t('letsGetInTouch')} />

                <form ref={form} className={style.contactForm}>
                    <label htmlFor="name">{t('name')}</label>
                    <input type="text" name="user_name" id="name" required placeholder={t('yourName')}/>
                    <label htmlFor="email">{t('email')}</label>
                    <input type="email" name="user_email" id="email" required placeholder={t('yourEmail')}/>
                    <label htmlFor="message">{t('message')}</label>
                    <textarea name="message" id="message" required placeholder={t('yourMessage')}/>
                    <button type="submit" className={style.submitBtn}>
                        {t('send')}
                    </button>
                    <div>
                        {t('formNote')}
                    </div>
                </form>
            </div>
            <h2 style={{color:"orange", position:"absolute", margin:"auto", marginLeft:"20px", marginTop:"-100px"}}>
                {t('contactsCloseTag')}
            </h2>
            <ToastContainer position={"bottom-center"} />
        </div>
    );
};
