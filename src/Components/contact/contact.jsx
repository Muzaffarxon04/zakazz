import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import Content from "../../Localization/Content";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function Contact() {
  const router = useRouter();

  const langValue = useRef();

  const dispatch = useDispatch();

  const {
    count: { lang },
  } = useSelector((state) => state);

  function getLang() {
    dispatch({ type: window.localStorage.getItem("lang") || "ru" });
  }

  langValue.current = getLang;

  useEffect(() => {
    langValue.current();
  }, []);

  const { header: h } = Content[lang];

  return (
    <>
      <section className="contact">
        <div className="container">
          <div className="navigatsiya">
            <Link href={"/"}>
              <a className="contact__link">{h.home}</a>
            </Link>
            {">"}
            <Link href={"/contact"}>
              <a className="contact__link">{h.contact}</a>
            </Link>
          </div>
          <h1 className="contact__title">{h.contact}</h1>

          <div className="address-box">
            <aside className="contact__aside">
              <h2 className="aside__title">{h.footer.address}</h2>
              <p className="aside__address__paragraph">
                {h.footer.address_title}
              </p>
              <h2 className="aside__title">Е-mail:</h2>
              <a
                href="mailto:gosslujbauz@inbox.uz"
                className="aside__address__paragraph-email"
              >
                gosslujbauz@inbox.uz;
              </a>
              <a
                href="mailto:gosslujbauz@inbox.uz"
                className="aside__address__paragraph-email"
              >
                gosslujbauz@inbox.uz;
              </a>
              <h2 className="aside__title">{h.footer.phone}</h2>
              <a href="tel:+998712415470" className="aside__address__paragraph">
                +99871 2415470
              </a>
              <h2 className="aside__title">{h.footer.faks}</h2>
              <a href="tel:+998712415470" className="aside__address__paragraph">
                +99871 2415470
              </a>

              <div className="contact__social">
                <ul className="contact__social__list">
                  <li className="contact__social__item footer__social__item">
                    <a
                      className="footer__social__link"
                      href="https://www.facebook.com/"
                    ></a>
                  </li>
                  <li className="contact__social__item footer__social__item">
                    <a
                      className="footer__social__link"
                      href="https://www.instagram.com/"
                    ></a>
                  </li>
                  <li className="contact__social__item footer__social__item">
                    <a
                      className="footer__social__link"
                      href="https://web.telegram.org/"
                    ></a>
                  </li>
                </ul>
              </div>
            </aside>
            <div className="contact__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11981.77108014213!2d69.3395716!3d41.3427289!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x243f4b2b5e36eade!2z0JPQntCh0KPQlNCQ0KDQodCi0JLQldCd0J3QkNCvINCh0JvQo9CW0JHQkCDQoNCV0KHQn9Cj0JHQm9CY0JrQmCDQo9CX0JHQldCa0JjQodCi0JDQnSDQn9CeINCh0JvQldCW0JXQndCY0K4g0JfQkCDQntCf0JDQodCd0KvQnNCYINCT0JXQntCb0J7Qk9CY0KfQldCh0JrQmNCc0Jgg0J_QoNCe0KbQldCh0KHQkNCc0Jg!5e0!3m2!1sru!2s!4v1649165864672!5m2!1sru!2s"
                width="1130"
                height="535"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
