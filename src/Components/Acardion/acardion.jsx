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
      <li className="management__item">
                <div className="management__content">
                  <span className="management__image">
                    <Image
                      src={props.img}
                      alt="management photo"
                      width={198}
                      height={252}
                    />
                  </span>
                  <div className="management__first-block">
                    <h2 className="first-block__title">
                    {props.rank}
                    </h2>
                    <h3 className="first-block__subtitle">
                    {props.name}
                    </h3>
                    <p className="first-block__phone">
                      {m.phone}
                      <a href={`tel:${props.phone}`}>{props.phone}</a>
                    </p>
                    <p className="first-block__phone">
                    {m.fax}
                    <a href={`tel:${props.fax}`}>{props.fax}</a>
                    </p>
                    <p className="first-block__phone">
                    {m.email}
                      <a href={`mailto:${props.email}`} className="first-block__email-link">{props.email}</a>
                    </p>
                    <p className="first-block__phone">
                    {m.reception_days} {props.day}
                    </p>
                    <button className={`management-btn ${active ? "arrov-more" : ""}`}  onClick={toggleAccordion}>{m.more}</button>
                  </div>
                </div>
                <div className={`management__second-block ${active ? "block" : "none"}`}  >
                    <p className="management__second-block__description">
                    {props.text}
                    </p>
                    <h2 className="management__second-block__subtitle">
                    {/* {m.title} */}
                    </h2>
                    <p className="management__second-block__description">
                    {props.text2}
                    </p>
                    <p className="management__second-block__description">{props.text3}
                    </p>
                    <p className="management__second-block__description">{props.text4}
                    </p>
                    <p className="management__second-block__description">{props.text5}
                    </p>
                    <h2 className="management__second-block__subtitle">
                    {/* {m.title2} */}
                    </h2>
                    <p className="management__second-block__description">{props.text6}
                    </p>
                    <p className="management__second-block__description">{props.text6}
                    </p>
                    <p className="management__second-block__description">{props.text8}
                    </p>
                    <div className="management__second-block__description">{m.comunication_data} <br />
                    {m.phone}<a href={`tel:${props.phone}`}>{props.phone}</a> <br />
                    {m.fax}<a href={`tel:${props.fax}`}>{props.fax}</a><br/>
                    {m.email}   <a href={`mailto:${props.email}`} className="first-block__email-link">{props.email},</a>  <a href={`mailto:${props.email2}`} className="first-block__email-link">{props.email2}</a>
                    </div>
                  </div>
</li>
  );
}

export default Accordion;
