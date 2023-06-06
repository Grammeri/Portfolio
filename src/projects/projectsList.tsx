// projectsList.ts
import socialNetWorkImg from './../assets/image/SocialNetwork.jpg';
import todoImg from './../assets/image/Todolist.jpg';
import startUpImg from "./../assets/image/StartUp.jpg";
import flashCardsImg from "./../assets/image/FlashCards.jpg";
import interviewImag from "./../assets/image/interviewImag.webp";
import instagram from "./../assets/image/instagram.png";
import whatsUp from "./../assets/image/whatsUp.png";
import {TFunction} from 'i18next';

export const projectsList = (t: TFunction) => [
    {
        title: "Currently in progress",
        date: t("inctagramDate"),
        stack: t("inctagramStack"),
        description: t("inctagramDescription"),
        image: instagram,
        appUrl: "#",
        codeUrl: "https://github.com/Crash2022/Inctagram"
    },
    {
        title: "Test WhatsUp",
        date: t("whatsUpDate"),
        stack: t("whatsUpStack"),
        description: t("whatsUpDescription"),
        image: whatsUp,
        appUrl: "https://grammeri.github.io/mockWhatsupTest",
        codeUrl: "https://github.com/Grammeri/mockWhatsupTest/"
    },
    {
        title: "TestAssignment",
        date: t("sagaAssignmentDate"),
        stack: t("sagaAssignmentStack"),
        description: t("sagaAssignmentDescription"),
        image: interviewImag,
        appUrl: "https://grammeri.github.io/TestAssignment/",
        codeUrl: "https://github.com/Grammeri/TestAssignment"
    },
    {
        title: "Start Up",
        date: t("startUpDate"),
        stack: t("startUpStack"),
        description: t("startUpDescription"),
        image: startUpImg,
        appUrl: "https://silevans-a2m9qgc35-i6169696-gmailcom.vercel.app/",
        codeUrl: "https://github.com/Dmitry-Klyuev/silevans"
    },
    {
        title: "FlashCards",
        date: t("flashCardsDate"),
        stack: t("flashCardsStack"),
        description: t("flashCardsDescription"),
        image: flashCardsImg,
        appUrl: "https://grammeri.github.io/flashcards",
        codeUrl: "https://github.com/Grammeri/flashcards"
    },
    {
        title: "Social Network",
        date: t("socialNetworkDate"),
        stack: t("socialNetworkStack"),
        description: t("socialNetworkDescription"),
        image: socialNetWorkImg,
        appUrl: "https://grammeri.github.io/Samurai_23/",
        codeUrl: "https://github.com/grammeri/Samurai_23"
    },
    {
        title: "Todolist",
        date: t("tdlDate"),
        stack: t("tdlStack"),
        description: t("todolistDescription"),
        image: todoImg,
        appUrl: "https://grammeri.github.io/Todolist/",
        codeUrl: "https://github.com/grammeri/Todolist"
    },

];