import Content from "../../Localization/Content";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../../Components/sidebar/sidebar"
import img2 from "../../Assets/images/lisense.png";


let arrov = '>'




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

  const { header: y } = Content[lang];

return(<>

<section className="stricture">
   <div className="container">  
<div className="navigatsiya">
<Link href={"/"}>
                <a className="contact__link">{y.home}</a>
              </Link>{arrov}
              <Link href={"/about"}>
                <a className="contact__link">{y.about}</a>
              </Link>{arrov}
<Link href={"/structure"}>
                <a className="contact__link">{y.sub_list_one.structure}</a>
              </Link>
		  </div>

<div className="sticture-wrapper">
<Sidebar/>
<div className="lisense">
<h1 className="stricture__title">{y.footer.stricture_title}</h1>

<Image src={img2} alt="" width={1017} height={668} />
</div>
</div>
</div>
</section>
</>)

    
}

