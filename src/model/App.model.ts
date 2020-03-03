import type { FunctionComponent } from "react";
import type { RouteProps } from "react-router-dom";

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