import Content from "../../Localization/Content";
import Link from "next/link";
import { useSelector } from "react-redux";
import Sidebar from "../../Components/sidebar/sidebar";
import { useState } from "react";
import Accordion from "../Acardion/acardion";

import img1 from "../../Assets/images/chief.jpg";
import img2 from "../../Assets/images/deputy.jpg";
import img3 from "../../Assets/images/accountant.png";
import img4 from "../../Assets/images/Geology-chief.png";
import img5 from "../../Assets/images/chief-finance.png";
import img6 from "../../Assets/images/Chief-Staff.png";
import img7 from "../../Assets/images/chief-technicalsecurity.png";
import img8 from "../../Assets/images/chief-International.png";



const arrov = ">";

const About = () => {

  const [modal, setModal] = useState(false);

  const {
    count: { lang },
  } = useSelector((state) => state);

  const { header: h } = Content[lang];
  const { management: m } = Content[lang];

  return (
    <>
      <section className="management">
        <div className="container">
          <div className="navigatsiya">
            <Link href={"/"}>
              <a className="contact__link">{h.home}</a>
            </Link>
            {arrov}
            <Link href={"/about"}>
              <a className="contact__link">{h.about}</a>
            </Link>
            {arrov}
            <Link href={"/management"}>
              <a className="contact__link">{h.sub_list_one.management}</a>
            </Link>
          </div>
          <div className="management-wrapper">
            <Sidebar />
            <ul className="management__list">
<li>
<h1 className="management__title">{h.sub_list_one.management}</h1>

</li>      
<Accordion rank={m.card1.rank} name={m.card1.name} img={img1} phone={m.card1.phone} fax={m.card1.phone} email={m.card1.email} email2={m.card1.email2} day={m.card1.open_days} text={m.card1.data} text2={m.card1.data2} text3={m.card1.data3} text4={m.card1.data4} text5={m.card1.data5} text6={m.card1.data6} text7={m.card1.data77} text8={m.card1.data8}/>
        <Accordion rank={m.card2.rank} name={m.card2.name} img={img2} phone={m.card2.phone} fax={m.card2.phone} email={m.card2.email} email2={m.card2.email2} day={m.card2.open_days} text={m.card2.data} text2={m.card2.data2} text3={m.card2.data3} text4={m.card2.data4} text5={m.card2.data5} text6={m.card2.data6} text7={m.card2.data7}/>
        <Accordion rank={m.card3.rank} name={m.card3.name} img={img3} phone={m.card3.phone} fax={m.card3.phone} email={m.card3.email} email2={m.card3.email2} day={m.card3.open_days} text={m.card3.data} text2={m.card3.data2} text3={m.card3.data3} text4={m.card3.data4} text5={m.card3.data5} text6={m.card3.data6} text7={m.card3.data7}/>
        <Accordion rank={m.card4.rank} name={m.card4.name} img={img4} phone={m.card4.phone} fax={m.card4.phone} email={m.card4.email} email2={m.card4.email2} day={m.card4.open_days} text={m.card4.data} text2={m.card4.data2} text3={m.card4.data3} text4={m.card4.data4} text5={m.card4.data5} text6={m.card4.data6} text7={m.card4.data7}/>


            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
