import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Content from "../../Localization/Content";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Hamburger from "hamburger-react";

import Logo from "../../Assets/images/logo.svg";
import Flag from "../../Assets/images/flag.svg";
import Arrow from "../../Assets/images/row.svg";
// import See from "../../Assets/images/see.svg";

const Header = () => {
  const router = useRouter();

  const langValue = useRef();
  const elNavbar = useRef(null);
  const [isOpen, setOpen] = useState(false);

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

  let cc

  if (h.footer.bostonlik.split(" ")[0] !== "Бостанлыкская" ) {
   cc = " SS"
  }else{
    cc = " CC"
  }
    


  return (
    <>
      <div className="header-wrapper" ref={elNavbar}>
        <div className="container">
      <div className="hamburget-wrapper">
      <div className="hamburger">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              color="#C9AF89"
              rounded
              hideOutline={false}
              size={25}
              direction="right"
              onToggle={(evt) => {
                elNavbar.current.classList.toggle("header__navbar--active");
              }}
            />
          </div>

          <div className="header__top" id="headertop">
            <div className="phone">
              <a className="phone__number number_one" href="tel:+998712415470">
                +99871 241-54-70
              </a>
              <a className="phone__number" href="tel:+998712415470">
                +99871 241-54-70
              </a>
            </div>
            <div className="email-wrapper">
              <div className="email__address">
                <a href="mailto:info@gosslujba.uz" className="email">
                  info@gosslujba.uz
                </a>
              </div>
              <div className="work__time">
                <time className="time__info">Пн: пт 8:00 - 19:00</time>
              </div>
            </div>
            <div className="for__blinders">
              <span className="text">{h.for_blinders}</span>
          <ul className="blinders-menu">
            <li className="blinders-menu__item">{h.for_blinders_list.view}</li>
            <li className="blinders-menu__item">
              <button className="blinders-menu__btn" id="light-btn"  onClick={() => {document.body.classList.remove("dark") }}>A</button>
              <button className="blinders-menu__btn" id="dark-btn" onClick={() => {document.body.classList.add("dark") }}>A</button>
            </li>
          </ul>
            </div>
            <form className="search">
              <input
                className="search__input"
                type="text"
                placeholder={h.search}
              />
            </form>
            <div className="lang__box">
              <ul className="lang__list">
                <li
                  className={
                    lang === "uz"
                      ? "lang__item lang__item--active"
                      : "lang__item"
                  }
                  onClick={() => {
                    dispatch({ type: "uz" });
                  }}
                >
                  {h.uz}
                  <span className="under_line"></span>
                </li>
                <li
                  className={
                    lang == "ru"
                      ? "lang__item lang__item--active"
                      : "lang__item"
                  }
                  onClick={() => {
                    dispatch({ type: "ru" });
                  }}
                >
                  {h.ru}
                  <span className="under_line"></span>
                </li>
                <li
                  className={
                    lang == "en"
                      ? "lang__item lang__item--active"
                      : "lang__item"
                  }
                  onClick={() => {
                    dispatch({ type: "en" });
                  }}
                >
                  {h.en}
                  <span className="under_line"></span>
                </li>
              </ul>
            </div>
          </div>
      </div>
          <div className="header__bottom">
            <div className="header__info">
              <Link href="/">
                <a className="header__logo--link">
                  <div className="logo__box">
                    <Image
                      className="logo"
                      src={Logo}
                      alt="Ministry logo"
                      maxwidth={100}
                      maxheight={76}
                      objectFit="cover"
                    />
                  </div>
                </a>
              </Link>
              <div className="flag__box">
                <Image
                  className="flag"
                  src={Flag}
                  alt="flag"
                  maxwidth={3}
                  maxheight={76}
                />
              </div>
              <p className="header__heading">{h.heading}</p>
            </div>

            <nav className="header__navbar">
              <ul className="navbar__list">
                <li className="navbar__item">
                  <Link href="/">
                    <a
                      className={`navbar__item-link ${
                        router.pathname == "/"
                          ? "navbar__item-link--active"
                          : ""
                      }`}
                    >
                      {h.home}
                    </a>
                  </Link>
                  <span className="navbar_line"></span>
                </li>
                <li className="navbar__item">
                    <a
                      className={`navbar__item-link ${
                        router.pathname == "/"
                          ? "navbar__item-link--active"
                          : ""
                      }`}
                    >
                      {h.about}
                    </a>
                  <div className="item__row">
                    <Image
                      src={Arrow}
                      alt="Down arrow"
                      aria-hidden="true"
                      width="13"
                      height="8"
                    />
                  </div>
                  <ul className="navbar-item__dropdown">
                  <li className="dropdown__item">
                      <Link href="/about ">
                        <a className="navbar__dropdown-link">
                          {h.about}
                        </a>
                      </Link>
                    </li>
                    <li className="dropdown__item">
                      <Link href="/legal_status ">
                        <a className="navbar__dropdown-link">
                          {h.sub_list_one.legal_status}
                        </a>
                      </Link>
                    </li>
             
                    <li className="dropdown__item">
                      <Link href="/stricture">
                        <a className="navbar__dropdown-link">
                          {h.sub_list_one.structure}
                        </a>
                      </Link>
                    </li>
                    <li className="dropdown__item">
                      <Link href="/management">
                        <a className="navbar__dropdown-link">
                          {h.sub_list_one.management}
                        </a>
                      </Link>
                    </li>
                    <li className="dropdown__item">
                      <Link href="/open_data">
                        <a className="navbar__dropdown-link">
                          {h.sub_list_one.open_data}
                        </a>
                      </Link>
                    </li>
                    <li className="dropdown__item">
                      <Link href="/department">
                        <a className="navbar__dropdown-link">
                          {h.sub_list_one.department}
                        </a>
                      </Link>
                      <ul className="dropdown-item__sub-dropdown">
                    <li className="sub-dropdown__item">
                      <Link href="/department/shakhrisabz">
                        <a className="sub-dropdown-link">
                          {h.footer.shakhrisabz.split(" ")[0] + cc}
                        </a>
                      </Link>
                    </li>
                    <li className="sub-dropdown__item">
                      <Link href="/department/bostonlik">
                        <a className="sub-dropdown-link">
                        {h.footer.bostonlik.split(" ")[0] + cc}
                        </a>
                      </Link>
                    </li>
                    <li className="sub-dropdown__item">
                      <Link href="/department/karshi">
                        <a className="sub-dropdown-link">
                        {h.footer.karshi.split(" ")[0] + cc}
                        </a>
                      </Link>
                    </li>
                    <li className="sub-dropdown__item">
                      <Link href="/department/samarkand">
                        <a className="sub-dropdown-link">
                        {h.footer.samarkand.split(" ")[0] + cc}
                        </a>
                      </Link>
                    </li>
                    <li className="sub-dropdown__item">
                      <Link href="/department/surkhandarya">
                        <a className="sub-dropdown-link">
                        {h.footer.surkhandarya.split(" ")[0] + cc}
                         
                        </a>
                      </Link>
                    </li>
                    <li className="sub-dropdown__item">
                      <Link href="/department/fergana">
                        <a className="sub-dropdown-link">
                        {h.footer.fergana.split(" ")[0] + cc}
                        </a>
                      </Link>
                    </li>
                    <li className="sub-dropdown__item">
                      <Link href="/department/angren">
                        <a className="sub-dropdown-link">
                        {h.footer.angren.split(" ")[0] + cc}
                        </a>
                      </Link>
                    </li>
                  </ul>
                    </li>
                  </ul>
                  <span className="navbar_line"></span>
                </li>
                <li className="navbar__item">
                  <Link href="/news">
                    <a
                      className={`navbar__item-link ${
                        router.pathname == "/"
                          ? "navbar__item-link--active"
                          : ""
                      }`}
                    >
                      {h.news}
                    </a>
                  </Link>
                  <span className="navbar_line"></span>
                </li>
                <li className="navbar__item">
                  {/* <Link href="/active"> */}
                    <a
                      className={`navbar__item-link ${
                        router.pathname == "/"
                          ? "navbar__item-link--active"
                          : ""
                      }`}
                    >
                      {h.active}
                    </a>
                  {/* </Link> */}
                  <div className="item__row">
                    <Image
                      src={Arrow}
                      alt="Down arrow"
                      aria-hidden="true"
                      width="13"
                      height="8"
                    />
                  </div>
                  <ul className="navbar-item__dropdown">
                    <li className="dropdown__item">
                      <Link href="/">
                        <a className="navbar__dropdown-link">
                          {h.sub_list_two.jobs}
                        </a>
                      </Link>
                    </li>
                    <li className="dropdown__item">
                      <Link href="/">
                        <a className="navbar__dropdown-link">
                          {h.sub_list_two.faq}
                        </a>
                      </Link>
                    </li>
                    <li className="dropdown__item">
                      <Link href="/">
                        <a className="navbar__dropdown-link">
                          {h.sub_list_two.youthpolicy}
                        </a>
                      </Link>
                    </li>
                    <li className="dropdown__item">
                      <Link href="/">
                        <a className="navbar__dropdown-link">
                          {h.sub_list_two.fightagainstcorruption}
                        </a>
                      </Link>
                    </li>
                    <li className="dropdown__item">
                      <Link href="/">
                        <a className="navbar__dropdown-link">
                          {h.sub_list_two.contract}
                        </a>
                      </Link>
                    </li>
                  </ul>
                  <span className="navbar_line"></span>
                </li>
                <li className="navbar__item">
                  <Link href="/service">
                    <a
                      className={`navbar__item-link ${
                        router.pathname == "/service"
                          ? "navbar__item-link--active"
                          : ""
                      }`}
                    >
                      {h.service}
                    </a>
                  </Link>
                  <span className="navbar_line"></span>
                </li>
                <li className="navbar__item">
                  <Link href="/contact">
                    <a
                      className={`navbar__item-link ${
                        router.pathname == "/"
                          ? "navbar__item-link--active"
                          : ""
                      }`}
                    >
                      {h.contact}
                    </a>
                  </Link>
                  <span className="navbar_line"></span>
                </li>
              </ul>
            </nav>
            <div className="header__social">
              <ul className="social__list">
                <li className="social__item">
                  <a
                    className="social__link"
                    href="https://www.facebook.com/"
                  ></a>
                </li>
                <li className="social__item">
                  <a
                    className="social__link"
                    href="https://www.instagram.com/"
                  ></a>
                </li>
                <li className="social__item">
                  <a
                    className="social__link"
                    href="https://web.telegram.org/"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
