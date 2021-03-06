import Content from "../../Localization/Content";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import Sidebar from "../../Components/sidebar/sidebar-second";
import Card from "./job-card";

import logo from "../../Assets/images/ucell-logo.png";



const arrov = ">";

const About = () => {
  const {
    count: { lang },
  } = useSelector((state) => state);

  const { header: h } = Content[lang];
  const { add__info: a } = Content[lang];

  return (
    <>
      <section className="jobs">
        <div className="container">
          <div className="navigatsiya">
            <Link href={"/"}>
              <a className="contact__link">{h.home}</a>
            </Link>
            {arrov}
            {/* <Link href={"/about"}> */}
              <a className="contact__link">{h.active}</a>
            {/* </Link> */}
            {arrov}
            <Link href={"/jobs"}>
              <a className="contact__link">{h.sub_list_two.jobs}</a>
            </Link>
          </div>
          <div className="about-wrapper">
            <Sidebar />
            <div className="about-box">
              <h1 className="jobs-big__title">{h.sub_list_two.jobs}</h1>
            

<ul className="jobs__list">
<Card job={"Инженер-геолог"} status={"full time"} money={"2 000 000 - 4 000 000"} working={"3 года опыта"} adress={"Ташкент, Юнусабадский район"} time={"2 дня назад"}/>
<Card job={"Инженер-геолог"} status={"part time"} money={"2 000 000 - 4 000 000"} working={"3 года опыта"} adress={"Ташкент, Юнусабадский район"}  time={"2 дня назад"}/>
</ul>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
