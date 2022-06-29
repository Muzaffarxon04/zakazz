import React, { useState } from "react";
import Image from "next/image";


function Accordion(props) {

 



  return (


<li className="jobs__item">
<div className="jobs__title-wrapper">
<h3 className="jobs__title">{props.job}</h3>
<span className="jobs__badge">{props.status}</span>
</div>
<div className="jobs__info">
<p>{props.adress}</p>
<p>{props.working}</p>
<p>{props.money}</p>

</div>

<div className="jobs__title-wrapper">
<Image src={props.photo} alt="ucell logo"/>
<time>{props.time}</time>
</div>
    </li>

  );
}

export default Accordion;
