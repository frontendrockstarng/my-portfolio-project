import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
 const TopHeader = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
     const [noDisplay, showDisplay] = useState(true)
     const handleDisplay = () =>{
         showDisplay(!noDisplay)
     }
  return (
      <div>
          <div className='topHeader'>
            
                <Link to='/' className='homeLink'>Daniel Adesanya</Link>
                         
                    
            <div className='dropdownDiv'>
                <div className='dropdownBtn' onClick={handleDisplay}>
                    <p className='fontWhite'>Connect</p>
                    <i className='fa fa-angle-down fontWhite'></i>
                </div>
               
               {noDisplay ? null :  <div className='socialDivContainer' data-aos='fade-down'>
                    <ul className='socialLinkUl'>
                        <li className='fontWhite menuList'>
                            
                              <a href='https://twitter.com/iamlumiwon' className='linkGeneral linkListContainer'><i className='fa-brands fa-twitter fa-brands-list'></i> Twitter</a>
                        </li>
                        <li className='fontWhite menuList'>
                            
                              <a href='https://www.linkedin.com/in/daniel-adesanya-27296813b/' className='linkGeneral linkListContainer'><i className='fa-brands fa-linkedin fa-brands-list'></i> Linkedin</a>
                            
                        </li>
                        <li className='fontWhite menuList'>
                            
                              <a href='https://github.com/frontendrockstarng' className='linkGeneral linkListContainer'><i className='fa-brands fa-github-square fa-brands-list'></i> Github</a>
                            
                        </li>
                        <li className='fontWhite menuList'>
                            
                              <a href='mailto: danadesanya96@gmail.com' className='linkGeneral linkListContainer'><i className='fa-regular fa-envelope fa-brands-list'></i> Email</a>
                            
                        </li>
                    </ul>
                 </div>}

            </div>
    </div>
      </div>
    
  )
}

export default TopHeader;
