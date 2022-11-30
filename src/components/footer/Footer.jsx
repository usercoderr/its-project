import React from "react";
import logo from "../../assets/logo.svg";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
      <div className="footer-inside">
        <div className="footer-logo">
        <a href="#">

          <img src={logo} alt="" />
        </a>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">YouTube</a>
            </li>
            <li>
              <a href="#">Behance</a>
            </li>
          </ul>
        </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © 2022 ITS Technologies LLC.</p>
      </div>
    </footer>
  );
}
