import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import style from './AboutMeMobile.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/swiper-bundle.css'

export const AboutMeMobile = () => {
  const { t } = useTranslation()
  const [isTextVisible, setIsTextVisible] = useState(false)
  const [startAnimation, setStartAnimation] = useState(false)
  const ref = useRef(null)
  const [, setIsInViewport] = useState(false)
  const [isWaterFilled, setIsWaterFilled] = useState(false)
  const [displayText, setDisplayText] = useState(false)
  const [displayedCredoText, setDisplayedCredoText] = useState('')
  const showText = (event: {
    preventDefault: () => void
    stopPropagation: () => void
  }) => {
    console.log('showText was clicked')
    event.preventDefault()
    event.stopPropagation()
    setIsTextVisible(true)
  }

  const hideText = (event: {
    preventDefault: () => void
    stopPropagation: () => void
  }) => {
    event.preventDefault()
    event.stopPropagation()
    setIsTextVisible(false)
  }

  const isInView = (el: { getBoundingClientRect: () => DOMRect } | null) => {
    if (!el) return false
    const rect = el.getBoundingClientRect()
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight

    return rect.top <= windowHeight && rect.bottom >= 0
  }

  const handleScroll = () => {
    const visible = isInView(ref.current)
    setIsInViewport(visible)

    if (visible && !isWaterFilled) {
      setIsWaterFilled(true)
      setStartAnimation(true)
    } else if (!visible) {
      setIsWaterFilled(false)
      setStartAnimation(false)
      setDisplayText(false)
    }
  }

  useEffect(() => {
    if (isWaterFilled) {
      setTimeout(() => {
        setDisplayText(true)
      }, 2000)
    } else {
      setDisplayText(false)
    }
  }, [isWaterFilled])

  useEffect(() => {
    if (displayText) {
      const fullText = t('myCredo')
      for (let i = 0; i <= fullText.length; i++) {
        setTimeout(() => {
          setDisplayedCredoText(fullText.substring(0, i))
        }, i * 100)
      }
    }
  }, [displayText, t])

  useEffect(() => {
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleSlideChange = (swiper: { realIndex: number }) => {
    if (swiper.realIndex === 0) {
      handleScroll()
    } else {
      setIsWaterFilled(false)
      setStartAnimation(false)
      setDisplayText(false)
    }
  }

  return (
    <Swiper
      className={style.swiperPagination}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      touchRatio={3}
      resistanceRatio={0}
      onSlideChange={handleSlideChange}
    >
      <SwiperSlide>
        <div className={style.rectangle} ref={ref}>
          <h3>{t('asPerson')}</h3>
          <div>{t('Personal')}</div>
          <div
            className={`${
              startAnimation ? style.waterAnimation : style.removeWaterAnimation
            } ${style.roundedBottom}`}
          ></div>
          {displayText && (
            <h1 className={style.credoText}>{displayedCredoText}</h1>
          )}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={style.rectangle}>
          <h3>{t('asDeveloper')}</h3>
          <div className={style.textJustified}>
            <span>{t('InfoAboutMe1')}</span>
            <span style={{ fontWeight: 'bold' }}>{t('InfoAboutMe2')}</span>
            <span>{t('InfoAboutMe3')}</span>
            {isTextVisible ? (
              <>
                <p>{t('InfoAboutMe4')}</p>
                <p>{t('InfoAboutMe5')}</p>
                <p>{t('InfoAboutMe6')}</p>
                <div>
                  <a href="#" onClick={hideText}>
                    {t('Less')}
                  </a>
                </div>
              </>
            ) : (
              <div>
                <a href="#" onClick={showText}>
                  {t('More of my stories')}
                </a>
              </div>
            )}
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={style.rectangle}>
          <h3>{t('aboutMeSkills')}</h3>
          <span>{t('mySkills1')}</span>
          <span style={{ fontWeight: 'bold' }}>{t('mySkills2')}</span>
          <div>{t('mySkills3')}</div>
          <div>{t('mySkills4')}</div>
          <div>{t('mySkills5')}</div>
          <div>{t('mySkills6')}</div>
          <div>{t('mySkills7')}</div>
          <div>{t('mySkills8')}</div>
          <div>{t('mySkills9')}</div>
          <div>{t('mySkills10')}</div>
          <div>{t('mySkills11')}</div>
          <div>{t('mySkills12')}</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={style.rectangle}>
          <h3>{t('aboutMeGoals')}</h3>
          {t('goals')}
        </div>
      </SwiperSlide>
    </Swiper>
  )
}
