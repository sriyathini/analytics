import React from "react";
// import {  BiAnalyse } from 'react-icons/bi';
// import { BiCustomize  } from 'react-icons/bi';
// import { RiContactsLine } from 'react-icons/ri';
// import {useEffect} from 'react';
import Sec1 from "./Sec1";
import Sec2 from "./Sec2";
function Homesec(){


  // const contentRef = useRef(null);

  // useEffect(() => {
  //   const options = {
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 0.5,
  //   };

  //   const observer = new IntersectionObserver(handleIntersect, options);
    
  //   // Store contentRef.current in a variable
  //   const currentContentRef = contentRef.current;
    
  //   if (currentContentRef) {
  //     observer.observe(currentContentRef);
  //   }
   
  //   return () => {
  //     if (currentContentRef) {
  //       observer.unobserve(currentContentRef);
  //     }
  //   };
  // }, []);

  // const handleIntersect = (entries) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       entry.target.classList.add('fadeUp');
  //     } else {
  //       entry.target.classList.remove('fadeUp');
  //     }
  //   });
  // };




  return(
<div className="homesec"> 

<Sec1/>
<Sec2/>
</div>

  );
}
export default Homesec;