import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
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
               
                    <Link to='' className='mainworkContainer' data-aos-duration="300">
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
               
               
                    <Link to='' className='mainworkContainer' data-aos='fade-up' data-aos-duration="600">
                        <div className='mainWorkDiv' >
                            <img src='https://res.cloudinary.com/colt-copy/image/upload/v1672770036/cseerdsao-portfolio-size_gafinr.png' alt='CSEERSDAO'/>
                            <h3>CSEERSDAO</h3>
                            <h4>UIUX Design - Visual design / Prototyping/ / Web development</h4>
                            <p>Figma, Illustrator, HTML, CSS & JS</p>
                            <div className='viewWorkButton'>
                            <p>View work</p> <i className="fa-solid fa-arrow-up viewWorkArrow"></i>
                            </div>
                        </div>
                    </Link>
               
            </div>
            <div className='worksRow'>
            
                    <Link to='' className='mainworkContainer' data-aos='fade-down' data-aos-duration="700">
                        <div className='mainWorkDiv' >
                            <img src='https://res.cloudinary.com/colt-copy/image/upload/v1672771213/Kaoshi-portfolio-size_bjsdbp.png' alt='Kaoshi Landing Page'id='kaoshiLanding'/>
                            <h3>Kaoshi Network</h3>
                            <h4>UX Design - Visual design / Information architecture</h4>
                            <p>Figma, Illustrator & Principle</p>
                            <div className='viewWorkButton'>
                            <p>View work</p> <i className="fa-solid fa-arrow-up viewWorkArrow"></i>
                            </div>
                        </div>
                    </Link>
               
            
                    <Link to='' className='mainworkContainer' data-aos='fade-down' data-aos-duration="350">
                        <div className='mainWorkDiv' >
                            <img src='https://res.cloudinary.com/colt-copy/image/upload/v1672775800/Mide-portfolio-snapshot_urkglj.png' alt='Kaoshi P2P'/>
                            <h3>Mide-portfolio</h3>
                            <h4>UX Design - Visual design / Interaction design / Web development</h4>
                            <p>Adobe XD, Illustrator, HTML, CSS & JS</p>
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