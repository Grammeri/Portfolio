import React, { createRef, useEffect, useState } from 'react'
import style from './MyProjects.module.scss'
import { MyProject } from './project/Myproject'
import styleContainer from '../common/styles/Container.module.css'
import { Title } from 'common/Components/title/Title'
import { useTranslation } from 'react-i18next'
import { projectsList } from './projectsList'
import { MyTests } from 'test/MyTests'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import useResponsive from 'hooks/useResponsive'

export const MyProjects = () => {
  const responsive = useResponsive()
  const [isMobile, setIsMobile] = useState(false) // начальное предположение: десктоп
  const { t } = useTranslation()
  const projects = projectsList(t)

  const [showTests, setShowTests] = useState(false)

  useEffect(() => {
    setIsMobile(responsive.isMobile)
  }, [responsive])

  const stackRefs = projects.map(() => createRef<HTMLDivElement>())

  const handleShowTests = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    setShowTests(!showTests)
  }

  return (
    <section id="MyProjects" className={style.myProjectsBlock}>
      <div
        className={`${styleContainer.container} ${style.myProjectsContainer}`}
      >
        <Title header={t('myProjects')} />
        <div className={style.projects}>
          <div className={style.projectsInner}>
            {isMobile ? (
              <Swiper
                className={style.swiperPagination}
                pagination={true}
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={index}>
                    <div className={`${style.projectItem} projectItem`}>
                      <MyProject
                        ref={stackRefs[index]}
                        projectTitle={project.title}
                        image={project.image}
                        projectDescription={project.description}
                        appUrl={project.appUrl}
                        codeUrl={project.codeUrl}
                        stackBold={project.stackBold}
                        stackContent={project.stackContent}
                        videoUrl={project.videoUrl}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              projects.map((project, index) => (
                <div key={index} className={`${style.projectItem} projectItem`}>
                  <MyProject
                    ref={stackRefs[index]}
                    projectTitle={project.title}
                    image={project.image}
                    projectDescription={project.description}
                    appUrl={project.appUrl}
                    codeUrl={project.codeUrl}
                    stackBold={project.stackBold}
                    stackContent={project.stackContent}
                    videoUrl={project.videoUrl}
                  />
                </div>
              ))
            )}
          </div>
        </div>
        <div className={style.moreProjects}>
          <a href="#" onClick={handleShowTests}>
            {showTests ? t('LessProjects') : t('MoreProjects')}
          </a>
        </div>
        {showTests && <MyTests />}
      </div>
    </section>
  )
}
