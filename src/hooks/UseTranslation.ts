import i18n from "i18n";
import { useContext } from "react";
import { LanguageActionType, LanguageContext } from "contexts";

export default function useTranslation() {
  const { dispatch } = useContext(LanguageContext);
  return {
    t: (id: string): string => i18n.t(id),
    i18n,
    changeLanguage(lng: string) {
      dispatch({ action: LanguageActionType.CHANGE_LANGUAGE, payload: lng });
    }
  };
}