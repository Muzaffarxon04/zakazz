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
  const { add__info: a } = Content[lang];
  console.log(a.about__info);
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
                      O’zbekiston Respublikasi Xavfli geologik jarayonlarni
                      kuzaish Davalat xizmati (Davlat kuzatish xizmati)
                      boshlig’i
                    </h2>
                    <h3 className="first-block__subtitle">
                      Bimurzayev Gani Amirgaliyevich
                    </h3>
                    <p className="first-block__phone">
                      Telefon :
                      <a href="tel:+998712415470">(+99871) 241-54-70</a>
                    </p>
                    <p className="first-block__phone">
                    Faks :
                      <a href="tel:+998712415470">(+99871) 241-54-70</a>
                    </p>
                    <p className="first-block__phone">
                    Elektron pochta :
                      <a href="mailto:Priyomnayagss@gosslujba.uz" className="first-block__email-link">Priyomnayagss@gosslujba.uz</a>
                    </p>
                    <p className="first-block__phone">
                    Qabul kunlari :  Dushanba, chorshanba, Juma  09:00 – 12:00
                    </p>
                    <button className="management-btn" onClick={() => setModal(!modal)}>подробнее</button>
                  </div>
                
                </div>
                <dialog open={modal} className="modals">
                <div className="management__second-block">
                    <p className="management__second-block__description">
                    1982 yil 21 sentyabrda Bo’stonliq tumanida tug`ilgan. Мaʼlumoti: oliy (magistr) 2004 y. Abu Rayxon Beruniy nomli Toshkent Davlat Texnika Universiteti (bakalavr) 2006 y. Abu Rayxon Beruniy nomli Toshkent Davlat Texnika Universiteti (magistr) ni tamomlagan.
Geologiya – mineralogiya fanlari bo’yicha falsafa doktori.

                    </p>
                    <h2 className="management__second-block__subtitle">
                    Asosiy vazifalar:
                    </h2>
                    <p className="management__second-block__description">
                    1982 yil 21 sentyabrda Bo’stonliq tumanida tug`ilgan. Мaʼlumoti: oliy (magistr) 2004 y. Abu Rayxon Beruniy nomli Toshkent Davlat Texnika Universiteti (bakalavr) 2006 y. Abu Rayxon Beruniy nomli Toshkent Davlat Texnika Universiteti (magistr) ni tamomlagan.
Geologiya – mineralogiya fanlari bo’yicha falsafa doktori.

                    </p>
                    <p className="management__second-block__description">
                    1982 yil 21 sentyabrda Bo’stonliq tumanida tug`ilgan. Мaʼlumoti: oliy (magistr) 2004 y. Abu Rayxon Beruniy nomli Toshkent Davlat Texnika Universiteti (bakalavr) 2006 y. Abu Rayxon Beruniy nomli Toshkent Davlat Texnika Universiteti (magistr) ni tamomlagan.
Geologiya – mineralogiya fanlari bo’yicha falsafa doktori.

                    </p>
                    <p className="management__second-block__description">
                    1982 yil 21 sentyabrda Bo’stonliq tumanida tug`ilgan. Мaʼlumoti: oliy (magistr) 2004 y. Abu Rayxon Beruniy nomli Toshkent Davlat Texnika Universiteti (bakalavr) 2006 y. Abu Rayxon Beruniy nomli Toshkent Davlat Texnika Universiteti (magistr) ni tamomlagan.
Geologiya – mineralogiya fanlari bo’yicha falsafa doktori.

                    </p>
                
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
                      O’zbekiston Respublikasi Xavfli geologik jarayonlarni
                      kuzaish Davalat xizmati (Davlat kuzatish xizmati)
                      boshlig’i
                    </h2>
                    <h3 className="first-block__subtitle">
                      Bimurzayev Gani Amirgaliyevich
                    </h3>
                    <p className="first-block__phone">
                      Telefon :
                      <a href="tel:+998712415470">(+99871) 241-54-70</a>
                    </p>
                    <p className="first-block__phone">
                    Faks :
                      <a href="tel:+998712415470">(+99871) 241-54-70</a>
                    </p>
                    <p className="first-block__phone">
                    Elektron pochta :
                      <a href="mailto:Priyomnayagss@gosslujba.uz" className="first-block__email-link">Priyomnayagss@gosslujba.uz</a>
                    </p>
                    <p className="first-block__phone">
                    Qabul kunlari :  Dushanba, chorshanba, Juma  09:00 – 12:00
                    </p>
                    <button className="management-btn" onClick={() => setModal(!modal)}>подробнее</button>
                  </div>
                
                </div>
                <dialog open={modal} className="modals">
                <div className="management__second-block">
                    <p className="management__second-block__description">
                    1982 yil 21 sentyabrda Bo’stonliq tumanida tug`ilgan. Мaʼlumoti: oliy (magistr) 2004 y. Abu Rayxon Beruniy nomli Toshkent Davlat Texnika Universiteti (bakalavr) 2006 y. Abu Rayxon Beruniy nomli Toshkent Davlat Texnika Universiteti (magistr) ni tamomlagan.
Geologiya – mineralogiya fanlari bo’yicha falsafa doktori.

                    </p>
                    <h2 className="management__second-block__subtitle">
                    Asosiy vazifalar:
                    </h2>
                    <p className="management__second-block__description">
                    1982 yil 21 sentyabrda Bo’stonliq tumanida tug`ilgan. Мaʼlumoti: oliy (magistr) 2004 y. Abu Rayxon Beruniy nomli Toshkent Davlat Texnika Universiteti (bakalavr) 2006 y. Abu Rayxon Beruniy nomli Toshkent Davlat Texnika Universiteti (magistr) ni tamomlagan.
Geologiya – mineralogiya fanlari bo’yicha falsafa doktori.

                    </p>
                    <p className="management__second-block__description">
                    1982 yil 21 sentyabrda Bo’stonliq tumanida tug`ilgan. Мaʼlumoti: oliy (magistr) 2004 y. Abu Rayxon Beruniy nomli Toshkent Davlat Texnika Universiteti (bakalavr) 2006 y. Abu Rayxon Beruniy nomli Toshkent Davlat Texnika Universiteti (magistr) ni tamomlagan.
Geologiya – mineralogiya fanlari bo’yicha falsafa doktori.

                    </p>
                    <p className="management__second-block__description">
                    1982 yil 21 sentyabrda Bo’stonliq tumanida tug`ilgan. Мaʼlumoti: oliy (magistr) 2004 y. Abu Rayxon Beruniy nomli Toshkent Davlat Texnika Universiteti (bakalavr) 2006 y. Abu Rayxon Beruniy nomli Toshkent Davlat Texnika Universiteti (magistr) ni tamomlagan.
Geologiya – mineralogiya fanlari bo’yicha falsafa doktori.

                    </p>
                
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
