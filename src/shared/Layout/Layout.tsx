import "./Layout.css";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";


export function Layout() {
  return (
    <div className="layout">
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
}
