import React, { PropsWithChildren } from "react";
import { Route, RouteProps } from "react-router-dom";

function ProxyRoute(props: PropsWithChildren<RouteProps>) {
  return (<Route {...props} path={`${process.env.REACT_APP_ROOT_PATH}/${props.path}`} />);
}

export default ProxyRoute;
