import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./styles/sectionFive.css";
export default function SectionFive() {
  const {t} = useTranslation()
  const primaryAnimation = {
    offscreen:{
      y:-200,
      opacity:0
    },
    onscreen:{
      y:0,
      opacity:1,
      transition:{
        duration:1,
        delay:0.2,
        stiffness:120,
        type:'tween',
      }
    }
  }
 const secondaryAnimation={
  hidden:{
    translateX:-1500,
  },
  visible:{
    translateX:0,
    transition:{
      duration:1,
      bounce:0.4,
      delay:0.1,
      stiffness:120,
      type:"tween"
    }
  }
 }

  return (
    <section className="section-five">
      <div 
        
        className="section-five_inside">
        <motion.div 
          initial={"offscreen"}
          whileInView={'onscreen'}
          viewport={{once:true,amount: 0.2}}
          transition={{staggerChildren:0.2}} 
          id="contacts" className="section-five_inside-block">
          <motion.h3 variants={primaryAnimation}>{t("move")}</motion.h3>
          <motion.h2 variants={primaryAnimation}>{t("allow")}</motion.h2>
          <motion.div
            initial={"hidden"}
            whileInView={'visible'}
            viewport={{once:true,amount: 0.2}}
            transition={{staggerChildren:0.2}} 
            className="section-five_inside-contacts">
            <motion.div variants={secondaryAnimation} className="section-five_inside-contacts-left">
              <p><a href="mailto:office@its-tech.org">office@its-tech.org</a></p>
              <a href="tel:+996 312 973777">+996 312 973777</a>
              <span>{t("address")}</span>
            </motion.div>
            <motion.div variants={secondaryAnimation} className="section-five_inside-contacts-center">
              <span>{t("send")}</span>
            </motion.div>
            <motion.div variants={secondaryAnimation} className="section-five_inside-contacts-right">
              <span>{t("present")}</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
