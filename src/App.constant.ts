import React from "react";
import { Routes } from "model/App.model";

export const ROUTES: Routes = {
  notFound: {
    path: "/not-found",
    component: React.lazy(() => import("./common/NotFound"))
  },
  About: {
    path: "/about",
    exact: true,
    component: React.lazy(() => import("./component/About"))
  },
  Contacts: {
    path: "/contacts",
    exact: true,
    component: React.lazy(() => import("./component/Contacts"))
  }
};