import { FunctionComponent } from "react";
import { RouteProps } from "react-router-dom";

interface AppRoutes {
  About: string;
  Contacts: string;
  notFound: string;
}

export type Routes = {
  readonly [P in keyof AppRoutes]: RouteProps & {
    component: FunctionComponent;
    path: string;
  }
};

export enum AppLanguages {
  en = "en",
  ru = "ru"
}
