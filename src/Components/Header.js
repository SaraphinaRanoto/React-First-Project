import React from "react"
import '../styles/Header.css'
import netflix_logo from '../images/logo.png';

const Header = () =>{
    return(
        <header className="story">
          <div className="story-top">
          <img src={netflix_logo} alt="Logo Img"/>
          <a href="./" className="button btn-rounded">Sign In</a>
        </div>
        <div className="story-content">
          <h1>Unlimited movies, TV shows and more.</h1>
          <h3>Watch anywhere. Cancel anytime.</h3>
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
          <input type="email" name="email" id="mail" placeholder="Email address"/>
          <a href="./" className="button btn-login">get Started </a>
           
        </div>

      </header>
    )
}

export default Header 