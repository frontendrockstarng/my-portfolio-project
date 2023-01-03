import React from 'react'
import { LandingPageHeader } from '../components/LandingPageHeader';
import { Link } from 'react-router-dom';
import { useEffect,useState, Fragment} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import RecentWorks from '../components/RecentWorks';
import SliderSection from '../components/SliderSection';
import FooterSection from '../components/FooterSection';
import Lottie from 'react-lottie';
import Homepreloader from '../homepreloader.json'

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: Homepreloader,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const [loading, setLoading] = useState(false)
      useEffect(()=>{
        setLoading(true)
        setTimeout(()=> {
          setLoading(false)
        },2500)
      }, []);
    

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

      
  return (
    <div>
      {
        loading ? <Lottie options={defaultOptions} width={1000}/>
        :
        <Fragment>
              <LandingPageHeader />
              <div className='briefIntroDiv'>
            <div className='containerGeneral briefContainer'>
              <div className='noteandBtn' data-aos='fade-up'>
                <p className='briefIntro'>I am a UX designer with passion for creating an interactive, 
                useful, and enjoyable user experience. Simplicity
                is very important to me as it guides me in delivering useful and clean designs. <span className='orangeFont'>Of course
                every designer can say this or at least think this. Lol</span>
                </p>
                
                <Link to='/about' className='linkGeneral circleBtns mt-10'>About me 
                <i className="fa-solid fa-arrow-up circleBtnIcon "></i>
                </Link>
                
              </div>
              <div className='toolsDiv' data-aos='fade-down'>
                <div className='toolsDivRow'>
                  <div className='iconProcessDiv'><i className='fas fa-people-carry'></i><p>Empathize</p></div>
                  <div className='iconProcessDiv'><i className='fas fa-chalkboard-teacher'></i><p>Define</p></div>
                  <div className='iconProcessDiv'><i className='fas fa-brain'></i><p>Ideate</p></div>
            
                </div>
                <div className='toolsDivRow'>
                <div className='iconProcessDiv'><i className='fas fa-layer-group'></i><p>Prototype</p></div>
                  <div className='iconProcessDiv'><i className='fas fa-poll'></i><p>Test</p></div>
                  <div className='iconProcessDiv'><i className='fas fa-redo-alt'></i><p>Iterate</p></div>
                </div>
              </div>
            </div>
          </div>
          <RecentWorks />
          <SliderSection />
          <FooterSection />
        </Fragment>
        
      }
      
     
    </div>
  )
}

export default Home