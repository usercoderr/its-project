import React from "react";
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillTwitterSquare } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { AiFillBehanceSquare } from 'react-icons/ai'
import { FiInstagram} from 'react-icons/fi'
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
              <a href="#">
              <AiFillLinkedin color="#0A66C2" fontSize='1.5rem'/>
              LinkedIn</a>
            </li>
            <li>
              <a href="#">
              <AiFillTwitterSquare color="#00acee" fontSize='1.5rem'/>
              Twitter</a>
            </li>
            <li>
              <a href="#">
              <AiFillFacebook color="#0165E1" fontSize='1.5rem'/>
              Facebook</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">
              <FiInstagram color="#cd486b" fontSize='1.5rem'/>
              Instagram</a>
            </li>
            <li>
              <a href="#">
              <AiFillYoutube color="#FF0000" fontSize='1.5rem'/>
              YouTube</a>
            </li>
            <li>
              <a href="#">
              <AiFillBehanceSquare color="#131418" fontSize='1.5rem'/>
              Behance</a>
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
