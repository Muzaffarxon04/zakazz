import React, { useState } from "react";
import Image from "next/image";
import Content from "../../Localization/Content";
import { useSelector } from "react-redux";


function Accordion(props) {
  const [active, setActive] = useState(false);

  function toggleAccordion() {
    setActive(!active);
  }

  const {
    count: { lang },
  } = useSelector((state) => state);

  const { management: m } = Content[lang];





  return (
      <li className="faq__item" onClick={toggleAccordion}>
                <div className="faq__content">
                  <div className="management__first-block" >
                    <h2 className="first-block__title">
                    {props.title}
                    </h2>
                    <span className={`faq-btn ${active ? "rotated" : ""}`}  onClick={toggleAccordion}></span>
                  </div>
                </div>
                <div className={`management__second-block ${active ? "block" : "none"}`}  >
                    <p className="management__second-block__description">
                    {props.subtitle}
                    </p>
                  </div>
</li>
  );
}

export default Accordion;
