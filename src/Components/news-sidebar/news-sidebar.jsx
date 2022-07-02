import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Content from "../../Localization/Content";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import normalizeDate from "../../utils/time";
const parse = require('html-react-parser');

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


function News({Url}) {
  // const img = 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'

  const [data, setData] = useState([]);
  const [news, setNews] = useState([]);
  const router = useRouter()
  const id = router.query.id // ? router.query.id : ""
  
  const langValue = useRef();
  const dispatch = useDispatch();
  const {
    count: { lang },
  } = useSelector((state) => state);
  
  console.log(news);
  async function News() {
  
  
    let res = await fetch(`${Url}/news/${id}`)
    let data = await res.json()
    if (data) {
      setNews(data.result[0])

    }
    
    }

  function getLang() {
    dispatch({ type: window.localStorage.getItem("lang") || "ru" });
  }

  langValue.current = getLang;

  useEffect(() => {
    langValue.current();
  }, []);

  useEffect(() => {
    News()
  }, [id]);

  const { header: y } = Content[lang];

 

  useEffect(() => {
    fetch(`${Url}/news`,)
        .then(res => res.json())
        .then(data => setData(data.result))
        .catch(e => console.log(e))
}, [])



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
              
<Link href={`/news/${id}`}>
                <a className="contact__link">{news.length ? news[0].title : ""}</a>
              </Link>
		  </div>
		   <div className="single-news__wrapper">
           <ul className="sidebar-news__news-list">
              {data &&
                data.slice(0, 6).map((e, i) => (
                  <li className="sidebar-news__news-item" key={i}>
                  <Link href={"/news/" + e.id}>
                        <a>
                    <div className="sidebar-news__news-content">
                      <div className="news__news-time">
                        <time>{normalizeDate(e.created_at)}</time>
                      </div>
                      <h3 className="news-news__title">{e.title}</h3>
                    </div>
                        </a>
                        </Link>
                  </li>
                ))}
            </ul>

            <div className="single-news__news" >
            {parse(news.content ? news.content : '<span/><span>')}
            </div>
           </div>
          </div>
        </section>
    </>
  );
}

export default News;
