import React from "react";
import "./styles/sectionFive.css";
export default function SectionFive() {
  return (
    <section className="section-five">
      <div className="section-five_inside">
        <div className="section-five_inside-block">
          <h3>ПЕРЕХОДИМ К ДЕЙСТВИЯМ</h3>
          <h2>Разрешите нам создать лучший сайт в вашей нише</h2>
          <div className="section-five_inside-contacts">
            <div className="section-five_inside-contacts-left">
              <p>info@its-tech.org</p>
              <a href="tel:+996500123456">0 500 123 456</a>
              <span>901 N Pitt Str., Suite 170 Alexandria, VA 22314, USA</span>
            </div>
            <div className="section-five_inside-contacts-center">
              <span>Отправить заявку</span>
              <div className="border-line"></div>
            </div>
            <div className="section-five_inside-contacts-right">
              <span>Наша презентация</span>
              <div className="border-line"></div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
