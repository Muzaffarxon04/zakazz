import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Content from "../../Localization/Content";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import Logo from "../../Assets/images/logo.svg";
import Flag from "../../Assets/images/flag.svg";

const Footer = () => {
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
        <div className="container">
          <div className="footer__top">
            <div className="footer__info">
              <Link href="/">
                <a className="footer__logo--link">
                  <div className="footer__logo__box">
                    <Image
                      className="footer__logo"
                      src={Logo}
                      alt="Ministry logo"
                      maxwidth={80}
                      maxheight={80}
                      objectFit="cover"
                    />
                  </div>
                </a>
              </Link>
              <div className="footer__flag__box">
                <Image
                  className="flag"
                  src={Flag}
                  alt="flag"
                  maxwidth={3}
                  maxheight={76}
                />
              </div>
              <p className="footer__heading">{h.heading}</p>
            </div>

            <nav className="footer__navbar">
              <ul className="footer__navbar__list">
                <li className="footer__navbar__item">
                  <Link href="/about">
                    <a className="footer__navbar__item-link">{h.about}</a>
                  </Link>
                </li>
                <li className="footer__navbar__item">
                  <Link href="/news">
                    <a className="footer__navbar__item-link">{h.news}</a>
                  </Link>
                </li>
                <li className="footer__navbar__item">
                  <Link href="/">
                    <a className="footer__navbar__item-link">{h.active}</a>
                  </Link>
                </li>
                <li className="footer__navbar__item">
                  <Link href="/service">
                    <a className="footer__navbar__item-link">{h.service}</a>
                  </Link>
                </li>
                <li className="footer__navbar__item">
                  <Link href="/contact">
                    <a className="footer__navbar__item-link">{h.contact}</a>
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="footer__social">
              <ul className="footer__social__list">
                <li className="footer__social__item">
                  <a
                    className="footer__social__link"
                    href="https://www.facebook.com/"
                  ></a>
                </li>
                <li className="footer__social__item">
                  <a
                    className="footer__social__link"
                    href="https://www.instagram.com/"
                  ></a>
                </li>
                <li className="footer__social__item">
                  <a
                    className="footer__social__link"
                    href="https://web.telegram.org/"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="footer__contact">
              <div className="footer__address__email">
                <div className="footer__address">
                  <h3 className="footer__address__title">{h.footer.address}</h3>
                  <p className="footer__address__paragraph">
                    {h.footer.address_title}
                  </p>
                </div>
                <div className="footer__address">
                  <h3 className="footer__address__title">??-mail:</h3>
                  <a
                    href="mailto:gosslujbauz@inbox.uz"
                    className="footer__address__paragraph"
                  >
                    gosslujbauz@inbox.uz;
                  </a>
                  <a
                    href="mailto:gssogp@exat.uz"
                    className="footer__address__paragraph"
                  >
                    gssogp@exat.uz
                  </a>
                  <a
                    href="mailto:Priyomnayagss@gosslujba.uz"
                    className="footer__address__paragraph"
                  >
                    Priyomnayagss@gosslujba.uz
                  </a>
                </div>
              </div>
              <div className="footer__phone__faks">
                <div className="footer__phone">
                  <h3 className="footer__address__title">{h.footer.phone}</h3>
                  <a
                    href="tel:+998712415470"
                    className="footer__address__paragraph"
                  >
                    +99871 2415470
                  </a>
                </div>
                <div className="footer__address">
                  <h3 className="footer__address__title">{h.footer.faks}</h3>
                  <a
                    href="tel:+998712415470"
                    className="footer__address__paragraph"
                  >
                    +99871 2415470
                  </a>
                </div>
              </div>
            </div>
            <div className="footer__branch">
              <h4 className="branch__title" style={h.footer.map == "?????????????????????????? ??????????" ? {paddingLeft:"35px"} : {paddingLeft:"56px"}}>{h.footer.map}</h4>
              <p className="branch__subtitle">{h.footer.map2}</p>
              <ul className="branch__list">
                <li className="branch__item">
                <Link href='/department/fergana'>
                  <a>{h.footer.fergana}</a>
                  </Link>
                </li>
                <li className="branch__item">
                <Link href='/department/bostonlik'>
                  <a>{h.footer.bostonlik}</a>
                  </Link>
                </li>
                <li className="branch__item">
                <Link href='/department/shakhrisabz'>
                  <a>{h.footer.shakhrisabz}</a>
                </Link>
                </li>
                <li className="branch__item">
                <Link href='/department/karshi'>
                  <a>{h.footer.karshi}</a>
            </Link>
                </li>
                <li className="branch__item">
                <Link href='/department/fergana'>
                  <a>{h.footer.fergana}</a>
                </Link>
                </li>
                <li className="branch__item">
                <Link href='/department/samarkand'>
                  <a>{h.footer.samarkand}</a>
               </Link>
                </li>
                <li className="branch__item">
                  <Link href='/department/surkhandarya'>
                  <a>{h.footer.surkhandarya}</a>
                  </Link>
                </li>
              </ul>
            </div>


          </div>
</div>
<div className="footer-address">
<div className="container">
<ul className="footer-address__list">
  <li className="footer-address__item">?? 2021 ?????????????????????????????????? ???????????? ???????????????????? ????????????????????</li>
  <li className="footer-address__item">?????? ?????????? ????????????????</li>
  <li className="footer-address__item">?????????????? ????????????????????????</li>
</ul>
</div>

        </div>
    </>
  );
};

export default Footer;
