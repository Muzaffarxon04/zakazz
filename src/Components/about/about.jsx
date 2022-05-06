import Content from "../../Localization/Content";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import Sidebar from "../../Components/sidebar/sidebar";

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
console.log(a.about__info);
  return (
    <>
      <section className="about">
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
            <Link href={"/about"}>
              <a className="contact__link">{h.about}</a>
            </Link>
          </div>
          <div className="about-wrapper">
            <Sidebar />
            <div className="about-box">
              <h1 className="about__title">{h.about}</h1>
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

              <div className="about__img-wrapper">
                <span>
                  <Image
                    src={img1}
                    alt="colectiv"
                    width={455}
                    height={300}
                    className="images"
                  />
                </span>
                <span>
                  <Image
                    src={img2}
                    alt="colectiv"
                    width={455}
                    height={300}
                    className="images"
                  />
                </span>
                <span>
                  <Image
                    src={img3}
                    alt="colectiv"
                    width={455}
                    height={300}
                    className="images"
                  />
                </span>
                <span>
                  <Image
                    src={img4}
                    alt="img"
                    width={455}
                    height={300}
                    className="images"
                  />
                </span>
                <span>
                  <Image
                    src={img5}
                    alt="img"
                    width={455}
                    height={300}
                    className="images"
                  />
                </span>
                <span>
                  <Image
                    src={img6}
                    alt="img"
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
