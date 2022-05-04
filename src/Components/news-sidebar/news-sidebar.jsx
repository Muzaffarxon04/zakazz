import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Content from "../../Localization/Content";
import { useDispatch, useSelector } from "react-redux";

import normalizeDate from "../../utils/time";


import img2 from "../../Assets/images/news2.png";

let arrov = '>'


const arr = [
  {
    id: 1,
    title:
      "Xalqaro to‘lov tizimlari Rossiyadan chiqib ketishi o‘zbekistonlik migrantlarning pul o‘tkazmalariga ta’sir qiladimi?",
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
  {
    id: 6,
    title:
      "Xalqaro to‘lov tizimlari Rossiyadan chiqib ketishi o‘zbekistonlik migrantlarning pul o‘tkazmalariga ta’sir qiladimi?",
    desc: "Oʼzbekiston Respublikasi Xavfli geologik jarayonlarni kuzatish Davlat xizmati Oʼzbekiston Respublikasi Prezidentining 2007 yil 19 fevraldagi PQ-585 sonli qarori va Vazirlar Mahkamasining 2017 yil 13 noyabrdag...",
    link: "https://kun.uz",
    time: 1553299200,
  },
  {
    id: 7,
    title:
      "Xalqaro to‘lov tizimlari Rossiyadan chiqib ketishi o‘zbekistonlik migrantlarning pul o‘tkazmalariga ta’sir qiladimi?",
    desc: "Oʼzbekiston Respublikasi Xavfli geologik jarayonlarni kuzatish Davlat xizmati Oʼzbekiston Respublikasi Prezidentining 2007 yil 19 fevraldagi PQ-585 sonli qarori va Vazirlar Mahkamasining 2017 yil 13 noyabrdag...",
    link: "https://kun.uz",
    time: 1553299200,
  },
  {
    id: 8,
    title:
      "Xalqaro to‘lov tizimlari Rossiyadan chiqib ketishi o‘zbekistonlik migrantlarning pul o‘tkazmalariga ta’sir qiladimi?",
    desc: "Oʼzbekiston Respublikasi Xavfli geologik jarayonlarni kuzatish Davlat xizmati Oʼzbekiston Respublikasi Prezidentining 2007 yil 19 fevraldagi PQ-585 sonli qarori va Vazirlar Mahkamasining 2017 yil 13 noyabrdag...",
    link: "https://kun.uz",
    time: 1553299200,
  },
  {
    id: 1,
    title:
      "Xalqaro to‘lov tizimlari Rossiyadan chiqib ketishi o‘zbekistonlik migrantlarning pul o‘tkazmalariga ta’sir qiladimi?",
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
  {
    id: 6,
    title:
      "Xalqaro to‘lov tizimlari Rossiyadan chiqib ketishi o‘zbekistonlik migrantlarning pul o‘tkazmalariga ta’sir qiladimi?",
    desc: "Oʼzbekiston Respublikasi Xavfli geologik jarayonlarni kuzatish Davlat xizmati Oʼzbekiston Respublikasi Prezidentining 2007 yil 19 fevraldagi PQ-585 sonli qarori va Vazirlar Mahkamasining 2017 yil 13 noyabrdag...",
    link: "https://kun.uz",
    time: 1553299200,
  },
  {
    id: 7,
    title:
      "Xalqaro to‘lov tizimlari Rossiyadan chiqib ketishi o‘zbekistonlik migrantlarning pul o‘tkazmalariga ta’sir qiladimi?",
    desc: "Oʼzbekiston Respublikasi Xavfli geologik jarayonlarni kuzatish Davlat xizmati Oʼzbekiston Respublikasi Prezidentining 2007 yil 19 fevraldagi PQ-585 sonli qarori va Vazirlar Mahkamasining 2017 yil 13 noyabrdag...",
    link: "https://kun.uz",
    time: 1553299200,
  }, 
  {
    id: 8,
    title:
      "Xalqaro to‘lov tizimlari Rossiyadan chiqib ketishi o‘zbekistonlik migrantlarning pul o‘tkazmalariga ta’sir qiladimi?",
    desc: "Oʼzbekiston Respublikasi Xavfli geologik jarayonlarni kuzatish Davlat xizmati Oʼzbekiston Respublikasi Prezidentining 2007 yil 19 fevraldagi PQ-585 sonli qarori va Vazirlar Mahkamasining 2017 yil 13 noyabrdag...",
    link: "https://kun.uz",
    time: 1553299200,
  },
];


function News() {
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

  const { header: y } = Content[lang];

  // useEffect(() => {
  //     fetch('',)
  //         .then(res => res.json())
  //         .then(data => setData(data.data.reverse().slice(1, 4)), setNews(data.data.slice(0, 1)))
  //         .catch(e => console.log(e))
  // }, [])

  return (
    <>
          <section className="single-news">
		  <div className="container">
              
          <div className="navigatsiya">
<Link href={"/"}>
                <a className="contact__link">{y.home}</a>
              </Link>{arrov}
<Link href={"/news"}>
                <a className="contact__link">{y.news}</a>
              </Link>
              {arrov}
<Link href={"/news"}>
                <a className="contact__link">Xalqaro to‘lov tizimlari Rossiyadan chiqib ketishi o‘zbekistonlik migrantlarning pul o‘tkazmalariga ta’sir qiladimi?</a>
              </Link>
		  </div>
		   <div className="single-news__wrapper">
           <ul className="sidebar-news__news-list">
              {data &&
                data.slice(0, 6).map((e, i) => (
                  <li className="sidebar-news__news-item" key={i}>
                  <Link href={"news/" + e.id}>
                        <a>
                    <div className="sidebar-news__news-content">
                      <div className="news__news-time">
                        <time>{normalizeDate(data[0].time)}</time>
                      </div>
                      <h3 className="news-news__title">{data[0].title}</h3>
                    </div>
                        </a>
                        </Link>
                  </li>
                ))}
            </ul>

            <div className="single-news__news">
                <h2>Xalqaro to‘lov tizimlari Rossiyadan chiqib ketishi o‘zbekistonlik migrantlarning pul o‘tkazmalariga ta’sir qiladimi?</h2>
            </div>
           </div>
          </div>
        </section>
    </>
  );
}

export default News;
