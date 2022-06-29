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
    <li className="sidebar__item"><Link href="/jobs"><a className="sidebar__link">{c.sub_list_two.jobs}</a></Link></li>
    <li className="sidebar__item"><Link href="/faq"><a className="sidebar__link">{c.sub_list_two.faq}</a></Link></li>
    <li className="sidebar__item"><Link href="/youthpolicy"><a className="sidebar__link">{c.sub_list_two.youthpolicy}</a></Link></li>
    <li className="sidebar__item"><Link href="/fightagainstcorruption"><a className="sidebar__link">{c.sub_list_two.fightagainstcorruption}</a></Link></li>
</ul>
</div>
</>)

    
}

