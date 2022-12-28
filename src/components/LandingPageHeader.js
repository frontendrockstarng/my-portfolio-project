import React, {useState, useEffect} from 'react'
import LandingPageMenu from './LandingPageMenu'
import  TopHeader  from './TopHeader'


export const LandingPageHeader = () => {

  return (
    <div className='landingPageHeader'>
        <TopHeader />    
        <div className='imgDivContainer'>
            <div className='imgDiv'></div>
            <img src='https://ca.slack-edge.com/TLBHCQ31P-U01AHUG1KTN-8e7a0724ee57-512' className='myImg' alt='Daniel Adesanya'/>
        </div>   
        <div className='pageMenuDivContainer'>
          <LandingPageMenu />
          <span className='hiNote'>Hola, I'm Daniel. Scroll down! </span>
          <div className='rightheading'>
            <h4>UX Designer</h4>
            <h4>UI Developer</h4>
          </div>
        </div>
    </div>
  )
}
