import { NavLink } from "react-router-dom";
import Images from "../images";

export default function Navbar() {
  const setActiveClass = ({ isActive }) => (isActive ? "link link--decor active" : "link link--decor");
  return (
    <nav className="nav">
      <div className="container container--nav container--flex">
        <div>
          <img src={ Images.pokeball } alt="Pokémon" className="logo" />
        </div>
        <div>
          <NavLink end className={ setActiveClass } to="/">
            Home
          </NavLink>
          <NavLink className={ setActiveClass } to="/pokemon">
            Pokémon
          </NavLink>
        </div>
      </div>
    </nav>
  );
}