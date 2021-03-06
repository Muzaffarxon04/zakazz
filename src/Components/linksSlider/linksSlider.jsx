import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Content from "../../Localization/Content";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper";

//img
import Gerb from "../../Assets/images/gerb.png";





// const arr = [
//   {
//     id: 1,
//     link: "https://www.mf.uz/uz/",
//     title: "www.mf.uz",
//   },
//   {
//     id: 2,
//     link: "https://www.mf.uz/uz/",
//     title: "www.mf.uz",
//   },
//   {
//     id: 3,
//     link: "https://www.mf.uz/uz/",
//     title: "www.mf.uz",
//   },
//   {
//     id: 4,
//     link: "https://www.mf.uz/uz/",
//     title: "www.mf.uz",
//   },
//   {
//     id: 5,
//     link: "https://www.mf.uz/uz/",
//     title: "www.mf.uz",
//   },
//   {
//     id: 6,
//     link: "https://www.mf.uz/uz/",
//     title: "www.mf.uz",
//   },
//   {
//     id: 7,
//     link: "https://www.mf.uz/uz/",
//     title: "www.mf.uz",
//   },
//   {
//     id: 8,
//     link: "https://www.mf.uz/uz/",
//     title: "www.mf.uz",
//   },
//   {
//     id: 9,
//     link: "https://www.mf.uz/uz/",
//     title: "www.mf.uz",
//   },
//   {
//     id: 10,
//     link: "https://www.mf.uz/uz/",
//     title: "www.mf.uz",
//   },
//   {
//     id: 11,
//     link: "https://www.mf.uz/uz/",
//     title: "www.mf.uz",
//   },
//   {
//     id: 12,
//     link: "https://www.mf.uz/uz/",
//     title: "www.mf.uz",
//   },
//   {
//     id: 13,
//     link: "https://www.mf.uz/uz/",
//     title: "www.mf.uz",
//   },
//   {
//     id: 14,
//     link: "https://www.mf.uz/uz/",
//     title: "www.mf.uz",
//   },
//   {
//     id: 15,
//     link: "https://www.mf.uz/uz/",
//     title: "www.mf.uz",
//   },
// ];

function LinksSlider({Url}) {
  const [data, setData] = useState([]);

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

  const myLoader=({src})=>{
    return `${Url}${src}`;
  }

  const { links: l } = Content[lang];

   useEffect(() => {
      fetch(`${Url}/links`,)
          .then(res => res.json())
          .then(data => setData(data.result))
          .catch(e => console.log(e))
  }, [])

  return (
    <>
      <section className="links">
        <div className="container">
          <h2 className="links__heading">{l.heading}</h2>
        </div>

        <Swiper
          className="links__slider"
          modules={[Pagination, Autoplay]}
          slidesPerView={8}
          spaceBetween={30}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
        >
          {data &&
            data.map((e, i) => (
              <SwiperSlide key={i} className="links__slide">
                <div className="links__img">
                  <Image loader={myLoader} src={`${e.img}`} alt={e.title} width={150} height={150} />
                </div>

                <a className="links__link" href={e.url} target="blank">
                  {e.title ? e.title : " link"}
                </a>
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
    </>
  );
}

export default LinksSlider;
