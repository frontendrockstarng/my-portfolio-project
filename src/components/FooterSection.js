import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
const FooterSection = () => {
  return (
    <div>
        <div className='containerGeneral footerSection'>
            <div className='footerImgDiv'>
                <div className='imgDiv footerImgContainer'></div>
                <img src='https://ca.slack-edge.com/TLBHCQ31P-U01AHUG1KTN-8e7a0724ee57-512' className='myImg footerImg' alt='Daniel Adesanya'/>
            </div>
            <div className='contactReach'>
                <div className='reachOutBtnDiv'>
                    
                        <Link to='' className='reachOutBtn linkGeneral'>
                            Get in touch
                        </Link>
                    
                </div>
                <h2 className='fontWhite footerTitle'>Reach Out</h2>
                <div className='mainContactDiv'>
                    
                        <a href='mailto: danadesanya96@gmail.com' className='linkGeneral contactBtn'><p>danadesanya96@gmail.com</p></a>
                    
                    
                        <a href="tel:+2349022117273" className='linkGeneral contactBtn'><p>+2349022117273</p></a>
                    
                </div>
            </div>
        </div>
        <div className='footerCopyrightDiv '>
            <p>© Daniel Adesanya</p>
            <div className='footerSocials'>
                
                    <a href='https://www.linkedin.com/in/daniel-adesanya-27296813b/' className='footerLink'>LinkedIn</a>
                
                
                    <a href='https://twitter.com/iamlumiwon' className='footerLink'>Twitter</a>
                
                
                    <a href='https://medium.com/@coltdaniel4' className='footerLink'>Medium</a>
                
            </div>
        </div>
    </div>
  )
}

export default FooterSection