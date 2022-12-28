import React, {useState, useEffect} from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
 const WorkPageMenu = () => {
    const [hideMenu, showMenu] = useState(true)
    const [scrollState, setScrollState] = useState(true)
  
    const handleScroll = () =>{
    if (window.innerWidth>766){
        if(window.scrollY>100){
            setScrollState(false)
        }
        else{
            setScrollState(true)
        }
    }else{
        setScrollState(false)
    }
   
    }
    useEffect(()=>{
        window.addEventListener('scroll',handleScroll);
        return () =>{
            window.removeEventListener('scroll', handleScroll)
        }
    })
  return (
    <div className='landingPageMenuDiv' >
        
    {
        hideMenu ? null : <div className='responsiveMenu' data-aos='slide-left'>
        <div className='headMenuDiv'>
            <div className='closeMenuDiv'>
            <i className='fas fa-times' onClick={()=>  showMenu(!hideMenu)}></i>
            </div>
        </div>
        <div className='desktopMenuLinkDiv'>
            
                <Link to='' className='fontWhite desktopLinkDiv '  ><span >Home</span>
                 <div className='arrowDiv'><i className='fa-solid fa-arrow-up'></i></div>
                </Link>
            
        </div>
        <div className='desktopMenuLinkDiv'>
            
                <Link to='/work' className='fontWhite desktopLinkDiv activePage' ><span >Work</span>
                 <div className='arrowDiv'><i className='fa-solid fa-arrow-up'></i></div>
                </Link>
            
        </div>
        <div className='desktopMenuLinkDiv'>
            
                <Link to='/about' className='fontWhite desktopLinkDiv'><span>About</span>
                 <div className='arrowDiv'><i className='fa-solid fa-arrow-up'></i></div>
                </Link>
            
        </div>
        <div className='desktopMenuLinkDiv'>
            
                <Link to='' className='fontWhite desktopLinkDiv'><span>Contact</span>
                 <div className='arrowDiv'><i className='fa-solid fa-arrow-up'></i></div>
                </Link>
            
        </div>
        <ul className='socialLinkUl responsiveMenuSocials'>
                    <li className='fontWhite menuList'>
                        
                          <a href = "https://twitter.com/iamlumiwon"  target="_blank" className='LinkGeneral LinkListContainer'><i className='fa-brands fa-twitter fa-brands-list fa-brands-list-responsive'></i> </a>
                        
                    </li>
                    <li className='fontWhite menuList'>
                        
                          <a href='https://www.linkedin.com/in/daniel-adesanya-27296813b/' target="_blank" className='LinkGeneral LinkListContainer'><i className='fa-brands fa-linkedin  fa-brands-list fa-brands-list-responsive'></i></a>
                        
                    </li>
                    <li className='fontWhite menuList'>
                        
                          <a href='https://github.com/frontendrockstarng' target="_blank" className='LinkGeneral LinkListContainer'><i className='fa-brands fa-github-square fa-brands-list fa-brands-list-responsive'></i> </a>
                        
                    </li>
                    <li className='fontWhite menuList'>
                        
                          <a href='mailto:danadesanya96@gmail.com' className='LinkGeneral LinkListContainer'><i className='fa-regular fa-envelope fa-brands-list fa-brands-list-responsive'></i> </a>
                        
                    </li>
                </ul>
                <div className='mainContactDiv responsiveContact'>
                
                    <a href='mailto:danadesanya96@gmail.com' className='LinkGeneral contactBtn'><p>danadesanya96@gmail.com</p></a>
                
                
                    <a href='tel:+2349022117273' className='LinkGeneral contactBtn'><p>+2349022117273</p></a>
                
            </div>
    </div> 
    }

    <div className='desktopMenu'>
        <div className='desktopMenuLinkDiv'>
            
                <Link to='/work' className='fontWhite desktopLinkDiv aboutActive' ><span >Work</span>
                 <div className='arrowDiv'><i className='fa-solid fa-arrow-up'></i></div>
                </Link>
            
        </div>
        <div className='desktopMenuLinkDiv'>
            
                <Link to='/about' className='fontWhite desktopLinkDiv ' ><span>About</span>
                 <div className='arrowDiv'><i className='fa-solid fa-arrow-up'></i></div>
                </Link>
            
        </div>
        <div className='desktopMenuLinkDiv'>
            
                <Link to='' className='fontWhite desktopLinkDiv'><span>Contact</span>
                 <div className='arrowDiv'><i className='fa-solid fa-arrow-up'></i></div>
                </Link>
            
        </div>
</div>
    {
        scrollState ? null :  <div className='mobileMenu' onClick={()=>  showMenu(!hideMenu)}>
        <i class="fas fa-minus fontWhite"></i>
        <i class="fas fa-minus fontWhite"></i>
   </div>
    }
   
</div>

  )
}

export default WorkPageMenu;