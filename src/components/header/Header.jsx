import React from "react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.svg";
import { motion } from "framer-motion";
import Lang from "../../features/Lang";
import { type } from "@testing-library/user-event/dist/type";

export default function Header() {
  const { t } = useTranslation();
  const logoVariants = {
    hidden: {
      x: -500,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <header>
      <div className="header">
        <motion.a
          initial="hidden"
          animate="visible"
          transition={{
            delay: 0.1,
            duration: 2,
            type: "spring",
          }}
          variants={logoVariants}
          href="#"
        >
          {/* width="104" height="93"  */}
          <img src={logo} alt="" />
        </motion.a>
        <ul>
          <a href="#">
            <li>{t("main")}</li>
          </a>
          <a href="#about_us">
            <li>{t("about_us")}</li>
          </a>
          <a href="#portfolio">
            <li>{t("portfolio")}</li>
          </a>
          <a href="#contacts">
            <li>{t("contacts")}</li>
          </a>
        </ul>
        <Lang />
      </div>
    </header>
  );
}
