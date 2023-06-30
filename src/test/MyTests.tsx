import React from "react";
import style from "test/MyTests.module.scss";
import styleContainer from "../common/styles/Container.module.css";
import { Title } from "../common/Components/title/Title";
import { useTranslation } from "react-i18next";
import { testsList } from "test/testsList";
import { MyTest } from "test/tests/MyTest";

export const MyTests = () => {
  const { t } = useTranslation();
  const tests = testsList(t);

  return (
    <div id="MyTests" className={style.myTestsBlock}>
      <div className={`${styleContainer.container} ${style.myTestsContainer}`}>
        <Title header={t("myTests")} />

        <div className={style.tests}>
          <div className={style.testsInner}>
            {tests.map((test, index) => (
              <div key={index} className={`${style.testItem} testItem`}>
                <MyTest
                  testTitle={test.title}
                  image={test.image}
                  projectDescription={test.description}
                  appUrl={test.appUrl}
                  codeUrl={test.codeUrl}
                  // date={test.date}
                  stack={test.stack}
                  //videoUrl={test.videoUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
