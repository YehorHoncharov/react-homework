// импорт не нужен
import { ReactNode } from "react";
import "./Layout.css";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
// можно удалить коммент
// import { PostList } from "../PostList/PostList"

// не нужен
interface ILayoutProps {
  children?: ReactNode;
}
// props не работаешь
export function Layout(props: ILayoutProps) {
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
