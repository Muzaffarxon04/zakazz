import Content from "../../Localization/Content";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import Sidebar from "../../Components/sidebar/sidebar-second";
import Acardion from "../../Components/Acardion/faq-acardion";

import img1 from "../../Assets/images/aboutPhoto-1.png";
import img2 from "../../Assets/images/aboutPhoto-2.png";
import img3 from "../../Assets/images/aboutPhoto-3.png";
import img4 from "../../Assets/images/aboutPhoto-4.png";
import img5 from "../../Assets/images/aboutPhoto-5.png";
import img6 from "../../Assets/images/aboutPhoto-6.png";


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
              <a className="contact__link">{h.active}</a>
            {/* </Link> */}
            {arrov}
            <Link href={"/faq"}>
              <a className="contact__link">{h.sub_list_two.faq}</a>
            </Link>
          </div>
          <div className="about-wrapper">
            <Sidebar />
            <div className="about-box">
              <h1 className="about__title">{h.sub_list_two.faq}</h1>
             <ul>
             <Acardion title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has." subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"/>
              <Acardion title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has." subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"/>
              <Acardion title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has." subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"/>

             </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
