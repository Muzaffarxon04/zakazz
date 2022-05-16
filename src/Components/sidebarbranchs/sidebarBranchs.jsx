import Content from "../../Localization/Content";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useEffect } from "react";





export default function Sidebar() {
    
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

   let cc
 
   if (h.footer.bostonlik.split(" ")[0] === "Бостанлыкская" ) {
       cc = " CC"
    }else if (h.footer.bostonlik.split(" ")[0] === "Bostanlik") {
        cc = " TS"
    }else{
        cc = " KS"
   }

   
 
return(<>

<section className="sidebar">
<ul className="sidebar__list">
    <li className="sidebar__item"><Link href="/department/shakhrisabz"><a className="sidebar__link">{h.footer.shakhrisabz.split(" ")[0] + cc}</a></Link></li>
    <li className="sidebar__item"><Link href="/department/bostonlik"><a className="sidebar__link">{h.footer.bostonlik.split(" ")[0] + cc}</a></Link></li>
    <li className="sidebar__item"><Link href="/department/karshi"><a className="sidebar__link">{h.footer.karshi.split(" ")[0] + cc}</a></Link></li>
    <li className="sidebar__item"><Link href="/department/samarkand"><a className="sidebar__link">{h.footer.samarkand.split(" ")[0] + cc}</a></Link></li>
    <li className="sidebar__item"><Link href="/department/surkhandarya"><a className="sidebar__link">{h.footer.surkhandarya.split(" ")[0] + cc}</a></Link></li>
    <li className="sidebar__item"><Link href="/department/fergana"><a className="sidebar__link">{h.footer.fergana.split(" ")[0] + cc}</a></Link></li>
    <li className="sidebar__item"><Link href="/department/angren"><a className="sidebar__link">{h.footer.angren.split(" ")[0] + cc}</a></Link></li>
    
   
</ul>
</section>
</>)

    
}

