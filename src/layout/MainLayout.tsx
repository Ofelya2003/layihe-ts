import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
  const location = useLocation();

  const isAdminPage = location.pathname === "/admin";

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      
      {!isAdminPage && <Footer />}
    </>
  );
};

export default MainLayout;