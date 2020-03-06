import React, { PropsWithChildren } from "react";

import logo from "assets/logo.svg";

function Header(props: PropsWithChildren<object>) {
  return (
    <header className="app-header">
      <h1 className="app-header__logo"><img src={ logo } alt="title" title="title"/></h1>
      { props.children }
    </header>
  );
}

export default Header;