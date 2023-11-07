import React, { useRef } from "react"; 
 import {  BiAnalyse } from 'react-icons/bi';
 import { BiCustomize  } from 'react-icons/bi';
 import { RiContactsLine } from 'react-icons/ri';
 import {useEffect} from 'react';
function Sec2(){

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

  <div className="container Sec2">   
  <div className="content"style={{ height: '50vh' }} ref={contentRef}>
    <div className='row' >
    <div className='analyze col col-lg-4 col-md-6 col-12'>
     <div className="box">
       <div className="box-icon"><BiAnalyse /></div>
       <div className="box-words">
        <h1 className="ps-3">Analyze your Data</h1>
        <h3 className="ps-3">Lorem ipsum dolor sit amet elit,adipising,sed do eiusmod tempor incididunt ut labore dolore magna aaliqua</h3>
        </div>
    </div>
    </div>
    <div className='customized col col-lg-4 col-md-6 col-12 ms-5'>
    <div className="box">
       <div className="box-icon"><BiCustomize /></div>
       <div className="box-words">
      <h1 className="ps-3">Customized Plan</h1>
      <h3 className="ps-3">Lorem ipsum dolor sit amet elit,adipiscing,sed do eiusmod tempor incididunt ut labore dolor magna aliqua.</h3>
  </div>
  </div>
  </div>
  <div className='implement col col-lg-4 col-md-6 col-12 ms-5'>
  <div className="box">
       <div className="box-icon"><RiContactsLine /></div>
       <div className="box-words">
      <h1 className="ps-3">Implement Solution</h1>
          <h3 className="ps-3">Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</h3>
  </div>
  </div>
  </div>
</div>    
</div>
</div>

)
}
export default Sec2;