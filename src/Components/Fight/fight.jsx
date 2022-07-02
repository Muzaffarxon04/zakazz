import Content from "../../Localization/Content";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import Sidebar from "../../Components/sidebar/sidebar-second";




const arrov = ">";

const About = () => {
  const {
    count: { lang },
  } = useSelector((state) => state);

  const { header: h } = Content[lang];
  const { fight: a } = Content[lang];

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
              <a className="contact__link">{h.active }</a>
            {/* </Link> */}
            {arrov}
            <Link href={"/fightagainst"}>
              <a className="contact__link">{h.sub_list_two.fightagainstcorruption}</a>
            </Link>
          </div>
          <div className="about-wrapper">
            <Sidebar />
            <div className="about-box">
            <h1 className="servise__title">{a.title}</h1>
<h2 className="about__subtitle">{a.subtitle1}</h2>
              <p className="about__text">
               {a.text1}
              </p>
              <br />
              <p className="about__text">
              {a.text2}
              </p>
              <br />
              <h2 className="about__subtitle">{a.subtitle2}</h2>

              <p className="about__text">
              {a.text3}
              </p>
              <br/>
              <h2 className="about__subtitle">{a.subtitle3}</h2>
             
            </div>
        
        
          </div>
          
        </div>
      </section>
    </>
  );
};

export default About;
