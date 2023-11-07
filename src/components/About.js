import { useEffect, useState } from "react";
import React from "react";
 import { FaLaptop } from 'react-icons/fa';
 import { DiTechcrunch} from 'react-icons/di';
 import { SiArkecosystem } from 'react-icons/si';

function About(){

    const [value, setValue] = useState(0); // Initial value
  const [increasing, setIncreasing] = useState(true); // Flag to track the direction of the update
  const max =50; // Maximum value
  const min = 0; // Minimum value
  const increment = 1; // Increment value

  useEffect(() => {
    // Start the automatic range update when the component mounts
    const interval = setInterval(() => {
      if (increasing) {
        if (value < max) {
          setValue(value + increment);
        } else {
          setIncreasing(false);
        }
      } else {
        if (value > min) {
          setValue(value - increment);
        } else {
          setIncreasing(true);
        }
      }
    }, 10); // Update every 100 milliseconds

    // Clear the interval when the component unmounts to prevent memory leaks
    return () => {
      clearInterval(interval);
    };
  }, [value, increasing]);


    return(

        <div id="about">
            <div className="container">
            <div className="row" style={{alignItems:"center", textAlign:"center"}}>
                <h1>What We Do</h1>
            </div>
            <div className="row" style={{alignItems:"center", textAlign:"center"}}>
            <input
        type="range"
        value={value}
        min={min}
        max={max}
        onChange={() => {}}
        style={{width:"100px",alignItems:"center", textAlign:"center"}}
        className="range"
      
      /></div>
            <div className="row">
                <h3>Lorem ipsum dolor sit amet,
             consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
             </div>
            <div className="row">
                <div className="col">
                    <div className="box">
                    <div className="icon"><FaLaptop style={{width:"50px",height:"50px",color:"white"}} className="ps-2 pe-2"/></div>
                    <div className="words">
                    <h1>Research</h1>
                    <h3>Lorem ipsum dolor sit consectetur, consectetur adipiscing elit,
                         sed do eiusmod tempor incididunt.</h3>
                         <a href="/Service">Market Research</a><br />
                         <a href="/Service">Investment Research</a>
                         </div>
                         </div>
                </div>
                <div className="col">
                <div className="box">
                    <div className="icon" style={{color:"white"}}><SiArkecosystem style={{width:"50px",height:"50px",color:"white"}} className="ps-2 pe-2"/></div>
                    <div className="words">
                    <h1>Analytics</h1>
                    <h3>Lorem ipsum dolor sit consectetur, consectetur adipiscing elit,
                         sed do eiusmod tempor incididunt.</h3>
                         <a href="/Service">Data Analytics</a><br />
                         <a href="/Service">Business Intelligence</a>
                </div>
                </div>
                </div>
                <div className="col">
                <div className="box">
                    <div className="icon"><DiTechcrunch style={{width:"50px",height:"50px",color:"white"}} className="ps-2 pe-2"/></div>
                    <div className="words">
                    <h1>Technology</h1>
                    <h3>Lorem ipsum dolor sit consectetur, consectetur adipiscing elit,
                         sed do eiusmod tempor incididunt.</h3>
                         <a href="/Service">Intelligence Automation</a><br />
                         <a href="/Service">Quality Engineering</a>
                </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
};

export default About;
