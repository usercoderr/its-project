import React from "react";
import { useTranslation } from "react-i18next";
import "./styles/sectionFive.css";
export default function SectionFive() {
  const {t} = useTranslation()

  const send = t("send").length
  const present = t("present").length

  return (
    <section className="section-five">
      <div className="section-five_inside">
        <div id="contacts" className="section-five_inside-block">
          <h3>{t("move")}</h3>
          <h2>{t("allow")}</h2>
          <div className="section-five_inside-contacts">
            <div className="section-five_inside-contacts-left">
              <p><a href="mailto:office@its-tech.org">office@its-tech.org</a></p>
              <a href="tel:+996 312 973777">+996 312 973777</a>
              <span>{t("address")}</span>
            </div>
            <div className="section-five_inside-contacts-center">
              <span style={{width: `${send * 16}px`}}>{t("send")}</span>
            </div>
            <div className="section-five_inside-contacts-right">
              <span style={{width: `${present * 16}px`}}>{t("present")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
