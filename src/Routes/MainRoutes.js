import React from "react";
import { Route, Routes } from "react-router-dom";
// import Infopy from "../components/infopy/Infopy";
import ContactsPage from "../pages/ContactsPage";
import CoursePage from "../pages/CoursePage";
import HomePage from "../pages/HomePage";
// import InfojsPage from "../pages/InfojsPage";
import MetoticPage from "../pages/MetoticPage";
import PricePage from "../pages/PricePage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/course", element: <CoursePage />, id: 2 },
    { link: "/metodic", element: <MetoticPage />, id: 3 },
    { link: "/price", element: <PricePage />, id: 4 },
    { link: "/contacts", element: <ContactsPage />, id: 5 },
    // { link: "/infojs", element: <InfojsPage />, id: 6 },
    // { link: "/infopy", element: <Infopy />, id: 7 },
  ];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
