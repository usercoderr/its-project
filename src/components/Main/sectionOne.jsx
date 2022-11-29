import React from 'react'
import sectionOne from '../../assets/sectionOne.svg'
import './styles/sectionOne.css'

export default function SectionOne() {
  return (
    
        <section className="section-one">
        <div className="section-one_inside">
<div className="section-one_inside-left">
    <span>
    Разработка, внедрение и техническое сопровождение
    </span>
    <h1>Цифровые технологии и
IT-решения</h1>
</div>
<div className="section-one_inside-right">
    <img src={sectionOne} alt="" />
</div>
        </div>
        </section>

  )
}
