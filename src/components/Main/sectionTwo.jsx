import React from "react";
import first from "../../assets/first.svg";
import second from "../../assets/second.svg";
import third from "../../assets/third.svg";
import "./styles/sectionTwo.css";

export default function SectionTwo() {
  return (
    <section className="section-two">
      <div id="about_us" className="section-two_inside">
        <div className="section-two_inside-block">
          <h3>теперь о бизнесе</h3>
          <h2>Наши проекты решают ряд бизнес-задач</h2>
          <div className="section-two_inside-images">
            <div className="section-two_inside-images-left">
              <img src={first} alt="" />
              <p>Презентация продукта/услуги/компании на WOW-уровне</p>
            </div>
            <div className="section-two_inside-images-center">
              <img src={second} alt="" />
              <p>
                Поддержка имиджа, позиционирование бренда и отстройка от
                конкурентов
              </p>
            </div>
            <div className="section-two_inside-images-right">
              <img src={third} alt="" />
              <p>Повышение продаж за счет увеличения конверсии</p>
            </div>
          </div>
          <h3>СОЗДАНИЕ САЙТОВ</h3>
          <p className="itc-p">
            Мы в ITC не можем сказать, что в создании сайтов нет нюансов. Каждый
            клиент по-своему смотрит на рынок и с таким же подходом пытается
            создавать свой продукт. Порой это может быть совершенно уникальный
            продукт и в таких случаях обычного сайта будет достаточно. Но как
            показывает практика — в каждом проекте нужно искать изюминку,
            которая и должна стать самым интересным местом в разработке сайтов.
          </p>
          <h3>МЫ ФАНАТЫ разработки</h3>
          <h5 >
            Мы ищем не клиентов, а храбрецов, готовых создать лучший продукт
          </h5>
          <p>
            ... и оставить конкурентов где-то позади. Находим инсайты и
            «хотелки» потребителей. Создаем уникальную ценность вашего бизнеса в
            глазах клиента. Задаем высшую планку стандартов, доводя каждый
            элемент до состояния «perfect» .
          </p>
        </div>
      </div>
    </section>
  );
}
