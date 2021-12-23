import React from "react";
import * as Unicons from "@iconscout/react-unicons";
import "../styles/Header.scss";
import movies from "../images/movieapplogo.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="wrapper">
      <div>
        <Link to="/">
          <img src={movies} alt="logo" height="27px" />
        </Link>
      </div>
      <div className="selectionArea">
        <nav>
          <ul>
            <li>
              <NavLink to="/" className="link">
                <div>Home</div>
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className="link">
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/favorites"
                className="link"
                activeClassName="LinkActive"
              >
                <div>Favorites</div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/search" className="link">
                <div>
                  <Unicons.UilSearch height="20px" />
                </div>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
