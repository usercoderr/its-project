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
  const elemAnimate = {
    offscreen: {
      translateX: -1500,
    },
    onscreen: {
      translateX: 0,
      transition: {
        type: 'tween',
        bounce: 0.4,
        duration: 1
      },
    }
  }
  const extramAnimate = {
    offscreen: {
      y: -1500,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        bounce: 0.4,
        type: 'tween',
        duration: 1,
      }
    }
  }
  return (
    <section id="portfolio" className="section-three">
      <div
        className="section-three_inside">
        <div className="section-three_inside-block">
            <h3>{t("products")}</h3>
          <div className="grid-container">
            <motion.div
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                staggerChildren: 0.2
              }}
              className="angry-grid">
              <motion.div
                variants={elemAnimate}
                id="item-0">&nbsp;</motion.div>
              <motion.div
                variants={elemAnimate}
                id="item-1">&nbsp;</motion.div>
              <motion.div
                variants={elemAnimate}
                id="item-2">&nbsp;</motion.div>
              <motion.div
                variants={elemAnimate}
                id="item-3">&nbsp;</motion.div>
              <motion.div
                variants={elemAnimate}
                id="item-4">&nbsp;</motion.div>
              <motion.div
                variants={elemAnimate}
                id="item-5">&nbsp;</motion.div>
              <motion.div
                variants={elemAnimate}
                id="item-6">&nbsp;</motion.div>
              <motion.div
                variants={elemAnimate}
                id="item-7">&nbsp;</motion.div>
            </motion.div>
            <br />
            {
              !isOpen &&
              <button onClick={handleClick}>{t("showButton")}</button>
            }
            {
              isOpen ?
                <motion.div class="angry-grid"
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  transition={{
                    staggerChildren: 0.2
                  }}
                >
                  <motion.div variants={extramAnimate} id="item-1">&nbsp;</motion.div>
                  <motion.div variants={extramAnimate} id="item-0">&nbsp;</motion.div>
                  <motion.div variants={extramAnimate} id="item-2">&nbsp;</motion.div>
                  <motion.div variants={extramAnimate} id="item-3">&nbsp;</motion.div>
                  <motion.div variants={extramAnimate} id="item-4">&nbsp;</motion.div>
                  <motion.div variants={extramAnimate} id="item-5">&nbsp;</motion.div>
                  <motion.div variants={extramAnimate} id="item-6">&nbsp;</motion.div>
                  <motion.div variants={extramAnimate} id="item-7">&nbsp;</motion.div>
                </motion.div> : ''
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
