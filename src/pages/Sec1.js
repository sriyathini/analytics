import React, { useRef } from "react"; 
// import {  BiAnalyse } from 'react-icons/bi';
// import { BiCustomize  } from 'react-icons/bi';
// import { RiContactsLine } from 'react-icons/ri';
import {useEffect} from 'react';
function Sec1(){

  const contentRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    
    // Store contentRef.current in a variable
    const currentContentRef = contentRef.current;
    
    if (currentContentRef) {
      observer.observe(currentContentRef);
    }
   
    return () => {
      if (currentContentRef) {
        observer.unobserve(currentContentRef);
      }
    };
  }, []);

  const handleIntersect = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fadeUp');
      } else {
        entry.target.classList.remove('fadeUp');
      }
    });
  };



    return(
      
        <div id='home' className='img-fluid top-fix'>
        <div className="container">
          <div className="content"style={{ height: '80vh' }} ref={contentRef}>
          <div className='row ps-5'>
            <h1>Leading Big Data Analytics Company</h1>
             <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</h3>
             <button className="button mt-5 pt-2 pb-2" style={{width:"30%"}}>GET STARTED</button>
    
           </div>
         
           </div>
           </div>
           </div>
           );
           }

           export default Sec1;