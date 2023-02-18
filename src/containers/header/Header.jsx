import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
const Header = () => {
  return (
    <div className="gpt__header section__padding" id="home">
      <div className="gpt__header-content">
        <h1 className="gradient__text">
          GPT-Ai Is Transforming The World.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          facere dolorem inventore corporis delectus eligendi iusto repellendus
          est quibusdam repudiandae id in ab, aliquid repellat quod! Accusamus
          obcaecati non asperiores!
        </p>
        <div className="gpt__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
        <div className="gpt__header-image">
          <img src={ai} alt="Ai" />
        </div>
    </div>
  );
};

export default Header;
