import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./styles/sectionThree.css";
import Carousel from 'better-react-carousel'

export default function SectionThree() {
  const {t} = useTranslation()
  

    const [isOpen, setOpen] = useState(false)
    const handleClick = () =>{
        setOpen(!isOpen)
    }
  return (
    <section id="portfolio" className="section-three">
      <div
        className="section-three_inside">
        <div className="section-three_inside-block">
          <h3>{t("products")}</h3>
          <div className="angry-grid">
            <div id="item-0">&nbsp;</div>
            <div id="item-1">&nbsp;</div>
            <div id="item-2">&nbsp;</div>
            <div id="item-3">&nbsp;</div>
            <div id="item-4">&nbsp;</div>
            <div id="item-5">&nbsp;</div>
            <div id="item-6">&nbsp;</div>
            <div id="item-7">&nbsp;</div>
          </div>
          <br />
         {
            !isOpen &&
         <button onClick={handleClick}>{t("showButton")}</button>
         } 
          {
            isOpen ? <div class="angry-grid">
            <div id="item-0">&nbsp;</div>
            <div id="item-1">&nbsp;</div>
            <div id="item-2">&nbsp;</div>
            <div id="item-3">&nbsp;</div>
            <div id="item-4">&nbsp;</div>
            <div id="item-5">&nbsp;</div>
            <div id="item-6">&nbsp;</div>
            <div id="item-7">&nbsp;</div>
          </div> : ''
          }
          <br />
          {
            isOpen && 
         <button onClick={handleClick}>{t("hiddenButton")}</button>
          }

        </div>
      </div>
    </section>
  );
}
