import React from "react";
import { useTranslation } from "react-i18next";
import "./styles/sectionFive.css";
export default function SectionFive() {
  const {t} = useTranslation()

  return (
    <section className="section-five">
      <div className="section-five_inside">
        <div id="contacts" className="section-five_inside-block">
          <h3>{t("move")}</h3>
          <h2>{t("allow")}</h2>
          <div className="section-five_inside-contacts">
            <div className="section-five_inside-contacts-left">
              <p>office@its-tech.org</p>
              <a href="tel:+996 312 973777">+996 312 973777</a>
              <span>{t("address")}</span>
            </div>
            <div className="section-five_inside-contacts-center">
              <span>{t("send")}</span>
              <div className="border-line"></div>
            </div>
            <div className="section-five_inside-contacts-right">
              <span>{t("present")}</span>
              <div className="border-line"></div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
