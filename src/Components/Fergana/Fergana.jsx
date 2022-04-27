import Content from "../../Localization/Content";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import Sidebar from "../sidebarbranchs/sidebarBranchs";


import img1 from "../../Assets/images/fergena-photo-1.png";
import img2 from "../../Assets/images/fergena-photo-2.png";
import img3 from "../../Assets/images/fergena-photo-3.png";
import img4 from "../../Assets/images/fergena-photo-4.png";



const arrov = ">";

const About = () => {
  const {
    count: { lang },
  } = useSelector((state) => state);

  const { header: h } = Content[lang];
  const { branchs: a } = Content[lang];

  let cc
 
   if (h.footer.bostonlik.split(" ")[0] !== "Бостанлыкская" ) {
    cc = " SS"
   }else{
     cc = " CC"
   }

  return (
    <>
      <section className="about">
        <div className="container">
          <div className="navigatsiya">
            <Link href={"/"}>
              <a className="contact__link">{h.home}</a>
            </Link>
            {arrov}
            <Link href={"/department"}>
              <a className="contact__link">{h.sub_list_one.department}</a>
            </Link>
            {arrov}
            <Link href={"/department/andijan"}>
              <a className="contact__link">{h.footer.fergana.split(" ")[0] + cc}</a>
            </Link>
          </div>
          <div className="about-wrapper">
            <Sidebar />
            <div className="about-box">
              <h1 className="servise__title">{h.footer.fergana}</h1>
              <p className="about__text">
               {a.fergena.about__text1}
              </p>
              <br />
              <p className="about__text">
              {a.fergena.about__text2}
              </p>
              <br />
              <p className="about__text">
              {a.fergena.about__text3}
              </p>
  
              <br />
              <p className="about__text">
              {a.angren.about__text6}
              </p>
              <p className="about__text">
              {a.fergena.about__text4}
              </p>
              <p className="about__text">
              {a.fergena.about__text5}
              </p>
              <p className="about__text">
              {a.fergena.about__text6}
              </p>
              <div className="about__img-wrapper">
                <span>
                  <Image
                    src={img1}
                    alt=""
                    width={455}
                    height={300}
                    className="images"
                  />
                </span>
                <span>
                  <Image
                    src={img3}
                    alt=""
                    width={455}
                    height={300}
                    className="images"
                  />
                </span>
                <span>
                  <Image
                    src={img4}
                    alt=""
                    width={455}
                    height={300}
                    className="images"
                  />
                </span>
                <span>
                  <Image
                    src={img2}
                    alt=""
                    width={455}
                    height={300}
                    className="images"
                  />
                </span>
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
