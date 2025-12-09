// Footer.jsx

import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./footer.css";

const Footer = () => {
  return (
    // Outer container for full footer area
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        {/* Social Media Icons */}
        <div className="footer_icons">
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>

        {/* Footer Columns */}
        <div className="footer_data">
          {/* Column 1 */}
          <ul>
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notices</li>
          </ul>

          {/* Column 2 */}
          <ul>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>

          {/* Column 3 */}
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
          </ul>

          {/* Column 4 */}
          <ul>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>
        </div>

        {/* Service Code Button */}
        <div className="service_code">
          <p>Service Code</p>
        </div>

        {/* Copyright */}
        <div className="copy-write">&copy; 1997–2024 Netflix, Inc.</div>
      </div>
    </div>
  );
};

export default Footer;
