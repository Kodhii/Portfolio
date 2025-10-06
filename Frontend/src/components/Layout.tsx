import { Outlet, NavLink } from "react-router-dom";
import { useState } from "react";
import Burger from "./nav/Burger";
import "./Layout.scss";

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="Layout">
      <header className="layout-header">
        <nav>
          <div className="links">
            <div className="mainTitle">
              <h1>Valentin Schwartz</h1>
            </div>

            <Burger menuOpen={menuOpen} toggleMenu={toggleMenu} />

            <div className={`mainLinks ${menuOpen ? "show" : ""}`}>
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? "active-link" : "")}
                onClick={() => setMenuOpen(false)}
              >
                Accueil
              </NavLink>

              <NavLink
                to="/Parcours"
                className={({ isActive }) => (isActive ? "active-link" : "")}
                onClick={() => setMenuOpen(false)}
              >
                Mon parcours
              </NavLink>

              <NavLink
                to="/CV"
                className={({ isActive }) => (isActive ? "active-link" : "")}
                onClick={() => setMenuOpen(false)}
              >
                Mon CV
              </NavLink>
            </div>
          </div>
        </nav>
      </header>

      <main className="layout-content">
        <Outlet />
      </main>
    </div>
  );
}

