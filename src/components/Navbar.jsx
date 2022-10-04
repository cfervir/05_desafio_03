import { NavLink } from "react-router-dom";
import Images from "../images";

export default function Navbar() {
  const setActiveClass = ({ isActive }) => (isActive ? 'active' : '');
  return (
    <nav className="nav">
      <div className="container container--nav container--flex">
        <div>
          <img src={ Images.pokeball } alt="Pokémon" className="small-logo" />
        </div>
        <div>
          <NavLink end className={`link link--decor ${setActiveClass}`} to="/">
            Home
          </NavLink>
          <NavLink className={`link link--decor ${setActiveClass}`} to="/pokemon">
            Pokémon
          </NavLink>
        </div>
      </div>
    </nav>
  );
}