import React from "react";
import { logos } from "../../data/logos";
import "./styles/sectionFour.css";

export default function SectionFour() {
  return (
    <section className="section-four">
      <div className="section-four_inside">
        <div className="section-four_inside-block">
          <h3>Наши счастливые клиенты</h3>
          <div className="section-four_inside-block-map">
            {logos.map((company) => (
              <div className="section-box" key={company.id}><img src={company.img} alt="" /></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
