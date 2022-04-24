import Content from "../../Localization/Content";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";



const arrov = ">";

const About = () => {
  const {
    count: { lang },
  } = useSelector((state) => state);

  const { header: h } = Content[lang];
  const { add__info: a } = Content[lang];

  let cc
 
   if (h.footer.bostonlik.split(" ")[0] !== "Бостанлыкская" ) {
    cc = " SS"
   }else{
     cc = " CC"
   }

  return (
    <>
      <section className="servise">
        <div className="container">
          <div className="navigatsiya">
            <Link href={"/"}>
              <a className="contact__link">{h.home}</a>
            </Link>
            {arrov}
            <Link href={"/department"}>
              <a className="contact__link">{h.service}</a>
            </Link>
          </div>
          <div className="servise-wrapper">
     
            <div className="servise-box">
              <h1 className="servise__title">{h.footer.angren}</h1>
              <p className="about__text">
               {a.about.about__text1}
              </p>
              <br />
              <p className="about__text">
              {a.about.about__text2}
              </p>
              <br />
              <p className="about__text">
              {a.about.about__text3}
              </p>
              <br />
              <h2 className="about__subtitle">{a.about.about__text4}</h2>
              <p className="about__text">
              {a.about.about__text5}
              </p>
              <br />
              <p className="about__text">
              {a.about.about__text6}
              </p>
              <br />
              <p className="about__text">
              {a.about.about__text7}
              </p>
              <br />
              <p className="about__text">
              {a.about.about__text8}
              </p>
              <br />
              <p className="about__text">
              {a.about.about__text9}
              </p>
              <br />
              <p className="about__text">
              {a.about.about__text10}
              </p>
              <p className="about__text">
              {a.about.about__text11}
              </p>
              <br />
              <h2 className="about__subtitle">{a.about.about__text12}</h2>
              <p className="about__text">
              {a.about.about__text13}
              </p>
              <br />
              <p className="about__text">
              {a.about.about__text14}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
