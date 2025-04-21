import { useQuery } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import { LOGIN_ROUTE, DASHBOARD_ROUTE } from "./routes";
// import DashboardPage from "./pages/dashboard";
import LoginComponent from "./components/Login";
import LogoutPage from "./pages/logout";
import DashboardPage from "./pages/dashboard";

// import AdminUsersPage from "./pages/dashboard/admins";
// import StaffDetailsPage from "./pages/dashboard/admins/details";
// import SettingsPage from "./pages/dashboard/settings";
// import ProfilePage from "./pages/dashboard/profile";
// import settingStore from "./mobx/SettingStore";

function App() {
  //   const { isLoading } = useQuery({
  //     queryKey: ["settings"],
  //     queryFn: settingStore.getSettings,
  //   });

  return (
    <>
      <Toaster position="top-center" />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to={LOGIN_ROUTE} />} />
          <Route path={LOGIN_ROUTE} element={<LoginComponent />} />
          <Route path={`${DASHBOARD_ROUTE}/*`} element={<DashboardPage />} />
          {/* 
          <Route path={`${PROFILE_ROUTE}`} element={<ProfilePage />} />
          <Route path={`${SETTINGS_ROUTE}`} element={<SettingsPage />} />
          <Route path={`${ADMINS_ROUTES}`} element={<AdminUsersPage />} />
          <Route
            path={`${ADMINS_DETAILS_ROUTES}`}
            element={<StaffDetailsPage />}
          /> */}
          <Route path={`/logout`} element={<LogoutPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
