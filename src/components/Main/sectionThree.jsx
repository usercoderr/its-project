import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./styles/sectionThree.css";
import Carousel from 'better-react-carousel'

export default function SectionThree() {
  const { t } = useTranslation()


  const [isOpen, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!isOpen)
  }
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <section id="portfolio" className="section-three">
      <div className="section-three_inside">
        <div className="section-three_inside-block">
          <h3>{t("products")}</h3>
          <div className="grid-container">
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

          <div className="carousel">
            <Carousel cols={1} rows={1} gap={10} scrollSnap={true} loop mobileBreakpoint={767}>
              <Carousel.Item>
                <img width="100%" src="https://picsum.photos/800/600?random=1" />
              </Carousel.Item>
              <Carousel.Item>
                <img width="100%" src="https://picsum.photos/800/600?random=2" />
              </Carousel.Item>
              <Carousel.Item>
                <img width="100%" src="https://picsum.photos/800/600?random=3" />
              </Carousel.Item>
            </Carousel>
          </div>

        </div>
      </div>
    </section>
  );
}
