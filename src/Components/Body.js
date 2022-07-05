import React from "react";
import netflix_tv from '../images/tv.png';
import netflix_video from '../images/netflix video.m4v';
import netflix_mobile from '../images/mobile-0819.jpg';
import netflix_kids from '../images/kidsValueProp.png';
import '../styles/Body.css'

const Body = () =>{
    return(
       <section className="story-descrip">
        <div className="story-1">
            <div className="content-1">
                <h1>Enjoy on your TV.</h1>
                <h3>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple Tv, Blu-ray plyers and more.</h3>
            </div>
            <img src={netflix_tv}  alt="Netflix TV"/>
            <video  className="video-1" autoplay="" playsinline="" muted="" loop="">
                <source src={netflix_video} type="video/mp4"/>
            </video>
        </div>

        <div className="story-2">
            <img src={netflix_mobile} alt="Netflix Mobile"/>
            <div className="content-2">
                <h1>Download your shows to watch offline.</h1>
                <h3>Save your favorite easily and always have something to watch.</h3>
            </div>

        </div>
        <div className="story-3">
            <div className="content-3">
                <h1>Watch everywhere.</h1>
                <h3>Stream Unlimited movies and TV shows on your phone, tablet, laptop, anf TV. </h3>
            </div>
        </div>

        <div className="story-4">
            <img src={netflix_kids} alt="Nteflix for kids"/>
            <div className="content-4">
                <h1>Create profiles for kids.</h1>
                <h3>Send kids on adventures with thier favourite characters in a space made just for them—free with your membership.</h3>

            </div>
        </div>

        <div className="faq">
            <h1>Frequently Asked Questions</h1>
            <ul className="questions">
                <li>What is Netflix?</li>
                <li>How much does Netflix cost?</li>
                <li>Where can I watch?</li>
                <li>How do I cancel?</li>
                <li>What can I watch on Netflix?</li>
                <li>Is Netflix good for kids?</li>
            </ul>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="input">
                <input type="email" name="email" placeholder="Email Address"/>
                <a href="./" className="btn-rounded"><button>GET STARTED </button></a>
            </div>
        </div>

        
       </section> 
       
       


    )
}

export default Body 