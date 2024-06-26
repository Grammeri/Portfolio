import startUpImg from './../assets/image/StartUp.jpg'
import interviewImag from './../assets/image/interviewImag.webp'
import whatsUp from './../assets/image/whatsUp.png'
import map from './../assets/image/map.jpg'
import { TFunction } from 'i18next'
import angularHomesImg from './../assets/image/angular.jpg'

export const testsList = (t: TFunction) => [
  {
    title: 'Route mapping',
    date: t('routeMappingDate'),
    stack: t('routeMappingStack'),
    description: t('routeMappingDescription'),
    image: map,
    appUrl: 'https://ils-test-iota.vercel.app/',
    codeUrl: 'https://github.com/Grammeri/ils_test'
  },
  {
    title: 'Test WhatsUp',
    date: t('whatsUpDate'),
    stack: t('whatsUpStack'),
    description: t('whatsUpDescription'),
    image: whatsUp,
    appUrl: 'https://grammeri.github.io/mockWhatsupTest',
    codeUrl: 'https://github.com/Grammeri/mockWhatsupTest/'
  },
  {
    title: 'TestAssignment',
    date: t('sagaAssignmentDate'),
    stack: t('sagaAssignmentStack'),
    description: t('sagaAssignmentDescription'),
    image: interviewImag,
    appUrl: 'https://grammeri.github.io/TestAssignment/',
    codeUrl: 'https://github.com/Grammeri/TestAssignment'
  },
  {
    title: 'Start Up',
    date: t('startUpDate'),
    stack: t('startUpStack'),
    description: t('startUpDescription'),
    image: startUpImg,
    appUrl: 'https://silevans-a2m9qgc35-i6169696-gmailcom.vercel.app/',
    codeUrl: 'https://github.com/Dmitry-Klyuev/silevans'
  },
  {
    title: 'Angular Homes',
    date: t('angularHomesDate'),
    stack: t('angularHomesStack'),
    description: t('angularHomesDescription'),
    image: angularHomesImg,
    appUrl: 'https://my-first-angular-project.vercel.app/',
    codeUrl: 'https://github.com/Grammeri/MyFirstAngularProject',
    videoUrl:
      'https://drive.google.com/file/d/1FdQHPT-zno8CGwebp281kDQXJQvFh1Ac/view?usp=drive_link'
  }
]
