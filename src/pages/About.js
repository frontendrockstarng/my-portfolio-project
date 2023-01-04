import React from 'react'
import {  Link } from 'react-router-dom';
import TopHeader from '../components/TopHeader';
import AboutPageMenu from '../components/AboutPageMenu';
import FooterSection from '../components/FooterSection';


const About = () => {
  return (
      <div>
            <div className='landingPageHeader aboutMeHeader'>
        <TopHeader />
        <div className='aboutMeDiv'>
            <div className='aboutMeContent'>
                    <h3>Hi, I’m</h3>
                    <h1 className='fontWhite'>Daniel Adesanya</h1>
                    <p>I am a <span className='oran'>UX Designer & UI Developer</span> from Nigeria. I started my UX Design journey in 2020. 
                        I thought UX designing was all about making "dribblefied" designs till I went through two bootcamps that helped me understand
                        User Experience design more.
                        <br />
                        </p>
                        <p> I've worked on Fintech, web3, NFT and DAO projects and would love to touch other industries with my skills.</p>
                        <p>Before going into UX Design, I used to write copies for small businesses, write content for blogs and manage social media accounts. I also have a little
                            background in frontend development and yes, I built this website from scratch with React. There's more, <span>scroll.</span>
                        </p>   
            </div>
        </div>
             <div className='aboutMenuContainer'>
                 <AboutPageMenu />
            </div>
        </div>
        <div className='containerGeneral moreAboutMe'>
            <div className='aboutImgBtn'>
                <img src='https://res.cloudinary.com/colt-copy/image/upload/v1653650343/Group_73_ai08yt.png' alt='Daniel Adesanya' data-aos='fade-down'/>
                <h2>Interests & Passions</h2>
                <ul  className='interstList'>
                    <li data-icon='🎭'>Acting</li>
                    <li data-icon='🎸'>Playing the guitar</li>
                    <li data-icon='🃏'>NFTs</li>
                    <li data-icon='🥋'>Anime</li>
                    <li data-icon='😎'>Traveling</li>
                    <li data-icon='⚽'>Football</li>
                
                </ul>
            </div>
                
            <div className='moreAboutMeContent' data-aos='fade-down'>
                <h2>Performance . Accessibility . Inclusivity</h2>
                <p> I specialize in visual deisgns, micro-interactions and accesibility testing. In my daily work I participate in all creation processes, from understanding business needs, user creation, wireframing, design, prototyping and testing. I design mostly web applications for all types of devices.</p>
                <p></p>
                <h2>Experience</h2>
                <div className='experieneDiv'>
                    <h3>Kaoshi Network, UX Designer (Freelance)</h3>
                    <h4 className='mb-5'>2021 - Present</h4>
                 
                    <h3>Zuri & Ingressive4good, UI Developer (Bootcamp)</h3>
                    <h4 className='mb-5'>Feb 2021 - May 2021</h4>
                   
                    <h3>Migrant Solutions, UI Developer (Bootcamp)</h3>
                    <h4 className=''> May 2020 - September 2020</h4>

                    <div className='downloadResume'>
                        <Link to='' className='linkGeneral circleBtns mt-10'>Resume
                        <i className="fa-solid fa-arrow-up circleBtnIcon downloadIcon"></i>
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>

        <div className='containerGeneral toolsAndSkillsDiv'>
            <h2>Tools and Skills</h2>
            <div className='toolSkillContainer'>
                <div className='listToolSkillsDiv'>
                    <div className='skillToolRow'>
                        <p>Figma</p>
                        <p>Adobe XD</p>
                        <p>Figjam</p>
                        <p>Proto.io</p>
                    </div>
                    <div className='skillToolRow'>
                        <p>Invsion</p>
                        <p>Balsamiq</p>
                        <p>Webflow</p>
                        <p>HTML & CSS</p>
                    </div>
                    <div className='skillToolRow'>
                        <p>Protopie</p>
                        <p>Framer</p>
                        <p>Lottiefiles</p>
                        <p>Wordpress</p>
                    </div>
                    <div className='skillToolRow'>
                        <p>Visual Design</p>
                        <p>Contextual research</p>
                        <p>Responsive design</p>
                        <p>Typography</p>
                    </div>
                </div>

                <img src='https://res.cloudinary.com/colt-copy/image/upload/v1654714464/Group_82_hn1v4e.png' alt='Tools & Skills' data-aos='fade-down'/>
            </div>
        </div>

        <FooterSection />
    </div>
  )
}

export default About