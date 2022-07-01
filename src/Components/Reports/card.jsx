import React, { useState } from "react";
import Image from "next/image";
import Content from "../../Localization/Content";
import { useSelector } from "react-redux";

import icon from "../../Assets/images/download.svg";
import pdf from "../../Assets/images/pdf.png";


function Card(props) {
  const [active, setActive] = useState(false);

  function toggleAccordion() {
    setActive(!active);
  }

  const {
    count: { lang },
  } = useSelector((state) => state);

  const { management: m } = Content[lang];





  return (
      <li className="folder__item" onClick={toggleAccordion}>
                <div className="folder__content">
               <div className="img-content">
               <Image alt="download" src={pdf} width={64} height={64}/>
                   <div>
                   <h2 className="folder__title">
                    {props.title}
                    </h2>
                    <span className="folder__size">{props.size}</span>
                   </div>
               </div>
               <a className="folder__btn" href="https://picsum.photos/200" download={true}><Image alt="download" src={icon} width={24} height={24}/></a>
                  </div>
             
</li>
  );
}

export default Card;
