import React from "react";
import '../styles/Footer.css'

const Footer = () =>{
    return(
        <footer className="footer">
        <p>Questions? <a href="tel:0 801-000-723"> Call 0 801-000-723</a></p>
        <div className="footer-cols">
            <ul>
                <li><a href="FAQ.html">FAQ</a></li>
                <li><a href="./">Investor Relations</a></li>
                <li><a href="./">Terms of Use</a></li>
                <li><a href="./">Contact Us</a></li>
            </ul>
            <ul>
                <li><a href="./">Help Centre</a></li>
                <li><a href="./">Jobs</a></li>
                <li><a href="./">Privacy</a></li>
                <li><a href="./">Speed Test</a></li>
            </ul>
            <ul>
                <li><a href="account.html">Account</a></li>
                <li><a href="Redeem.html">Redeem Gift Cards</a></li>
                <li><a href="./">Cookie Preferences</a></li>
                <li><a href="legalnotice.html">Legal Notices</a></li>
            </ul>
            <ul>
                <li><a href="./">Media Centre</a></li>
                <li><a href="./">Ways to Watch</a></li>
                <li><a href="./">Corporate Information</a></li>
                <li><a href="onlyonnetflix.html">Only on Netflix</a></li>
            </ul>
        </div>
    </footer>
    )
}
export default Footer