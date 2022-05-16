import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Content from "../../Localization/Content";
import { useDispatch, useSelector } from "react-redux";

import normalizeDate from "../../utils/time";

import img1 from "../../Assets/images/news1.png";
import img2 from "../../Assets/images/logo.svg";
import Arrow from "../../Assets/images/row.svg";

const arr = [
  {
    id: 1,
    title:
      "Xalqaro to‘lov tizimlari Rossiyadan chiqib ketishi o‘zbekistonlik migrantlarning pul o‘tkazmalariga ",
    desc: "Oʼzbekiston Respublikasi Xavfli geologik jarayonlarni kuzatish Davlat xizmati Oʼzbekiston Respublikasi Prezidentining 2007 yil 19 fevraldagi PQ-585 sonli qarori va Vazirlar Mahkamasining 2017 yil 13 noyabrdag...",
    link: "https://kun.uz",
    time: 1553299200,
  },
  {
    id: 2,
    title:
      "Xalqaro to‘lov tizimlari Rossiyadan chiqib ketishi o‘zbekistonlik migrantlarning pul o‘tkazmalariga ta’sir qiladimi? ",
    desc: "Oʼzbekiston Respublikasi Xavfli geologik jarayonlarni kuzatish Davlat xizmati Oʼzbekiston Respublikasi Prezidentining 2007 yil 19 fevraldagi PQ-585 sonli qarori va Vazirlar Mahkamasining 2017 yil 13 noyabrdag...",
    link: "https://kun.uz",
    time: 1553299200,
  },
  {
    id: 3,
    title:
      "Xalqaro to‘lov tizimlari Rossiyadan chiqib ketishi o‘zbekistonlik migrantlarning pul o‘tkazmalariga ta’sir qiladimi?",
    desc: "Oʼzbekiston Respublikasi Xavfli geologik jarayonlarni kuzatish Davlat xizmati Oʼzbekiston Respublikasi Prezidentining 2007 yil 19 fevraldagi PQ-585 sonli qarori va Vazirlar Mahkamasining 2017 yil 13 noyabrdag...",
    link: "https://kun.uz",
    time: 1553299200,
  },
  {
    id: 4,
    title:
      "Xalqaro to‘lov tizimlari Rossiyadan chiqib ketishi o‘zbekistonlik migrantlarning pul o‘tkazmalariga ta’sir qiladimi? ",
    desc: "Oʼzbekiston Respublikasi Xavfli geologik jarayonlarni kuzatish Davlat xizmati Oʼzbekiston Respublikasi Prezidentining 2007 yil 19 fevraldagi PQ-585 sonli qarori va Vazirlar Mahkamasining 2017 yil 13 noyabrdag...",
    link: "https://kun.uz",
    time: 1553299200,
  },
  {
    id: 5,
    title:
      "Xalqaro to‘lov tizimlari Rossiyadan chiqib ketishi o‘zbekistonlik migrantlarning pul o‘tkazmalariga ta’sir qiladimi?",
    desc: "Oʼzbekiston Respublikasi Xavfli geologik jarayonlarni kuzatish Davlat xizmati Oʼzbekiston Respublikasi Prezidentining 2007 yil 19 fevraldagi PQ-585 sonli qarori va Vazirlar Mahkamasining 2017 yil 13 noyabrdag...",
    link: "https://kun.uz",
    time: 1553299200,
  },
];

function HomeNews() {
  // const img = 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'

  const [data, setData] = useState(arr);
  const [news, setNews] = useState(arr);

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

  const { homeNews: h } = Content[lang];

  // useEffect(() => {
  //     fetch('',)
  //         .then(res => res.json())
  //         .then(data => setData(data.data.reverse().slice(1, 4)), setNews(data.data.slice(0, 1)))
  //         .catch(e => console.log(e))
  // }, [])

  return (
    <>
      <section className="home__news">
        <div className="container">
          <h2 className="home__news__heading">{h.heading}</h2>

          <div className="home__news__box">
            <div className="home__news__big-new-box">
              <Link href={"news/" + data[0].id}>
                <a>
                  <div>
                    <Image src={img1} alt="" width={790} height={500} className="rasm"/>
                  </div>

                  <p className="home__news__big-new-box__time">
                    {normalizeDate(data[0].time)}
                  </p>

                  <h3 className="home__news__big-new-box__heading">
                    {data[0].title}
                  </h3>

                  <p className="home__news__big-new-box__text">
                    {data[0].desc.split(" ").slice(0, 20).join(" ") + "..."}
                  </p>
                </a>
              </Link>
            </div>

            <div className="home__news__news-list-wrapper">
              <ul className="home__news__news-list">
                {data &&
                  data.slice(1, 5).map((e, i) => (
                    <li className="home__news__news-item" key={i}>
                      <Link href={"news/" + e.id}>
                        <a>
                          <div className="home__news__news-img">
                            <Image src={img2} alt="" width={120} height={110} className="home__news__news-image"/>
                          </div>

                          <div className="home__news__news-item__content">
                            <time>{normalizeDate(data[0].time)}</time>
                            <h3 className="">{data[0].title}</h3>
                          </div>
                        </a>
                      </Link>
                    </li>
                  ))}
              </ul>
              <Link href={"/news"}>
                <a className="home__news__news-more">{h.more}</a>
              </Link>
              <a href="#headertop" className="home__news__news-upbtn">
                <Image
                  src={Arrow}
                  alt="Down arrow"
                  aria-hidden="true"
                  width="13"
                  height="8"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeNews;
