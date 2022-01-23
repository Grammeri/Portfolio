import React from 'react'
import style from "./Skills.module.css"
import styleContainer from "../common/styles/Container.module.css";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={"JS"}
                    description={"1 Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
                    "                    Eos esse expedita facere in non quaerat, unde? Adipisci consequuntur cum\n" +
                    "                        dolore et impedit iste iusto natus, perspiciatis recusandae rerum, sint, sunt."}/>
                    <Skill title={"React"}
                           description={"2 Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
                           "                    Eos esse expedita facere in non quaerat, unde? Adipisci consequuntur cum\n" +
                           "                        dolore et impedit iste iusto natus, perspiciatis recusandae rerum, sint, sunt."}/>
                    <Skill title={"Redux"}
                           description={"3 Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
                           "                    Eos esse expedita facere in non quaerat, unde? Adipisci consequuntur cum\n" +
                           "                        dolore et impedit iste iusto natus, perspiciatis recusandae rerum, sint, sunt."}/>
                </div>
            </div>
        </div>
    )
}

