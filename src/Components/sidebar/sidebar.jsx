import Content from "../../Localization/Content";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useEffect } from "react";





export default function Contact() {
    
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

   const { header: c } = Content[lang];


return(<>

<div className="sidebar">
<ul className="sidebar__list">
    <li className="sidebar__item"><Link href="/about"><a className="sidebar__link">{c.about}</a></Link></li>
    <li className="sidebar__item"><Link href="/legal_status"><a className="sidebar__link">{c.sub_list_one.legal_status}</a></Link></li>
    <li className="sidebar__item"><Link href="/charter"><a className="sidebar__link">{c.sub_list_one.charter}</a></Link></li>
    <li className="sidebar__item"><Link href="/stricture"><a className="sidebar__link">{c.sub_list_one.structure}</a></Link></li>
    <li className="sidebar__item"><Link href="/management"><a className="sidebar__link">{c.sub_list_one.management}</a></Link></li>
    <li className="sidebar__item"><Link href="/open_data"><a className="sidebar__link">{c.sub_list_one.open_data}</a></Link></li>
    <li className="sidebar__item"><Link href="/department/shakhrisabz"><a className="sidebar__link">{c.sub_list_one.department}</a></Link></li>
</ul>
</div>
</>)

    
}

