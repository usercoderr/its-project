import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import sectionOne from "../../assets/sectionOne.svg";
import "./styles/sectionOne.css";

export default function SectionOne() {
  const spanVariants = {
    hidden:{
      x: -100,
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
      x: -200,
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
      x:100,
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
              delay:0.1,
              duration:1,
            }}
            variants={spanVariants}
          >
            {t("development")}
          </motion.span>
          <motion.h1
            initial={'hidden'}
            animate={'visible'}
            transition={{
              delay:0.1,
              duration:1,
          }}
          variants={headingVariants}

          >
            {t("digital")}</motion.h1>
          <motion.div 
            className="section-one_button"
            initial={'hidden'}
            animate={'visible'}
            transition={{
              delay:0.1,
              duration:1,
            }}
            variants={linkVariants}
            whileHover={{
              x:75,
              rotateY:360,
            }}
          >
            <span>
              {t("send")}
            </span>
          </motion.div>
        </div>
        <motion.div 
          className="section-one_inside-right"
          initial={'hidden'}
          animate={'visible'}
          transition={{
            delay:0.1,
            duration:1,
          }}
          variants={blockVariants}
        >
          <img src={sectionOne} alt="" />
        </motion.div>
      </div>
    </section>
  );
}
