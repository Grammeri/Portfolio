import React from 'react'
import style from './Footer.module.scss'
import GithubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TelegramIcon from '@mui/icons-material/Telegram'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import { useTranslation } from 'react-i18next'

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <section className={style.footer}>
      <div className={style.footerContainer}>
        <div className={style.footerContent}>
          <div className={style.footerText}>{t('portfolioStack')}</div>
          <div className={style.adoptedForPhonesAndIconsAllRights}>
            <span className={style.footerText}>
              {t('adoptedForSmartphones')}
            </span>
            <div className={style.socialIcons}>
              <span className={style.socialIcon}>
                <a href="https://github.com/Grammeri">
                  <GithubIcon style={{ color: 'white', fontSize: '33px' }} />
                </a>
              </span>
              <span className={style.socialIcon}>
                <a href="https://t.me/dmitrysnikolayev">
                  <TelegramIcon style={{ color: 'white', fontSize: '40px' }} />
                </a>
              </span>
              <span className={style.socialIcon}>
                <a href="https://www.linkedin.com/in/dmitry-nikolayev-a34978258/">
                  <LinkedInIcon style={{ color: 'white', fontSize: '40px' }} />
                </a>
              </span>
              <span className={style.socialIcon}>
                <a href="mailto:reacttsxgrammer@gmail.com">
                  <AlternateEmailIcon
                    style={{ color: 'white', fontSize: '40px' }}
                  />
                </a>
              </span>
            </div>
            <span className={style.footerText}>{t('copyRight')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
