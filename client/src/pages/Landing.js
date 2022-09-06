import React from 'react'
import {
  Logo
} from '../components'
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import {
  Link
} from 'react-router-dom';

const Landing = () => {
  return ( <Wrapper>
    <nav>
    <Logo />
    </nav> 
    <div className = "container page" >
    <div className = "info" >
    <h1> Job <span> Tracker </span></h1>
    <p>
    Track your job applications and track of the companies that you are applying to, interviews you have had, and contacts you 're adding to your network. </p> 
    <Link to = '/register'
    className = "btn btn-hero" >
    Login / register 
    </Link> 
    </div> 
    <img src = {main} alt = "Job Hunt"
    className = "img main-img" />
    </div> 
    </Wrapper>
  )
}

export default Landing
