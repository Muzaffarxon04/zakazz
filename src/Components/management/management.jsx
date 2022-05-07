import Content from "../../Localization/Content";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import Sidebar from "../../Components/sidebar/sidebar";
import { useState } from "react";
import img1 from "../../Assets/images/chief.jpg";
import img2 from "../../Assets/images/deputy.jpg";

const arrov = ">";

const About = () => {

  const [modal, setModal] = useState(false);

  const {
    count: { lang },
  } = useSelector((state) => state);

  const { header: h } = Content[lang];
  const { management: m } = Content[lang];
console.log(m);
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
              <li className="management__item">
                <div className="management__content">
                  <span className="management__image">
                    <Image
                      src={img1}
                      alt="management photo"
                      width={198}
                      height={252}
                    />
                  </span>
                  <div className="management__first-block">
                    <h2 className="first-block__title">
                      {m.card1.rank}
                    </h2>
                    <h3 className="first-block__subtitle">
                      {m.card1.name}
                    </h3>
                    <p className="first-block__phone">
                      {m.phone}
                      <a href={`tel:${m.card1.phone}`}>{m.card1.phone}</a>
                    </p>
                    <p className="first-block__phone">
                    {m.fax}
                    <a href={`tel:${m.card1.phone}`}>{m.card1.phone}</a>
                    </p>
                    <p className="first-block__phone">
                    {m.email}
                      <a href={`mailto:${m.card1.email}`} className="first-block__email-link">{m.card1.email}</a>
                    </p>
                    <p className="first-block__phone">
                    {m.reception_days}{m.card1.open_days}
                    </p>
                    <button className="management-btn" onClick={() => setModal(!modal)}>{m.more}</button>
                  </div>
                
                </div>
                <dialog open={modal} className="modals">
                <div className="management__second-block">
                    <p className="management__second-block__description">
                    {m.card1.data}
                    </p>
                    <h2 className="management__second-block__subtitle">
                    {m.title}
                    </h2>
                    <p className="management__second-block__description">
                    {m.card1.data2}
                    </p>
                    <p className="management__second-block__description">{m.card1.data3}
                    </p>
                    <p className="management__second-block__description">{m.card1.data4}
                    </p>
                    <p className="management__second-block__description">{m.card1.data5}
                    </p>
                    <h2 className="management__second-block__subtitle">
                    {m.title2}
                    </h2>
                    <p className="management__second-block__description">{m.card1.data6}
                    </p>
                    <p className="management__second-block__description">{m.card1.data7}
                    </p>
                    <p className="management__second-block__description">{m.card1.data8}
                    </p>
                    <div className="management__second-block__description">{m.comunication_data} <br />
                    {m.phone}<a href={`tel:${m.card1.phone}`}>{m.card1.phone}</a> <br />
                    {m.fax}<a href={`tel:${m.card1.phone}`}>{m.card1.phone}</a><br/>
                    {m.email}   <a href={`mailto:${m.card1.email}`} className="first-block__email-link">{m.card1.email},</a>  <a href={`mailto:${m.card1.email2}`} className="first-block__email-link">{m.card1.email2}</a>
                    </div>
                  </div>
      </dialog>

              </li>
              <li className="management__item">
                <div className="management__content">
                  <span className="management__image">
                    <Image
                      src={img2}
                      alt="management photo"
                      width={198}
                      height={252}
                    />
                  </span>
                  <div className="management__first-block">
                    <h2 className="first-block__title">
                      {m.card2.rank}
                    </h2>
                    <h3 className="first-block__subtitle">
                      {m.card2.name}
                    </h3>
                    <p className="first-block__phone">
                      {m.phone}
                      <a href={`tel:${m.card2.phone}`}>{m.card2.phone}</a>
                    </p>
                    <p className="first-block__phone">
                    {m.fax}
                    <a href={`tel:${m.card2.phone}`}>{m.card2.phone}</a>
                    </p>
                    <p className="first-block__phone">
                    {m.email}
                      <a href={`mailto:${m.card2.email}`} className="first-block__email-link">{m.card2.email}</a>
                    </p>
                    <p className="first-block__phone">
                    {m.reception_days}{m.card2.open_days}
                    </p>
                    <button className="management-btn" onClick={() => setModal(!modal)}>{m.more}</button>
                  </div>
                
                </div>
                <dialog open={modal} className="modals">
                <div className="management__second-block">
                    <p className="management__second-block__description">
                    {m.card2.data}
                    </p>
                    <h2 className="management__second-block__subtitle">
                    {m.title}
                    </h2>
                    <p className="management__second-block__description">
                    {m.card2.data2}
                    </p>
                    <p className="management__second-block__description">{m.card2.data3}
                    </p>
                    <h2 className="management__second-block__subtitle">
                    {m.title2}
                    </h2>
                    <p className="management__second-block__description">{m.card2.data4}
                    </p>
                    <div className="management__second-block__description">{m.comunication_data} <br />
                    {m.phone}<a href={`tel:${m.card2.phone}`}>{m.card2.phone}</a> <br />
                    {m.fax}<a href={`tel:${m.card2.phone}`}>{m.card2.phone}</a><br/>
                    {m.email}   <a href={`mailto:${m.card2.email}`} className="first-block__email-link">{m.card2.email},</a>  <a href={`mailto:${m.card2.email2}`} className="first-block__email-link">{m.card2.email2}</a>
                    </div>
                  </div>
      </dialog>

              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
