import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import sectionOne from "../../assets/sectionOne.svg";
import "./styles/sectionOne.css";

export default function SectionOne() {
  const spanVariants = {
    hidden:{
      x: -1000,
      opacity: 0,
    },
    visible:{
      x: 100,
      x: 0,
      opacity:1,
    },
  }
  const headingVariants ={
    hidden:{
      x: -500,
      opacity: 0,
    },
    visible:{
      x: 0,
      opacity:1,
    },
  }
  const linkVariants = {
    hidden:{
      opacity:0
    },
    visible:{
      opacity:1
    }

  }
  const blockVariants = {
    hidden:{
      x:1000,
      opacity:0
    },
    visible:{
      x:0,
      opacity:1
    },
  }

  const {t} = useTranslation()
  return (
    <section className="section-one">
      <div className="section-one_inside">
        <div className="section-one_inside-left">
          <motion.span
            initial={'hidden'}
            animate={'visible'}
            transition={{
              delay:1,
              duration:1.5,
            }}
            variants={spanVariants}
          >
            {t("development")}
          </motion.span>
          <motion.h1
            initial={'hidden'}
            animate={'visible'}
            transition={{
              delay:1,
              duration:1.5,
          }}
          variants={headingVariants}

          >
            {t("digital")}</motion.h1>
          <motion.div 
            className="section-one_button"
            initial={'hidden'}
            animate={'visible'}
            transition={{
              delay:0.5,
              duration:2
            }}
            variants={linkVariants}
            whileHover={{
              x:75,
              duration:0.5,
              scale:1.2,
            }}
          >
            <span>
              {t("send")}
            </span>
            <div className="border-line-button"></div>
          </motion.div>
        </div>
        <motion.div 
          className="section-one_inside-right"
          initial={'hidden'}
          animate={'visible'}
          transition={{
            delay:1,
            duration:1.5,
          }}
          variants={blockVariants}
        >
          <img src={sectionOne} alt="" />
        </motion.div>
      </div>
    </section>
  );
}
