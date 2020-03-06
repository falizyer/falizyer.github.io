import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-xhr-backend";
import { AppLanguages } from "./model/App.model";

import en from "assets/locales/en.json";
import ru from "assets/locales/ru.json";

i18n
  .use(detector)
  .use(backend)
  .init({
    lng: AppLanguages.en,
    fallbackLng: AppLanguages.en,
    defaultNS: "translation",
    debug: true,
    keySeparator: false,
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: {
        translation: en
      },
      ru: {
        translation: ru
      }
    }
  });

export default i18n;
