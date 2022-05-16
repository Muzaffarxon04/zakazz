import Content from "../../Localization/Content";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import Sidebar from "../../Components/sidebar/sidebar";
import { useState } from "react";
import img1 from "../../Assets/images/chief.jpg";
import img2 from "../../Assets/images/deputy.jpg";
import img3 from "../../Assets/images/accountant.png";
import img4 from "../../Assets/images/Geology-chief.png";
import img5 from "../../Assets/images/chief-finance.png";
import img6 from "../../Assets/images/Chief-Staff.png";
import img7 from "../../Assets/images/chief-technicalsecurity.png";
import img8 from "../../Assets/images/chief-International.png";



const arrov = ">";

const About = () => {

  const [modal, setModal] = useState(false);

  const {
    count: { lang },
  } = useSelector((state) => state);

  const { header: h } = Content[lang];
  const { management: m } = Content[lang];

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
              <li className="management__item">
                <div className="management__content">
                  <span className="management__image">
                    <Image
                      src={img3}
                      alt="management photo"
                      width={198}
                      height={252}
                    />
                  </span>
                  <div className="management__first-block">
                    <h2 className="first-block__title">
                      {m.card3.rank}
                    </h2>
                    <h3 className="first-block__subtitle">
                      {m.card3.name}
                    </h3>
                    <p className="first-block__phone">
                      {m.phone}
                      <a href={`tel:${m.card3.phone}`}>{m.card3.phone}</a>
                    </p>
                    <p className="first-block__phone">
                    {m.fax}
                    <a href={`tel:${m.card3.phone}`}>{m.card3.phone}</a>
                    </p>
                    <p className="first-block__phone">
                    {m.email}
                      <a href={`mailto:${m.card3.email}`} className="first-block__email-link">{m.card3.email}</a>
                    </p>
                    <p className="first-block__phone">
                    {m.reception_days}{m.card3.open_days}
                    </p>
                    <button className="management-btn" onClick={() => setModal(!modal)}>{m.more}</button>
                  </div>
                
                </div>
                <dialog open={modal} className="modals">
                <div className="management__second-block">
                    <p className="management__second-block__description">
                    {m.card3.data}
                    </p>
                    <h2 className="management__second-block__subtitle">
                    {m.title}
                    </h2>
                    <p className="management__second-block__description">
                    {m.card3.data2}
                    </p>
                    <p className="management__second-block__description">{m.card3.data3}
                    </p>
                    <h2 className="management__second-block__subtitle">
                    {m.title2}
                    </h2>
                    <p className="management__second-block__description">{m.card3.data4}
                    </p>
                    <div className="management__second-block__description">{m.comunication_data} <br />
                    {m.phone}<a href={`tel:${m.card3.phone}`}>{m.card3.phone}</a> <br />
                    {m.fax}<a href={`tel:${m.card3.phone}`}>{m.card3.phone}</a><br/>
                    {m.email}   <a href={`mailto:${m.card3.email}`} className="first-block__email-link">{m.card3.email},</a>  <a href={`mailto:${m.card3.email2}`} className="first-block__email-link">{m.card3.email2}</a>
                    </div>
                  </div>
      </dialog>

              </li>
              <li className="management__item">
                <div className="management__content">
                  <span className="management__image">
                    <Image
                      src={img4}
                      alt="management photo"
                      width={198}
                      height={252}
                    />
                  </span>
                  <div className="management__first-block">
                    <h2 className="first-block__title">
                      {m.card4.rank}
                    </h2>
                    <h3 className="first-block__subtitle">
                      {m.card4.name}
                    </h3>
                    <p className="first-block__phone">
                      {m.phone}
                      <a href={`tel:${m.card4.phone}`}>{m.card4.phone}</a>
                    </p>
                    <p className="first-block__phone">
                    {m.fax}
                    <a href={`tel:${m.card4.phone}`}>{m.card4.phone}</a>
                    </p>
                    <p className="first-block__phone">
                    {m.email}
                      <a href={`mailto:${m.card4.email}`} className="first-block__email-link">{m.card4.email}</a>
                    </p>
                    <p className="first-block__phone">
                    {m.reception_days}{m.card4.open_days}
                    </p>
                    <button className="management-btn" onClick={() => setModal(!modal)}>{m.more}</button>
                  </div>
                
                </div>
                <dialog open={modal} className="modals">
                <div className="management__second-block">
                    <p className="management__second-block__description">
                    {m.card4.data}
                    </p>
                    <h2 className="management__second-block__subtitle">
                    {m.title}
                    </h2>
                    <p className="management__second-block__description">
                    {m.card4.data2}
                    </p>
                    <p className="management__second-block__description">{m.card4.data3}
                    </p>
                    <h2 className="management__second-block__subtitle">
                    {m.title2}
                    </h2>
                    <p className="management__second-block__description">{m.card4.data4}
                    </p>
                    <div className="management__second-block__description">{m.comunication_data} <br />
                    {m.phone}<a href={`tel:${m.card4.phone}`}>{m.card4.phone}</a> <br />
                    {m.fax}<a href={`tel:${m.card4.phone}`}>{m.card4.phone}</a><br/>
                    {m.email}   <a href={`mailto:${m.card4.email}`} className="first-block__email-link">{m.card4.email},</a>  <a href={`mailto:${m.card4.email2}`} className="first-block__email-link">{m.card4.email2}</a>
                    </div>
                  </div>
      </dialog>

              </li>
              <li className="management__item">
                <div className="management__content">
                  <span className="management__image">
                    <Image
                      src={img5}
                      alt="management photo"
                      width={198}
                      height={252}
                    />
                  </span>
                  <div className="management__first-block">
                    <h2 className="first-block__title">
                      {m.card5.rank}
                    </h2>
                    <h3 className="first-block__subtitle">
                      {m.card5.name}
                    </h3>
                    <p className="first-block__phone">
                      {m.phone}
                      <a href={`tel:${m.card5.phone}`}>{m.card5.phone}</a>
                    </p>
                    <p className="first-block__phone">
                    {m.fax}
                    <a href={`tel:${m.card5.phone}`}>{m.card5.phone}</a>
                    </p>
                    <p className="first-block__phone">
                    {m.email}
                      <a href={`mailto:${m.card5.email}`} className="first-block__email-link">{m.card5.email}</a>
                    </p>
                    <p className="first-block__phone">
                    {m.reception_days}{m.card5.open_days}
                    </p>
                    <button className="management-btn" onClick={() => setModal(!modal)}>{m.more}</button>
                  </div>
                
                </div>
                <dialog open={modal} className="modals">
                <div className="management__second-block">
                    <p className="management__second-block__description">
                    {m.card5.data}
                    </p>
                    <h2 className="management__second-block__subtitle">
                    {m.title}
                    </h2>
                    <p className="management__second-block__description">
                    {m.card5.data2}
                    </p>
                    <p className="management__second-block__description">{m.card5.data3}
                    </p>
                    <h2 className="management__second-block__subtitle">
                    {m.title2}
                    </h2>
                    <p className="management__second-block__description">{m.card5.data4}
                    </p>
                    <div className="management__second-block__description">{m.comunication_data} <br />
                    {m.phone}<a href={`tel:${m.card5.phone}`}>{m.card5.phone}</a> <br />
                    {m.fax}<a href={`tel:${m.card5.phone}`}>{m.card5.phone}</a><br/>
                    {m.email}   <a href={`mailto:${m.card5.email}`} className="first-block__email-link">{m.card5.email},</a>  <a href={`mailto:${m.card5.email2}`} className="first-block__email-link">{m.card5.email2}</a>
                    </div>
                  </div>
      </dialog>

              </li>
              <li className="management__item">
                <div className="management__content">
                  <span className="management__image">
                    <Image
                      src={img6}
                      alt="management photo"
                      width={198}
                      height={252}
                    />
                  </span>
                  <div className="management__first-block">
                    <h2 className="first-block__title">
                      {m.card6.rank}
                    </h2>
                    <h3 className="first-block__subtitle">
                      {m.card6.name}
                    </h3>
                    <p className="first-block__phone">
                      {m.phone}
                      <a href={`tel:${m.card6.phone}`}>{m.card6.phone}</a>
                    </p>
                    <p className="first-block__phone">
                    {m.fax}
                    <a href={`tel:${m.card6.phone}`}>{m.card6.phone}</a>
                    </p>
                    <p className="first-block__phone">
                    {m.email}
                      <a href={`mailto:${m.card6.email}`} className="first-block__email-link">{m.card6.email}</a>
                    </p>
                    <p className="first-block__phone">
                    {m.reception_days}{m.card6.open_days}
                    </p>
                    <button className="management-btn" onClick={() => setModal(!modal)}>{m.more}</button>
                  </div>
                
                </div>
                <dialog open={modal} className="modals">
                <div className="management__second-block">
                    <p className="management__second-block__description">
                    {m.card6.data}
                    </p>
                    <h2 className="management__second-block__subtitle">
                    {m.title}
                    </h2>
                    <p className="management__second-block__description">
                    {m.card6.data2}
                    </p>
                    <p className="management__second-block__description">{m.card6.data3}
                    </p>
                    <h2 className="management__second-block__subtitle">
                    {m.title2}
                    </h2>
                    <p className="management__second-block__description">{m.card6.data4}
                    </p>
                    <div className="management__second-block__description">{m.comunication_data} <br />
                    {m.phone}<a href={`tel:${m.card6.phone}`}>{m.card6.phone}</a> <br />
                    {m.fax}<a href={`tel:${m.card6.phone}`}>{m.card6.phone}</a><br/>
                    {m.email}   <a href={`mailto:${m.card2.email}`} className="first-block__email-link">{m.card6.email},</a>  <a href={`mailto:${m.card6.email2}`} className="first-block__email-link">{m.card6.email2}</a>
                    </div>
                  </div>
      </dialog>

              </li>
              <li className="management__item">
                <div className="management__content">
                  <span className="management__image">
                    <Image
                      src={img7}
                      alt="management photo"
                      width={198}
                      height={252}
                    />
                  </span>
                  <div className="management__first-block">
                    <h2 className="first-block__title">
                      {m.card7.rank}
                    </h2>
                    <h3 className="first-block__subtitle">
                      {m.card7.name}
                    </h3>
                    <p className="first-block__phone">
                      {m.phone}
                      <a href={`tel:${m.card7.phone}`}>{m.card7.phone}</a>
                    </p>
                    <p className="first-block__phone">
                    {m.fax}
                    <a href={`tel:${m.card7.phone}`}>{m.card7.phone}</a>
                    </p>
                    <p className="first-block__phone">
                    {m.email}
                      <a href={`mailto:${m.card7.email}`} className="first-block__email-link">{m.card7.email}</a>
                    </p>
                    <p className="first-block__phone">
                    {m.reception_days}{m.card7.open_days}
                    </p>
                    <button className="management-btn" onClick={() => setModal(!modal)}>{m.more}</button>
                  </div>
                
                </div>
                <dialog open={modal} className="modals">
                <div className="management__second-block">
                    <p className="management__second-block__description">
                    {m.card7.data}
                    </p>
                    <h2 className="management__second-block__subtitle">
                    {m.title}
                    </h2>
                    <p className="management__second-block__description">
                    {m.card7.data2}
                    </p>
                    <p className="management__second-block__description">{m.card7.data3}
                    </p>
                    <h2 className="management__second-block__subtitle">
                    {m.title2}
                    </h2>
                    <p className="management__second-block__description">{m.card7.data4}
                    </p>
                    <div className="management__second-block__description">{m.comunication_data} <br />
                    {m.phone}<a href={`tel:${m.card7.phone}`}>{m.card7.phone}</a> <br />
                    {m.fax}<a href={`tel:${m.card7.phone}`}>{m.card7.phone}</a><br/>
                    {m.email}   <a href={`mailto:${m.card7.email}`} className="first-block__email-link">{m.card7.email},</a>  <a href={`mailto:${m.card7.email2}`} className="first-block__email-link">{m.card7.email2}</a>
                    </div>
                  </div>
      </dialog>

              </li>
              <li className="management__item">
                <div className="management__content">
                  <span className="management__image">
                    <Image
                      src={img8}
                      alt="management photo"
                      width={198}
                      height={252}
                    />
                  </span>
                  <div className="management__first-block">
                    <h2 className="first-block__title">
                      {m.card8.rank}
                    </h2>
                    <h3 className="first-block__subtitle">
                      {m.card8.name}
                    </h3>
                    <p className="first-block__phone">
                      {m.phone}
                      <a href={`tel:${m.card8.phone}`}>{m.card8.phone}</a>
                    </p>
                    <p className="first-block__phone">
                    {m.fax}
                    <a href={`tel:${m.card8.phone}`}>{m.card8.phone}</a>
                    </p>
                    <p className="first-block__phone">
                    {m.email}
                      <a href={`mailto:${m.card8.email}`} className="first-block__email-link">{m.card8.email}</a>
                    </p>
                    <p className="first-block__phone">
                    {m.reception_days}{m.card8.open_days}
                    </p>
                    <button className="management-btn" onClick={() => setModal(!modal)}>{m.more}</button>
                  </div>
                
                </div>
                <dialog open={modal} className="modals">
                <div className="management__second-block">
                    <p className="management__second-block__description">
                    {m.card8.data}
                    </p>
                    <h2 className="management__second-block__subtitle">
                    {m.title}
                    </h2>
                    <p className="management__second-block__description">
                    {m.card8.data2}
                    </p>
                    <p className="management__second-block__description">{m.card8.data3}
                    </p>
                    <h2 className="management__second-block__subtitle">
                    {m.title2}
                    </h2>
                    <p className="management__second-block__description">{m.card8.data4}
                    </p>
                    <div className="management__second-block__description">{m.comunication_data} <br />
                    {m.phone}<a href={`tel:${m.card8.phone}`}>{m.card8.phone}</a> <br />
                    {m.fax}<a href={`tel:${m.card8.phone}`}>{m.card8.phone}</a><br/>
                    {m.email}   <a href={`mailto:${m.card8.email}`} className="first-block__email-link">{m.card8.email},</a>  <a href={`mailto:${m.card8.email2}`} className="first-block__email-link">{m.card8.email2}</a>
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
