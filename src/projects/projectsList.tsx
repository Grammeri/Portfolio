import socialNetWorkImg from "./../assets/image/SocialNetwork.jpg";
import todoImg from "./../assets/image/Todolist.jpg";
import startUpImg from "./../assets/image/StartUp.jpg";
import flashCardsImg from "./../assets/image/FlashCards.jpg";
import instagram from "./../assets/image/inctagram.jpg";
import angularHomesImg from "./../assets/image/angular.jpg";
import { TFunction } from "i18next";

export const projectsList = (t: TFunction) => [
  {
    title: t("Currently in progress"),
    date: t("inctagramDate"),
    stack: t("inctagramStack"),
    description: t("inctagramDescription"),
    image: instagram,
    appUrl: "https://inctagram-grammeri.vercel.app/auth/login",
    codeUrl: "https://github.com/Crash2022/Inctagram",
    videoUrl:
      "https://drive.google.com/file/d/1rjp8iRtwNU9D15OQYWN6U0xE2zYZgo_V/view?usp=drive_link",
  },
  {
    title: "Social Network",
    date: t("socialNetworkDate"),
    stack: t("socialNetworkStack"),
    description: t("socialNetworkDescription"),
    image: socialNetWorkImg,
    appUrl: "https://grammeri.github.io/Samurai_23/",
    codeUrl: "https://github.com/grammeri/Samurai_23",
  },

  {
    title: "FlashCards",
    date: t("flashCardsDate"),
    stack: t("flashCardsStack"),
    description: t("flashCardsDescription"),
    image: flashCardsImg,
    appUrl: "https://grammeri.github.io/flashcards",
    codeUrl: "https://github.com/Grammeri/flashcards",
    videoUrl:
      "https://drive.google.com/file/d/1irko1p7DIFxTiKf2S2HzpRK31iWYCrQV/view?usp=drive_link",
  },

  {
    title: "Todolist",
    date: t("tdlDate"),
    stack: t("tdlStack"),
    description: t("todolistDescription"),
    image: todoImg,
    appUrl: "https://grammeri.github.io/Todolist/",
    codeUrl: "https://github.com/grammeri/Todolist",
    videoUrl:
      "https://drive.google.com/file/d/1FdQHPT-zno8CGwebp281kDQXJQvFh1Ac/view?usp=drive_link",
  },
  /*{
    title: "Start Up",
    date: t("startUpDate"),
    stack: t("startUpStack"),
    description: t("startUpDescription"),
    image: startUpImg,
    appUrl: "https://silevans-a2m9qgc35-i6169696-gmailcom.vercel.app/",
    codeUrl: "https://github.com/Dmitry-Klyuev/silevans",
  },
  {
    title: "Angular Homes",
    date: t("angularHomesDate"),
    stack: t("angularHomesStack"),
    description: t("angularHomesDescription"),
    image: angularHomesImg,
    appUrl: "https://my-first-angular-project.vercel.app/",
    codeUrl: "https://github.com/Grammeri/MyFirstAngularProject",
    videoUrl:
      "https://drive.google.com/file/d/1FdQHPT-zno8CGwebp281kDQXJQvFh1Ac/view?usp=drive_link",
  },*/
];
