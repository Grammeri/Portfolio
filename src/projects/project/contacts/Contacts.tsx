import React from 'react'
import style from "./Contacts.module.scss"
import styleContainer from "./Contacts.module.scss"
import {Title} from "../../../common/Components/title/Title";


export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title header={"Contacts"}/>
                <form className={style.contactForm}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea/>
                    <button type={"submit"} className={style.submitBtn}>Send</button>
                </form>
            </div>
        </div>
    );
}

