import React from 'react'
import "./index.css"
import Logomark from '../../Assests/Logomark.png'

function Footer() {
  return (
    <div>
        <footer className="footer  text-base-content footer_section_deatils_container p-10 pl-20">
            <nav>
                <h6 className="footer-title">Product</h6>
                <span className="link link-hover">Overview</span>
                <span className="link link-hover">Features</span>
                <span className="link link-hover">Solutions</span>
                <span className="link link-hover">Tutorials</span>
                <span className="link link-hover">Pricing</span>
                <span className="link link-hover">Releases</span>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <span className="link link-hover">About us</span>
                <span className="link link-hover">Careers</span>
                <span className="link link-hover">Press</span>
                <span className="link link-hover">News</span>
                <span className="link link-hover">Media kit</span>
                <span className="link link-hover">Contact</span>
            </nav>
            <nav>
                <h6 className="footer-title">Resources</h6>
                <span className="link link-hover">Blog </span>
                <span className="link link-hover">Newsletter</span>
                <span className="link link-hover">Events</span>
                <span className="link link-hover">Help centre</span>
                <span className="link link-hover">Tutorials</span>
                <span className="link link-hover">Support</span>
            </nav>
            <nav>
                <h6 className="footer-title">Use cases</h6>
                <span className="link link-hover">Startups </span>
                <span className="link link-hover">Enterprise</span>
                <span className="link link-hover">Government</span>
                <span className="link link-hover">SaaS centre</span>
                <span className="link link-hover">Marketplaces</span>
                <span className="link link-hover">Ecommerce</span>
            </nav>
            <nav>
                <h6 className="footer-title">Social</h6>
                <span className="link link-hover">Twitter </span>
                <span className="link link-hover">LinkedIn</span>
                <span className="link link-hover">Facebook</span>
                <span className="link link-hover">GitHub</span>
                <span className="link link-hover">AngelList</span>
                <span className="link link-hover">Dribbble</span>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <span className="link link-hover">Terms </span>
                <span className="link link-hover">Privacy</span>
                <span className="link link-hover">Cookies</span>
                <span className="link link-hover">Licenses</span>
                <span className="link link-hover">Settings</span>
                <span className="link link-hover">Contact</span>
            </nav>
            
        </footer>
        <hr/>
        <footer className="footer footer-center footer_section text-base-content p-4">
            <nav className='footer_section_nav_contaoner'>
                <img className='book_logo' src={Logomark} alt='logo'/>
                <h1>Untitled UI</h1>
            </nav>
            <aside>
                <p> © {new Date().getFullYear()} Untitled UI. All rights reserved. </p>
            </aside>
        </footer>
    </div>
  )
}

export default Footer