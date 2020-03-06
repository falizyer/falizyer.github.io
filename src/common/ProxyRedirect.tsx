import React, { PropsWithChildren } from "react";
import { Redirect, RedirectProps } from "react-router-dom";

function ProxyRedirect(props: PropsWithChildren<RedirectProps>) {
  return (<Redirect {...props} path={`${process.env.REACT_APP_ROOT_PATH}/${props.path}`} />);
}

export default ProxyRedirect;
