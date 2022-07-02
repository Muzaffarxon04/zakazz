import Content from "../../Localization/Content";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import Sidebar from "../../Components/sidebar/sidebar";
import Card from "./card";



const arrov = ">";

const About = () => {
  const {
    count: { lang },
  } = useSelector((state) => state);

  const { header: h } = Content[lang];
  const { add__info: a } = Content[lang];

  return (
    <>
      <section className="about">
        <div className="container">
          <div className="navigatsiya">
            <Link href={"/"}>
              <a className="contact__link">{h.home}</a>
            </Link>
            {arrov}
            {/* <Link href={"/about"}> */}
              <a className="contact__link">{h.about}</a>
            {/* </Link> */}
            {arrov}
             {/* <Link href={"/about"}> */}
             <a className="contact__link">{h.sub_list_one.finance}</a>
            {/* </Link> */}
            {arrov}
            <Link href={"/faq"}>
              <a className="contact__link">{h.sub_list_one.audit}</a>
            </Link>
          </div>
          <div className="about-wrapper">
            <Sidebar />
            <div className="about-box">
              <h1 className="about__title">{h.sub_list_one.audit}</h1>
             <ul>
                   <Card title="Отчёт о финансовых результатах 
за 1 квартал 2022 года" size="Размер: 16.19 KB"/>
                      </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
