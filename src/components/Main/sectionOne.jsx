import React from "react";
import { useTranslation } from "react-i18next";
import sectionOne from "../../assets/sectionOne.svg";
import "./styles/sectionOne.css";

export default function SectionOne() {
  const {t} = useTranslation()

  return (
    <section className="section-one">
      <div className="section-one_inside">
        <div className="section-one_inside-left">
          <span>{t("development")}</span>
          <h1>{t("digital")}</h1>
          <div className="section-one_button">
            <span>{t("send")}</span>
          </div>
        </div>
        <div className="section-one_inside-right">
          <img src={sectionOne} alt="" />
        </div>
      </div>
    </section>
  );
}
