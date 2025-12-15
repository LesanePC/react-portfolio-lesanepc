import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section id="about" className="about">
      <div className="about__inner">
        <div className="about__content">
          <h2 className="about__title">Обо мне</h2>
          <p className="about__text">
            Фронтенд‑разработчик, занимаюсь адаптивной версткой и созданием
            интерфейсов на React. Делаю сайты под реальные задачи бизнеса и
            учебные проекты для портфолио.
          </p>
          <p className="about__text">
            В моих работах — многостраничные сайты для риэлторской и
            строительной компаний, киносайт с бронированием билетов,
            интерактивные тесты, калькуляторы и todo‑лист.
          </p>

          <ul className="about__stack">
            <li>HTML5, CSS3, адаптивная верстка</li>
            <li>JavaScript (ES6+), работа с DOM</li>
            <li>React, компоненты, состояние</li>
            <li>Работа с API, JSON, fetch</li>
            <li>Git, GitHub, Vercel</li>
          </ul>
        </div>

        <div className="about__photo-wrap">
          <img
            src="/images/Fokin.webp"
            alt="Eugene, frontend developer"
            className="about__photo"
          />
        </div>
      </div>
    </section>
  );
}


export default AboutMe;