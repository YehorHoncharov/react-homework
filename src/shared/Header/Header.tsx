import { Link } from "react-router-dom";
import "./Header.css";

export function Header() {
  return (
    <div className="header">
      <Link to={"/"}>
        <img className="logoImgHeader" src="/static/img/logo.png" alt="" />
      </Link>

      <Link to={"/posts"}>
        <a className="menu-button" href="/">
          ALL POSTS
        </a>
      </Link>
      <input className="input" type="text" placeholder="Пошук постів..." />

      <Link to={"/favourite"}>
        <a className="menu-button" href="/">
          FAVOURITE
        </a>
      </Link>

      <img className="profileImgHeader" src="/static/img/profile.png" alt="" />
    </div>
  );
}
