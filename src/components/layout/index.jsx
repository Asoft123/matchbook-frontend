import React from "react";
import { observer } from "mobx-react-lite";

import { AppBody, LayoutBody, LayoutContainer } from "./style";
// import SideBar from "../Menu/SideBar";
// import Navbar from "../Menu/Header";
// import MobileMenuBar from "../Menu/SideBar/MobileMenu"
// import adminAuthStore from '/src/mobx/AdminUserStore'

function AppLayout({ children }) {
  return (
    <LayoutContainer>
      {/* <SideBar /> */}
      <LayoutBody>
        {/* <Navbar /> */}
        {/* {adminAuthStore.navbarOpen && <MobileMenuBar />} */}
        <AppBody>{children}</AppBody>
      </LayoutBody>
    </LayoutContainer>
  );
}

export default observer(AppLayout);
