import React, { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import style from './Contacts.module.scss'
import { Title } from '../common/Components/title/Title'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'

export const Contacts = () => {
  const { t } = useTranslation()
  const form = useRef<HTMLFormElement>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Initialize EmailJS with public key
    if (process.env.REACT_APP_PUBLIC_KEY) {
      emailjs.init(process.env.REACT_APP_PUBLIC_KEY)
    }
  }, [])

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form.current) {
      toast.error('Form not found. Please refresh the page.', {
        position: 'bottom-center',
        autoClose: 5000
      })
      return
    }

    const serviceId = process.env.REACT_APP_SERVICE_ID
    const templateId = process.env.REACT_APP_TEMPLATE_ID
    const publicKey = process.env.REACT_APP_PUBLIC_KEY

    console.log('📧 EmailJS Configuration:', {
      serviceId,
      templateId,
      publicKey: publicKey ? `${publicKey.substring(0, 5)}...` : 'NOT SET'
    })

    if (!serviceId || !templateId || !publicKey) {
      toast.error(
        'Email service is not configured. Please contact the administrator.',
        {
          position: 'bottom-center',
          autoClose: 5000
        }
      )
      console.error('Missing EmailJS configuration:', {
        serviceId,
        templateId,
        publicKey
      })
      return
    }

    setIsLoading(true)

    try {
      console.log('📤 Sending form data...')
      const formData = new FormData(form.current)
      console.log('Form data:', {
        user_name: formData.get('user_name'),
        user_email: formData.get('user_email'),
        message: formData.get('message')
      })

      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      )

      console.log('✅ EmailJS Response:', result)

      if (result.status === 200) {
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
        form.current.reset()
      }
    } catch (error) {
      console.error('EmailJS Error:', error)

      let errorMessage = 'Failed to send message. Please try again.'

      if (error && typeof error === 'object' && 'text' in error) {
        const errorText = String(error.text)
        errorMessage = `Error: ${errorText}`

        // Show more helpful message for invalid grant error
        if (errorText.includes('Invalid grant')) {
          errorMessage =
            'Gmail connection expired. Please contact administrator.'
        }
      }

      toast.error(errorMessage, {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    } finally {
      setIsLoading(false)
    }
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
            disabled={isLoading}
            placeholder={(t('yourName') as string) || ''}
          />
          <label htmlFor="email">{t('email')}</label>
          <input
            type="email"
            name="user_email"
            id="email"
            required
            disabled={isLoading}
            placeholder={(t('yourEmail') as string) || ''}
          />
          <label htmlFor="message">{t('message')}</label>
          <textarea
            name="message"
            id="message"
            required
            disabled={isLoading}
            placeholder={(t('yourMessage') as string) || ''}
          />
          <button
            type="submit"
            className={style.submitBtn}
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : t('send')}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}
