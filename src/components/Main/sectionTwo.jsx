import React from "react";
import { useTranslation } from "react-i18next";
import first from "../../assets/first.svg";
import second from "../../assets/second.svg";
import third from "../../assets/third.svg";
import "./styles/sectionTwo.css";

export default function SectionTwo() {
  const { t } = useTranslation();

  return (
    <section className="section-two">
      <div id="about_us" className="section-two_inside">
        <div className="section-two_inside-block">
          <h3>{t("business")}</h3>
          <h2>{t("our")}</h2>
          <div className="section-two_inside-images">
            <div className="section-two_inside-images-left">
              <img src={first} alt="" />
              <p>{t("presentation")}</p>
            </div>
            <div className="section-two_inside-images-center">
              <img src={second} alt="" />
              <p>{t("support")}</p>
            </div>
            <div className="section-two_inside-images-right">
              <img src={third} alt="" />
              <p>{t("target")}</p>
            </div>
          </div>
          <h3>{t("create_websites")}</h3>
          <p className="itc-p">{t("itc")}</p>
          <h3>{t("funs")}</h3>
          <h5>{t("braves")}</h5>
          <p>{t("other")}</p>
        </div>
      </div>
    </section>
  );
}
