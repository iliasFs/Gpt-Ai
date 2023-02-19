import React from "react";
import gptLogo from "../../assets/logo.png";
import "./footer.css";

const Footer = () => (
  <div className="gpt__footer section__padding">
    <div className="gpt__footer-heading">
      <h1 className="gradient__text">
        Do you want to step in to the future before others
      </h1>
    </div>

    <div className="gpt__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt__footer-links">
      <div className="gpt__footer-links_logo">
        <img src={gptLogo} alt="gpt_logo" />
        <p>
          Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
        </p>
      </div>
      <div className="gpt__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt__footer-links_div">
        <h4>Get in touch</h4>
        <p>Chesterwoord K12 182 AI Almeida</p>
        <p>085-1452567</p>
        <p>info@GPT-Ai.net</p>
      </div>
    </div>

    <div className="gpt__footer-copyright">
      <p>@2021 GPT-Ai. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
