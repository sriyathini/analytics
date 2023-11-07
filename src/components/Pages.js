import React from 'react';
import img1 from '../images/page1.png';
import img2 from '../images/page2.jpg';
function Pages(){
    return(
        <div id='pages'>
         <div className='container-fluid'>
            <div className='row'>
                <div className='col'>
                     <img src={img1} alt='image' className='img1'/>
                     <img src={img2} alt='image' className='img2'/>
              </div> 
                 <div className='col'>
                    <div className='box'>
                        <h1>Engaging New Audiences through Smart Approach</h1>
                        <h3>There are many variations of passages of Lorem Ipsum available, 
                            but the majority have suffered alteration in some form,
                             by injected humour,
                              or randomised words which don't look even slightly believable.
                               If you are going to use a passage.<br />
                               
At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium 
voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
 similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</h3>
                    <button className="button mt-5 pt-2 pb-2" style={{width:"30%"}}>Discover More</button>
                    </div>
                 </div>
             </div>
         </div> 
        </div>

    );
}
export default Pages;