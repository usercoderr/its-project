import React from "react";
import { motion } from "framer-motion";
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillTwitterSquare } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { AiFillBehanceSquare } from 'react-icons/ai'
import { FiInstagram } from 'react-icons/fi'
import logo from "../../assets/logo.svg";
import instagram from "../../assets/instagram.svg";



export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-inside">
          <div className="footer-logo">
            <motion.a
              whileHover={{
                scale: 1.2,
              }}
              href="#">
              <img src={logo} alt="" />
            </motion.a>
          </div>
          <div className="footer-links">
            <motion.a 
              whileHover={{
                rotateY:360,
                scale:1.3,
                transition:{
                  duration:1,
                },
              }}
              whileInView={{
                rotateY:0,
                scale:1,
                transition:{
                  duration:1
                },
              }}
              href="#">
              <img src={instagram} alt="instagram" />
            </motion.a>
            <motion.a 
              whileHover={{
                rotateZ:360,
                scale:1.3,
                transition:{
                  duration:0.5,
                },
              }}
              whileInView={{
                rotateZ:0,
                scale:1,
                transition:{
                  duration:0.5
                },
              }}
              href="#">
              <AiFillLinkedin color="#0A66C2" />
            </motion.a>
            <motion.a 
              whileHover={{
                rotateX:360,
                scale:1.3,
                transition:{
                  duration:0.5,
                },
              }}
              whileInView={{
                rotateX:0,
                scale:1,
                transition:{
                  duration:0.5
                },
              }}
              href="#">
              <AiFillTwitterSquare color="#00acee" />
            </motion.a>
            <motion.a 
              whileHover={{
                translateY:[0,-20,0,-20,0,-20,0,-20,0],
                transition:{
                  duration:2,
                  stiffness:120
                },
              }}
              whileInView={{
                translateY:0,
                transition:{
                  duration:1
                },
              }}
              href="#">
              <AiFillFacebook color="#0165E1" />
            </motion.a>
            <motion.a 
              whileHover={{
                rotateZ:[0,-50, 5,-50,5,-50,5,-50,0],
                transition:{
                  duration:2,
                  stiffness:120
                },
              }}
              whileInView={{
                rotateZ:0,
                transition:{
                  duration:0.1
                },
              }}
              href="#">
              <AiFillYoutube color="#FF0000" />
            </motion.a>
            <motion.a 
              whileHover={{
                translateX:[0,-20, 5,-20,5,-20,5,-20,0],
                transition:{
                  duration:2,
                  stiffness:120
                },
              }}
              whileInView={{
                translateX:0,
                transition:{
                  duration:0.1
                },
              }}
              href="#">
              <AiFillBehanceSquare color="#131418" />
            </motion.a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© ITS Technologies LLC - 2022</p>
      </div>
    </footer>
  );
}

