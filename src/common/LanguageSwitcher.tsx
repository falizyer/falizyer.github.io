import React, { ChangeEvent, useContext } from "react";
import { AppLanguages } from "model/App.model";
import useTranslation from "hooks/UseTranslation";
import { LanguageActionType, LanguageContext } from "../contexts";

const languageList = [ {
  value: AppLanguages.en,
  label: "app.languages.en"
}, {
  value: AppLanguages.ru,
  label: "app.languages.ru"
} ];

function LanguageSwitcher() {
  const { t, i18n, changeLanguage } = useTranslation();

  return (
    <select
      className="language-switcher"
      defaultValue={ i18n.language }
      onChange={handleChangeLanguage}
    >
      {
        languageList.map(languageItem => (
          <option
            key={ languageItem.value }
            value={ languageItem.value }
            label={ t(languageItem.label) }
          >
            { t(languageItem.label) }
          </option>
        ))
      }
    </select>
  );

  function handleChangeLanguage(event: ChangeEvent<HTMLSelectElement>) {
    changeLanguage(event.target.value);
  }
}

export default LanguageSwitcher;
