import React, { forwardRef, useState } from 'react'
import style from './MyProject.module.scss'
import { useTranslation } from 'react-i18next'
import FlashOnIcon from '@mui/icons-material/FlashOn'

type PropsTypes = {
  projectDescription: string
  image: string
  appUrl: string
  codeUrl: string
  projectTitle: string
  stackBold?: string
  stackContent: string
  videoUrl?: string
}

export const MyProject = forwardRef<HTMLDivElement, PropsTypes>(
  (props, ref) => {
    const { t } = useTranslation()
    // Calculate word limit
    const wordLimit = 10

    // Split description into words
    const descriptionWords = props.projectDescription.split(' ')

    // Check if description exceeds word limit
    const longDescription = descriptionWords.length > wordLimit

    // Create preview (first 'wordLimit' words of description) and hidden (the rest of the description) parts
    const previewDescription = descriptionWords.slice(0, wordLimit).join(' ')
    descriptionWords.slice(wordLimit).join(' ')
    // State to manage whether to show more or less
    const [showMore, setShowMore] = useState(false)

    // Function to toggle 'showMore' state
    const toggleShowMore = () => setShowMore(!showMore)

    return (
      <section className={style.myProject}>
        {props.projectTitle === t('Currently in progress') && (
          <div className={style.lightning}>
            <FlashOnIcon />
            <span>{t('UnderDevelopment')}</span>
          </div>
        )}
        <img
          className={style.image}
          src={props.image}
          alt={props.projectTitle}
        />
        <div className={style.content}>
          <div ref={ref} className={style.stack}>
            <span>{props.stackBold}</span>
            {props.stackContent}
          </div>
          <div className={style.description}>
            <p className={!showMore ? style.truncate : ''}>
              {showMore
                ? props.projectDescription
                : `${previewDescription}${longDescription ? '...' : ''}`}
            </p>
            {longDescription && (
              <p className={style.moreLess} onClick={toggleShowMore}>
                {showMore ? t('less') : t('more')}
              </p>
            )}
          </div>
          <div className={style.buttonsContainer}>
            <div
              className={style.button}
              onClick={() => window.open(props.appUrl, '_blank')}
            >
              {props.appUrl === '#' ? t('inProgress') : t('viewProject')}
            </div>
            <div
              className={`${style.button} ${style.codeButton}`}
              onClick={() => window.open(props.codeUrl, '_blank')}
            >
              {t('viewCode')}
            </div>
            {props.videoUrl && (
              <div
                className={`${style.button} ${style.videoButton}`}
                onClick={() => window.open(props.videoUrl, '_blank')}
              >
                {t('viewVideo')}
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
)
