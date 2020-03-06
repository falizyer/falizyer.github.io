import React, { PropsWithChildren, useEffect, useReducer } from "react";
import { ILanguageAction, ILanguageState, LanguageActionType, LanguageContext, LanguageDefaultValue } from "contexts";
import i18n from "i18n";

function LanguageReducer(state: ILanguageState, action: ILanguageAction) {
  switch (action.type) {
    case LanguageActionType.CHANGE_LANGUAGE:
      return {
        ...state,
        language: (action as Required<ILanguageAction>).payload
      };
  }
  return state;
}

function LanguageProvider(props: PropsWithChildren<object>) {
  const [ state, dispatch ] = useReducer(LanguageReducer, LanguageDefaultValue);

  useEffect(() => {
    if (LanguageDefaultValue.language !== state.language) {
      i18n.changeLanguage(state.language);
    }
  }, [ state.language ]);

  return (
    <LanguageContext.Provider value={ { ...state, dispatch } }>
      { props.children }
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
