import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const RecentWorks = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <div className='recentWorksDiv containerGeneral'>
        <h2 className='sectionTitle'>Recent works</h2>
        <div className='worksDiv'>
            <div className='worksRow'>
               
                    <Link to='' className='mainworkContainer'>
                        <div className='mainWorkDiv' data-aos='fade-down'>
                            <img src='https://res.cloudinary.com/colt-copy/image/upload/v1652358228/942817135830623.Y3JvcCwyMDQ1LDE2MDAsMjU4LDA_ulfe6b.png' alt='Kaoshi P2P'/>
                            <h3>Kaoshi P2P Payment Widget</h3>
                            <h4>UX Design - Visual design / UX Research</h4>
                            <p>Figma, Illustrator & Invision</p>
                            <div className='viewWorkButton'>
                            <p>View work</p> <i className="fa-solid fa-arrow-up viewWorkArrow"></i>
                            </div>
                        </div>
                    </Link>
               
               
                    <Link to='' className='mainworkContainer' data-aos='fade-down'>
                        <div className='mainWorkDiv' >
                            <img src='https://res.cloudinary.com/colt-copy/image/upload/v1652438042/c415da139261181.Y3JvcCw4MTcsNjM5LDAsMTI-removebg-preview_1_lnm89c.png' alt='Kaoshi P2P'/>
                            <h3>FunkiesDAO Voting dApp</h3>
                            <h4>UX Design - Visual design / Prototyping</h4>
                            <p>Figma, Illustrator & Invision</p>
                            <div className='viewWorkButton'>
                            <p>View work</p> <i className="fa-solid fa-arrow-up viewWorkArrow"></i>
                            </div>
                        </div>
                    </Link>
               
            </div>
            <div className='worksRow'>
            
                    <Link to='' className='mainworkContainer' data-aos='fade-down'>
                        <div className='mainWorkDiv' >
                            <img src='https://res.cloudinary.com/colt-copy/image/upload/v1652455065/aba290143671883.Y3JvcCwxMDY1LDgzMyw3MjcsMTQ1_rcbijq.png' alt='Kaoshi Landing Page'id='kaoshiLanding'/>
                            <h3>Kaoshi Network</h3>
                            <h4>UX Design - Visual design / Information architecture</h4>
                            <p>Figma, Illustrator & Principle</p>
                            <div className='viewWorkButton'>
                            <p>View work</p> <i className="fa-solid fa-arrow-up viewWorkArrow"></i>
                            </div>
                        </div>
                    </Link>
               
            
                    <Link to='' className='mainworkContainer' data-aos='fade-down'>
                        <div className='mainWorkDiv' >
                            <img src='https://res.cloudinary.com/colt-copy/image/upload/v1652438447/56f13c135830429.Y3JvcCw5MDAsNzAzLDAsMg_gf3gjm.png' alt='Kaoshi P2P'/>
                            <h3>Kaoshi Invoice Widget</h3>
                            <h4>UX Design - Visual design / Interaction design</h4>
                            <p>Adobe XD, Illustrator & Protopie</p>
                            <div className='viewWorkButton'>
                            <p>View work</p> <i className="fa-solid fa-arrow-up viewWorkArrow"></i>
                            </div>
                        </div>
                    </Link>
               
            </div>
            
            <Link to='/work' className='linkGeneral circleBtns mt-5'>More work
            <i className="fa-solid fa-arrow-up circleBtnIcon"></i>
            </Link>
            
        </div>
    
    </div>
  )
}

export default RecentWorks;