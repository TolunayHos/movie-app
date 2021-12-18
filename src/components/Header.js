import React from "react";
import * as Unicons from "@iconscout/react-unicons";
import "../styles/Header.scss";
import movies from "../images/movieapplogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="wrapper">
      <div>
        <img src={movies} alt="logo" height="27px" />
      </div>
      <div className="selectionArea">
        <nav>
          <ul>
            <li>
              {" "}
              <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                {" "}
                Home{" "}
              </Link>
            </li>
            <li>About</li>

            <li>
              {" "}
              <Link
                to="/favorites"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Favorites{" "}
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Unicons.UilSearch height="20px" />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
