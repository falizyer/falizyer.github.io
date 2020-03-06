import React from "react";

import useTranslation from "hooks/UseTranslation";

import './Contacts.scss';

function Contacts() {
  const { t } = useTranslation();
  return (
    <section className="component-contacts">
      <div className="component-contacts__content">
        { t("app.navigation.contacts") }
      </div>
    </section>
  )
}

export default Contacts;