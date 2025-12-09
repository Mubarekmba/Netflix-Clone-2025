// Header.jsx

import React from "react";
import "./header.css";

// Assets
import NetflixLogo from "../../assets/images/netflix-Logo.png";

// Icons
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    // Outer wrapper for fixed header
    <div className="header_outer_container">
      <div className="header_container">
        {/* LEFT SIDE: Logo + Navigation Menu */}
        <div className="header_left">
          <ul>
            {/* Netflix Logo */}
            <li>
              <img src={NetflixLogo} alt="Netflix Logo" width="100" />
            </li>

            {/* Navigation Links */}
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>

        {/* RIGHT SIDE: Search, Notifications, Profile */}
        <div className="header_right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
