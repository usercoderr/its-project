import React from "react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.svg";
import Lang from "../../features/Lang";

export default function Header() {
  const {t} = useTranslation()
  return (
    <header>
      <div className="header">
        <img src={logo} alt="" />
        <ul>
          <li>
            <a href="#">{t("main")}</a>
          </li>
          <li>
            <a href="#">{t("about_us")}</a>
          </li>
          <li>
            <a href="#portfolio">{t("portfolio")}</a>
          </li>
          <li>
            <a href="#">{t("contacts")}</a>
          </li>
        </ul>
        <Lang/>
      </div>
    </header>
  );
}
