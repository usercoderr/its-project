import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import logo from "../../assets/logo.svg";
import { motion } from "framer-motion";
import Lang from "../../features/Lang";
import { MenuToggle } from "./menuToggle";



const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 60px;
  right: 0;
  z-index: 11;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 16px;
  display: flex;

  margin-bottom: 10px;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

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

  const [isOpen, setOpen] = useState(false);



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
        <ul className="desctop">
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

        <div className="buger-menu__container">
          <NavLinksContainer>
            <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
            {isOpen && (
              <div className="burger-container">
                <LinksWrapper>
                  <LinkItem>
                    <Link onClick={() => setOpen(!isOpen)}>
                      <a href="#" onClick={() => setOpen(!isOpen)}>
                        <li>{t("main")}</li>
                      </a>
                    </Link>
                  </LinkItem>
                  <LinkItem>
                    <Link onClick={() => setOpen(!isOpen)}>
                      <a href="#about_us" onClick={() => setOpen(!isOpen)}>
                        <li>{t("about_us")}</li>
                      </a>
                    </Link>
                  </LinkItem>
                  <LinkItem>
                    <Link onClick={() => setOpen(!isOpen)}>
                      <a href="#portfolio" onClick={() => setOpen(!isOpen)}>
                        <li>{t("portfolio")}</li>
                      </a>
                    </Link>
                  </LinkItem>
                  <LinkItem>
                    <Link onClick={() => setOpen(!isOpen)}>
                      <a href="#contacts" onClick={() => setOpen(!isOpen)}>
                        <li>{t("contacts")}</li>
                      </a>
                    </Link>
                  </LinkItem>
                  <LinkItem>
                    <Link href="#" className="langChageBurger">
                      <Lang />
                    </Link>
                  </LinkItem>
                </LinksWrapper>
              </div>
            )}
          </NavLinksContainer>
        </div>

        <div className="langChang">
          <Lang />
        </div>
      </div>
    </header>
  );
}

