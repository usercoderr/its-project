import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { logos } from "../../data/logos";
import "./styles/sectionFour.css";

export default function SectionFour() {
  const {t} = useTranslation()
  const sliderVariants = {
    animate:{
      x: [-190, -1035],
      transition:{
        x:{
          repeat:Infinity,
          repeatType:"mirror",
          duration:20,
          ease:"linear",
          
        },
      },
    },
  };

  return (
    <section className="section-four">
      <div className="section-four_inside">
        <div className="section-four_inside-block">
          <h3>{t("clients")}</h3>
          <motion.div 
              className="section-four_inside-block-map"
              variants={sliderVariants}
              animate="animate"
            >
            {logos.map((company) => (
              <div className="section-box" key={company.id}><img src={company.img} alt="" /></div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
