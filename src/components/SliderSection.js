import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const SliderSection = () => {
  return (
    <div className='containerGeneral sliderSection' >
        <div className='subtitleAndBtns'>
        <h2 className='sectionTitle mg-Article'>Useful Articles</h2>
        </div>
            <CarouselProvider
        naturalSlideWidth={500}
        naturalSlideHeight={100}
        totalSlides={2}
         >
        <Slider className='theSlider' data-aos='fade-down'>
          <Slide className='slideContainer' index={0}>
              <div className='articleContainer'>
                  
                     <Link to='' className='mainArticle linkGeneral'>
                         <img src='https://res.cloudinary.com/colt-copy/image/upload/v1652467865/Dealing_with_my_UX_biases_juvwjx.png' alt='Overcoming-my-UX-biases'/>
                         <h3>Overcoming UX Biases - My experience</h3>
                         <p>The average human being has biases based on their experience, environment,
                              cultural background and other factors like socio-economic status. What exactly is a bias?</p>
                        <div className='readMoreDiv'>
                            <p className='readMoreText'>Read More</p>
                            <div className='workArrowDiv'>
                            <i className='fas fa-arrow-right forWorkArrow'></i>
                            </div>
                        </div>
                     </Link>
                  
              
                  
                    <Link to='' className='mainArticle linkGeneral hideMobile'>
                    <img src='https://res.cloudinary.com/colt-copy/image/upload/v1652626760/Dealing_with_my_UX_biases_1_zw5ylm.png' alt='A designer’s journey of ignorance, resentment, and wisdom'/>
                         <h3>A designer’s journey of ignorance, resentment, and wisdom</h3>
                         <p>How politics and power influence our perspectives. The truth is many professions,
                          including the design industry, play the game of workplace politics.</p>
                        <div className='readMoreDiv'>
                            <p className='readMoreText'>Read More</p>
                            <div className='workArrowDiv'>
                            <i className='fas fa-arrow-right forWorkArrow'></i>
                            </div>
                        </div>
                    </Link>
                  

                  
                     <Link to='' className='mainArticle linkGeneral hideMobile'>
                     <img src='https://res.cloudinary.com/colt-copy/image/upload/v1652627142/1_OT7oYVYiT5Uk1_JGoH8XAg_yqhgm7.jpg' alt='5 Common Red Flags in Junior UX Design Portfolios'/>
                         <h3>5 Common Red Flags in Junior UX Design Portfolios</h3>
                         <p>If your portfolio has these glaring red flags, sending out 100 more applications may  
                          just mean 100 more rejections and a hurt ego.
                            </p>
                        <div className='readMoreDiv'>
                            <p className='readMoreText'>Read More</p>
                            <div className='workArrowDiv'>
                            <i className='fas fa-arrow-right forWorkArrow'></i>
                            </div>
                        </div>
                     </Link>
                  
              </div>
          </Slide>
          <Slide  className='slideContainer' index={1}>
          <div className='articleContainer'>
                  
                     <Link to='' className='mainArticle linkGeneral hideMobile'>
                         <img src='https://res.cloudinary.com/colt-copy/image/upload/v1652630642/1_H-MTGBvzTY-2FBJWc0kocA_1_wvrzl4.jpg' alt='1 Month of Job Hunting After Graduating From Coursera Google UX Course'/>
                         <h3>1 Month of Job Hunting After Graduating From Coursera Google UX Course</h3>
                         <p>After a fantastic and reassuring response to my 
                        Google UX course where I connected with... switch.</p>
                        <div className='readMoreDiv' >
                            <p className='readMoreText'>Read More</p>
                            <div className='workArrowDiv' >
                            <i className='fas fa-arrow-right forWorkArrow'></i>
                            </div>
                        </div>
                     </Link>
                  
              
                  
                    <Link to='https://uxdesign.cc/things-i-honestly-dont-want-to-see-in-your-portfolio-3d3497666ca8' className='mainArticle linkGeneral hideMobile'>
                    <img src='https://res.cloudinary.com/colt-copy/image/upload/v1652704222/Dealing_with_my_UX_biases_2_shrvan.png' alt='Things I (honestly) don’t want to see in your portfolio'/>
                         <h3>Things I (honestly) don’t want to see in your portfolio</h3>
                         <p>Once you’re hired and I brief you on a new project, I hope you’re able to 
                           design an entire flow — not just a single screen.</p>
        
                        <div className='readMoreDiv'>
                            <p className='readMoreText'>Read More</p>
                            <div className='workArrowDiv'>
                            <i className='fas fa-arrow-right forWorkArrow'></i>
                            </div>
                        </div>
                    </Link>
                  

                  
                     <Link to='' className='mainArticle linkGeneral'>
                     <img src='https://res.cloudinary.com/colt-copy/image/upload/v1652710539/Dealing_with_my_UX_biases_3_rlpiwl.png' alt='Stop calling yourself a UX designer'/>
                         <h3>Stop calling yourself a UX designer</h3>
                         <p>Imagine sitting down with someone and, asking what they do for a living. “I work in the government,”
                         they say. When you ask for clarification...
                            </p>
                        <div className='readMoreDiv'>
                            <p className='readMoreText'>Read More</p>
                            <div className='workArrowDiv'>
                            <i className='fas fa-arrow-right forWorkArrow'></i>
                            </div>
                        </div>
                     </Link>
                  
              </div>
          </Slide>
          <Slide  className='slideContainer' index={2}></Slide>
        </Slider>
        <ButtonBack className='hideStuff'>Back</ButtonBack>
        <ButtonNext className='hideStuff'>Next</ButtonNext>
        <div className='dotDiv'>
             <DotGroup className='dotPage'/>
        </div>
      </CarouselProvider>
    </div>
  )
}

export default SliderSection
