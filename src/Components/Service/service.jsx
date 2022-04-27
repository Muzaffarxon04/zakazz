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
  const { services: a } = Content[lang];

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
              <h1 className="servise__title">{a.about__text1}</h1>
              <h2 className="servise__subtitle">{a.about__text2}</h2>
              <p className="about__text">
              {a.about__text3}
              </p>
              <p className="about__text">
              {a.about__text4}
              </p>
              <p className="about__text">
              {a.about__text5}
              </p>
              <p className="about__text">
              {a.about__text6}
              </p>
              <br />
              <p className="about__text">
              {a.about__text7}
              </p>
              <p className="about__text">
              {a.about__text8}
              </p>
              <p className="about__text">
              {a.about__text9}
              </p>
              <br />
              <p className="about__text">
              {a.about__text10}
              </p>
              <p className="about__text">
              {a.about__text11}
              </p>
              <p className="about__text">
              {a.about__text12}
              </p>
              <p className="about__text">
              {a.about__text13}
              </p>
              <br />
              <p className="about__text">
              {a.about__text14}
              </p>
              <p className="about__text">
              {a.about__text15}
              </p>
              <br />
              <p className="about__text">
              {a.about__text16}
              </p>
              <p className="about__text">
              {a.about__text17}
              </p>
              <p className="about__text">
              {a.about__text18}
              </p>
              <p className="about__text">
              {a.about__text19}
              </p>
              <br />
              <h2 className="servise__subtitle">{a.about__text20}</h2>
              <p className="about__text">
              {a.about__text21}
              </p>
              <p className="about__text">
              {a.about__text22}
              </p>
              <p className="about__text">
              {a.about__text23}
              </p>
              <p className="about__text">
              {a.about__text24}
              </p>
              <br />
              <h2 className="servise__subtitle">{a.about__text25}</h2>

              <p className="about__text">
              {a.about__text26}
              </p>
              <p className="about__text">
              {a.about__text27}
              </p>
              <p className="about__text">
              {a.about__text28}
              </p>
              <p className="about__text">
              {a.about__text29}
              </p>
              <br />
              <p className="about__text">
              {a.about__text30}
              </p>
              <p className="about__text">
              {a.about__text31}
              </p>
              <p className="about__text">
              {a.about__text32}
              </p>
              <p className="about__text">
              {a.about__text33}
              </p>
              <br />
              <p className="about__text">
              {a.about__text34}
              </p>
              <p className="about__text">
              {a.about__text35}
              </p>
              <p className="about__text">
              {a.about__text36}
              </p>
              <br />
              <p className="about__text">
              {a.about__text37}
              </p>
              <p className="about__text">
              {a.about__text38}
              </p>
              <p className="about__text">
              {a.about__text39}
              </p>
              <p className="about__text">
              {a.about__text40}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
