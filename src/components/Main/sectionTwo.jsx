import React from "react";
import { m, motion } from "framer-motion";
import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import first from "../../assets/first.svg";
import second from "../../assets/second.svg";
import third from "../../assets/third.svg";
import "./styles/sectionTwo.css";

export default function SectionTwo() {
  const { t } = useTranslation();

  const sectionAnimation = {
    hidden:{
      y: -200,
      opacity:0,
    },
    visible: custom =>({
      y:0,
      opacity:1,
      transition:{
        delay: custom * 0.3,
        type:'spring',
        stiffness:120,

      },
    })

  }
  const blockAnimation = {
    hidden:{
      x:-1000,
      opacity:0,
      scale:2,

    },
    visible: custom =>({
      x:0,
      opacity:1,
      scale:1,
      transition:{
        delay: custom * 0.5,
        duration: 1.5,
        type:"spring",
        stiffness:90,
        ease:"linear"
        
      },
    })
  }
  const textAnimation = {
    hidden:{
      x:-1000,
      opacity:0,

    },
    visible:({
      x:0,
      opacity:1,
      transition:{
        delay:1,
        duration: 1,
        type: 'tween',
        ease:'linear'
      },
    })
    
  }
  const backgroundAnimation = {
    active:{
      backgroundColor: "green"

    },
    inactive:{
      backgroundColor: "transparent",
      transition: { duration: 2 }      
    }
    
   
  }

  return (
    <motion.section 
      className="section-two"
      initial="hidden"
      whileInView="visible"
      viewport={{amount:0.2, once:true}}
    >
      <div id="about_us" className="section-two_inside">
        <div className="section-two_inside-block">
          <motion.h3 custom={1} variants={sectionAnimation}>{t("business")}</motion.h3>
          <motion.h2 custom={2} variants={sectionAnimation}>{t("our")}</motion.h2>
          <div initial="hidden" whileInView="visible" viewport={{amount: 0.2, once:true}} className="section-two_inside-images">
            <motion.div custom={1} variants={blockAnimation} className="section-two_inside-images-left">
              <img src={first} alt="" />
              <p>{t("presentation")}</p>
            </motion.div>
            <motion.div custom={2} variants={blockAnimation} className="section-two_inside-images-center">
              <img src={second} alt="" />
              <p>{t("support")}</p>
            </motion.div>
            <motion.div custom={3} variants={blockAnimation} className="section-two_inside-images-right">
              <img src={third} alt="" />
              <p>{t("target")}</p>
            </motion.div>
          </div>
          <motion.h3
            animate='active'
            variants={backgroundAnimation}
          >{t("create_websites")}</motion.h3>
          <p  className="itc-p">{t("itc")}</p>
          <h3 className="gap">{t("funs")}</h3>
          <h5>{t("braves")}</h5>
          <p className="itc-p">{t("other")}</p>
        </div>
      </div>
    </motion.section>
  );
}
