import { createContext } from "react";
import { AppLanguages } from "./model/App.model";

export enum LanguageActionType {
  CHANGE_LANGUAGE = "CHANGE_LANGUAGE"
}

export interface ILanguageAction {
  type: LanguageActionType;
  payload?: AppLanguages
}

export interface ILanguageState {
  language: AppLanguages;
}

export type ILanguageProviderState = ILanguageState & { dispatch: any };

export const LanguageDefaultValue: ILanguageProviderState = {
  language: AppLanguages.en,
  dispatch: null
};

export const LanguageContext = createContext(LanguageDefaultValue);
