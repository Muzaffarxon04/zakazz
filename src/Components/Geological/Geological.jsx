import Content from "../../Localization/Content";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import Sidebar from "../sidebar/sidebar";


import img1 from "../../Assets/images/geological2.png";
import img2 from "../../Assets/images/geological1.png";

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
              <a className="contact__link">{h.sub_list_one.structures}</a>
            {/* </Link> */}
            {arrov}
            {/* <Link href={"/about"}> */}
              <a className="contact__link">{h.sub_list_one.aparat}</a>
            {/* </Link> */}
            {arrov}
            <Link href={"/geological"}>
              <a className="contact__link">{h.sub_list_one.geology}</a>
            </Link>
          </div>
          <div className="about-wrapper">
            <Sidebar />
            <div className="about-box">
              <h1 className="about__title">{h.sub_list_one.geology}</h1>
              <p className="about__text">
               {a.youth_policy.text1}
              </p>
              <br />
              <p className="about__text">
              {a.youth_policy.text2}
              </p>
              <br />
              <p className="about__text">
              {a.youth_policy.text3}
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
             
              </div>
            </div>
        
        
          </div>
          
        </div>
      </section>
    </>
  );
};

export default About;
