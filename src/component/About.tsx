import React from "react";

import useTranslation from "hooks/UseTranslation";

import './About.scss';

function About() {
  const { t } = useTranslation();
  return (
    <section className="component-about">
      <div className="component-about__content">
        { t("app.navigation.about") }
      </div>
    </section>
  )
}

export default About;