import TopHeader from '../components/TopHeader';
import WorkPageMenu from '../components/WorkPageMenu';
import FooterSection from '../components/FooterSection';
import { useEffect,useState} from 'react';
import { Workpreloader } from './Workpreloader';
 const Work = () => {

    const [loading, setLoading] = useState(false)
    useEffect(()=>{
      setLoading(true)
      setTimeout(()=> {
        setLoading(false)
      },3500)
    }, []);

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
        {
            loading ? <Workpreloader />
           : <>
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
                  <a href='https://www.behance.net/gallery/135830623/The-Redesigning-of-Kaoshi-P2P-Payment-Widget' className='mainworkContainer' data-ui data-aos="slide-up" data-aos-duration="600" target='_blank'>
                        <div className='mainWorkDiv' data-aos='fade-down'>
                            <img src='https://res.cloudinary.com/colt-copy/image/upload/v1652358228/942817135830623.Y3JvcCwyMDQ1LDE2MDAsMjU4LDA_ulfe6b.png' alt='Kaoshi P2P'/>
                            <h3>Kaoshi P2P Payment Widget</h3>
                            <h4>UX Design - Visual design / UX Research</h4>
                            <p>Figma, Illustrator & Invision</p>
                            <div className='viewWorkButton'>
                            <p>View work</p> <i className="fa-solid fa-arrow-up viewWorkArrow"></i>
                            </div>
                        </div>
                    </a>
                    <a href='cseersdao.com' className='mainworkContainer' data-aos='fade-down' data-dev target='_blank'>
                    <div className='mainWorkDiv' >
                            <img src='https://res.cloudinary.com/colt-copy/image/upload/v1672855440/cseerdsao-portfolio-size-svg_nzaird.svg' alt='CSEERSDAO'/>
                            <h3>CSEERSDAO</h3>
                            <h4>UIUX Design - Visual design / Prototyping / Web development</h4>
                            <p>Figma, Illustrator, HTML, CSS & JS</p>
                            <div className='viewWorkButton'>
                            <p>View work</p> <i className="fa-solid fa-arrow-up viewWorkArrow"></i>
                            </div>
                        </div>
                    </a>
                    <a href='https://www.figma.com/file/CWUoVWszRure4Vt4e0FrQB/Kaoshi-Redesign' className='mainworkContainer' data-aos='fade-up' data-aos-animation="700" data-ui target='_blank'>
                    <div className='mainWorkDiv' >
                            <img src='https://res.cloudinary.com/colt-copy/image/upload/v1672854006/Kaoshi-portfolio-size_y2yjqu.svg' alt='Kaoshi Landing Page'id='kaoshiLanding'/>
                            <h3>Kaoshi Network - Landing page</h3>
                            <h4>UX Design - Visual design / Information architecture</h4>
                            <p>Figma, Illustrator & Principle</p>
                            <div className='viewWorkButton'>
                            <p>View work</p> <i className="fa-solid fa-arrow-up viewWorkArrow"></i>
                            </div>
                        </div>
                    </a>
                    <a href='https://mide-clp.netlify.app/' className='mainworkContainer' data-aos='fade-down' data-aos-duration="500" data-dev target='_blank'>
                    <div className='mainWorkDiv' >
                            <img src='https://res.cloudinary.com/colt-copy/image/upload/v1672854143/Mide-portfolio-snapshot_bnktgd.svg' alt='Kaoshi P2P'/>
                            <h3>Mide-portfolio</h3>
                            <h4>UX Design - Visual design / Interaction design / Web development</h4>
                            <p>Adobe XD, Illustrator, HTML, CSS & JS</p>
                            <div className='viewWorkButton'>
                            <p>View work</p> <i className="fa-solid fa-arrow-up viewWorkArrow"></i>
                            </div>
                        </div>
                    </a>
                    <a href='https://www.behance.net/gallery/154413299/Swiftpay' className='mainworkContainer' data-aos='fade-up' data-aos-animation="700" data-ui target='_blank'>
                    <div className='mainWorkDiv' >
                            <img src='https://res.cloudinary.com/colt-copy/image/upload/v1672853875/Swiftpay-portfolio_box0ue.svg' alt='Swiftpay Casestudy'/>
                            <h3>Swiftpay (Case study)</h3>
                            <h4>UX Design - Visual design / Information architecture</h4>
                            <p>Figma, Figjam & Framer</p>
                            <div className='viewWorkButton'>
                            <p>View work</p> <i className="fa-solid fa-arrow-up viewWorkArrow"></i>
                            </div>
                        </div>
                    </a>
                    <a href='https://www.behance.net/gallery/155145335/Protern' className='mainworkContainer' data-aos='fade-up' data-aos-animation="600" data-ui target='_blank'>
                    <div className='mainWorkDiv' >
                            <img src='https://res.cloudinary.com/colt-copy/image/upload/v1672856857/Protern_portfolio_dwuti1.svg' alt='Swiftpay Casestudy'/>
                            <h3>Protern (Case study)</h3>
                            <h4>UX Design - Visual design / Information architecture</h4>
                            <p>Figma, Figjam & Framer</p>
                            <div className='viewWorkButton'>
                            <p>View work</p> <i className="fa-solid fa-arrow-up viewWorkArrow"></i>
                            </div>
                        </div>
                    </a>
                    <a href='https://www.behance.net/gallery/116881397/Space-tours' className='mainworkContainer' data-aos='fade-up' data-aos-animation="400" data-ui target='_blank'>
                    <div className='mainWorkDiv' >
                            <img src='https://res.cloudinary.com/colt-copy/image/upload/v1672859955/Space-tours_portfolio_lotuan.svg' alt='Space Tours '/>
                            <h3>Space Tours - Landing page (Personal project)</h3>
                            <h4>UX Design - Visual design</h4>
                            <p>Figma</p>
                            <div className='viewWorkButton'>
                            <p>View work</p> <i className="fa-solid fa-arrow-up viewWorkArrow"></i>
                            </div>
                        </div>
                    </a>
            </div>
            
        </div>
    
    </div>
    <FooterSection />
            </>
        }
      
    </div>
  )
}

export default Work;