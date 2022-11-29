import React, { useState } from "react";
import "./styles/sectionThree.css";

export default function SectionThree() {
    const [isOpen, setOpen] = useState(false)
    const handleClick = () =>{
        setOpen(!isOpen)
    }
  return (
    <section id="portfolio" className="section-three">
      <div className="section-three_inside">
        <div className="section-three_inside-block">
          <h3>Наши проекты</h3>
          <div class="angry-grid">
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
         <button onClick={handleClick}>показать еще</button>
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
         <button onClick={handleClick}>свернуть</button>
          }

        </div>
      </div>
    </section>
  );
}
