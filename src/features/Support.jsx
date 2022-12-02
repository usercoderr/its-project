import React, { useState } from "react";
import { RiTelegramLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import message from "../assets/message.svg";
import "./support.css";

export default function Support() {
  const [isOpen, setOpen] = useState();
  const handleClickModal = () => {
    setOpen(!isOpen)
  }
  return (
    <>
      <div onClick={handleClickModal} className="support">
        <div className="support-inside">
          <img src={message} alt="" />
        </div>
      </div>
      {
        isOpen && <div className="modal">
          <div className="modal-inside">
            <h3>Напишите нам</h3>
            <div className="modal-icons">
              <div className="icons">
                <RiTelegramLine color="#0088cc" fontSize='50px' />
                <p>Telegram</p>
              </div>
              <div className="icons">
                <BsWhatsapp color="#075E54" fontSize='44px' style={{ margin: '3px' }} />
                <p>What's App</p>
              </div>
              <div className="icons" fontSize='50px'>
                <GrMail fontSize='50px' />
                <p>Mail</p>
              </div>
              <div className="icons phone">
                <BsFillTelephoneFill fontSize='45px' />
                <p>Phone</p>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}
