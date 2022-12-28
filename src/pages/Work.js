import {Link } from 'react-router-dom';
import TopHeader from '../components/TopHeader';
import WorkPageMenu from '../components/WorkPageMenu';
import FooterSection from '../components/FooterSection';
 const Work = () => {
     const handleChange = (e) => {
        // setClassname('hideUX')

        const workId = e.target.id;
        if(workId) {
            document.querySelectorAll('.mainworkContainer').forEach(elem => {
                elem.style.display = 'none'
            })

            document.querySelectorAll('[data-'+workId+']').forEach(elem => {
                elem.style.display = 'block'
            });
            return;
        }

        document.querySelectorAll('.mainworkContainer').forEach(elem => {
            elem.style.display = 'block'
        })
    }
   
  return (
    <div>
        <div className='landingPageHeader workHeader'>
            <TopHeader />
            <div className='workNoteDiv'>
                <h2>Designing and building useable and useful digital products</h2>
            </div>
            <div className='workMenuContainer'>
                <WorkPageMenu />
                <div className='projectTypeDiv'>
                    <button className='projectType' data-all onClick={handleChange}>All <div className='noOfProject'>10</div></button>
                    <button className='projectType' id='ui' onClick={handleChange}>UI/UX  <div className='noOfProject'>6</div></button>
                    <button className='projectType' id='dev' onClick={handleChange}>Development  <div className='noOfProject'>4</div></button>
                </div>
            </div>
        </div>

        <div className='recentWorksDiv containerGeneral'>
        <h2 className='sectionTitle'>My works</h2>
        <div className='worksDiv'>
            <div className='worksRow'>
               
                  
                  <Link to='' className='mainworkContainer' data-ui>
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
               
               
                    <Link to='' className='mainworkContainer' data-aos='fade-down' data-dev>
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
            
        </div>
    
    </div>

    <FooterSection />
  
    </div>
  )
}

export default Work;