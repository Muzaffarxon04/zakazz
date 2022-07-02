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

   let cc
 
   if (c.footer.bostonlik.split(" ")[0] !== "Бостанлыкская" ) {
    cc = " SS"
   }else{
     cc = " CC"
   }

return(<>

<div className="sidebar">
<ul className="sidebar__list">
    <li className="sidebar__item"><Link href="/about"><a className="sidebar__link">{c.about}</a></Link></li>
    <li className="sidebar__item"><Link href="/legal_status"><a className="sidebar__link">{c.sub_list_one.legal_status}</a></Link></li>

    <li className="sidebar__item"><Link href="/stricture"><a className="sidebar__link">{c.sub_list_one.structure}</a></Link></li>
    <li className="sidebar__item"><Link href="/management"><a className="sidebar__link">{c.sub_list_one.management}</a></Link></li>
    <li className="sidebar__item dropdown-item"><a className="sidebar__link">{c.sub_list_one.finance}</a>
    <ul className="sidebar__dropdown-first">
    <li className="sidebar-dropdown__item"><Link href="/financial"><a className="sidebar__link">{c.sub_list_one.financial}</a></Link></li>
    <li className="sidebar-dropdown__item"><Link href="/audit"><a className="sidebar__link">{c.sub_list_one.audit}</a></Link></li>
    </ul>
    </li>
    <li className="sidebar__item dropdown-item-second"><a className="sidebar__link">{c.sub_list_one.structures}</a>
    <ul className="sidebar__dropdown-second">
    <li className="sidebar-dropdown__item sidebar__dropdown__item-three"><a className="sidebar__link">{c.sub_list_one.aparat}</a>
    <ul className="sidebar__dropdown-three">
    <li className="sidebar-dropdown__item"><Link href="/information"><a className="sidebar__link">{c.sub_list_one.inform_department}</a></Link></li>
    <li className="sidebar-dropdown__item"><Link href="/geological"><a className="sidebar__link">{c.sub_list_one.geology}</a></Link></li>
    <li className="sidebar-dropdown__item"><Link href="/international"><a className="sidebar__link">{c.sub_list_one.relationships}</a></Link></li>
    </ul>
    </li>
    </ul>
    </li>
    <li className="sidebar__item dropdown-item-second"><a className="sidebar__link">{c.sub_list_one.department}</a>
    <ul className="sidebar__dropdown-second departament-menu">
                    <li className="sub-dropdown__item">
                      <Link href="/department/shakhrisabz">
                        <a className="sub-dropdown-link">
                          {c.footer.shakhrisabz.split(" ")[0] + cc}
                        </a>
                      </Link>
                    </li>
                    <li className="sub-dropdown__item">
                      <Link href="/department/bostonlik">
                        <a className="sub-dropdown-link">
                        {c.footer.bostonlik.split(" ")[0] + cc}
                        </a>
                      </Link>
                    </li>
                    <li className="sub-dropdown__item">
                      <Link href="/department/karshi">
                        <a className="sub-dropdown-link">
                        {c.footer.karshi.split(" ")[0] + cc}
                        </a>
                      </Link>
                    </li>
                    <li className="sub-dropdown__item">
                      <Link href="/department/samarkand">
                        <a className="sub-dropdown-link">
                        {c.footer.samarkand.split(" ")[0] + cc}
                        </a>
                      </Link>
                    </li>
                    <li className="sub-dropdown__item">
                      <Link href="/department/surkhandarya">
                        <a className="sub-dropdown-link">
                        {c.footer.surkhandarya.split(" ")[0] + cc}
                         
                        </a>
                      </Link>
                    </li>
                    <li className="sub-dropdown__item">
                      <Link href="/department/fergana">
                        <a className="sub-dropdown-link">
                        {c.footer.fergana.split(" ")[0] + cc}
                        </a>
                      </Link>
                    </li>
                    <li className="sub-dropdown__item">
                      <Link href="/department/angren">
                        <a className="sub-dropdown-link">
                        {c.footer.angren.split(" ")[0] + cc}
                        </a>
                      </Link>
                    </li>
                  </ul>
    </li>
</ul>
</div>
</>)

    
}

