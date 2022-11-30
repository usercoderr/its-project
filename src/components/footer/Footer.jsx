import React from "react";
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillTwitterSquare } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { AiFillBehanceSquare } from 'react-icons/ai'
import { FiInstagram } from 'react-icons/fi'
import logo from "../../assets/logo.svg";
import instagram from "../../assets/instagram.svg";

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
            <a href="#">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="#">
              <AiFillLinkedin color="#0A66C2" />
            </a>
            <a href="#">
              <AiFillTwitterSquare color="#00acee" />
            </a>
            <a href="#">
              <AiFillFacebook color="#0165E1" />
            </a>
            <a href="#">
              <AiFillYoutube color="#FF0000" />
            </a>
            <a href="#">
              <AiFillBehanceSquare color="#131418" />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © 2022 ITS Technologies LLC.</p>
      </div>
    </footer>
  );
}

