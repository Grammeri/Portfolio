import React, { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import style from './Contacts.module.scss'
import { Title } from '../common/Components/title/Title'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'

export const Contacts = () => {
  const { t } = useTranslation()
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID || '',
        process.env.REACT_APP_TEMPLATE_ID || '',
        form.current || '',
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success('Your message has been sent successfully!', {
            position: 'bottom-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            toastId: 'success-id'
          })
          if (form.current) {
            form.current.reset()
          }
        },
        () => {
          toast.error('Error occurred! Please try again.', {
            position: 'bottom-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          })
        }
      )
  }

  return (
    <div id="Contacts" className={style.contactsBlock}>
      <div
        id="Contacts"
        className={`${style.contactsContainer} ${style.title}`}
      >
        <div className={style.blockTitle}>
          <Title
            header={t('letsGetInTouch')}
            alternativeColor={style.whiteTitle}
          />
        </div>

        <form ref={form} className={style.contactForm} onSubmit={sendEmail}>
          <label htmlFor="name">{t('name')}</label>
          <input
            type="text"
            name="user_name"
            id="name"
            required
            placeholder={(t('yourName') as string) || ''}
          />
          <label htmlFor="email">{t('email')}</label>
          <input
            type="email"
            name="user_email"
            id="email"
            required
            placeholder={(t('yourEmail') as string) || ''}
          />
          <label htmlFor="message">{t('message')}</label>
          <textarea
            name="message"
            id="message"
            required
            placeholder={(t('yourMessage') as string) || ''}
          />
          <button type="submit" className={style.submitBtn}>
            {t('send')}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}
