import React from 'react'
import "./index.css"
import { Link } from 'react-router-dom'
import Logomark from '../../Assests/Logomark.png'
import profile_pic from '../../Assests/profile_pic.jpg'

function Header() {
  return (
    <div className="navbar bg-base-100 fixed top-0 z-20 header_ ">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li><Link to="/"><span>Home</span></Link></li>    
                <li>
                    <details>
                    <summary>Products</summary>
                    <ul className="p-2">
                        <li><span>Blog 📑</span></li>
                        <li><span>customers stories✨</span></li>
                        <li><span>video tutorials  <i class="fa-solid fa-video"></i></span></li>
                    </ul>
                    </details>
                </li>
                <li>
                    <details>
                    <summary>Resources</summary>
                    <ul className="p-2">
                        <li><span>Blog 📑</span></li>
                        <li><span>customers stories✨</span></li>
                        <li><span>video tutorials  <i class="fa-solid fa-video"></i></span></li>
                    </ul>
                    </details>
                </li>
                <li><Link to="/"><span>Pricing</span></Link></li>
            </ul>
            </div>
            <img className='book_logo' src={Logomark} alt='logo'/>
            <Link to={"/"}><span className="btn btn-ghost text-xl">Untitled UI</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li><Link to="/"><span>Home</span></Link></li>    
                <li>
                    <details>
                    <summary>Products</summary>
                    <ul className="p-2">
                        <li><span>Blog 📑</span></li>
                        <li><span>customers stories✨</span></li>
                        <li><span>video tutorials  <i class="fa-solid fa-video"></i></span></li>
                    </ul>
                    </details>
                </li>
                <li>
                    <details>
                    <summary>Resources</summary>
                    <ul className="p-2 ">
                        <li><span>Blog 📑</span></li>
                        <li><span>customers stories✨</span></li>
                        <li><span>video tutorials  <i class="fa-solid fa-video"></i></span></li>
                    </ul>
                    </details>
                </li>
                <li><Link to="/"><span>Pricing</span></Link></li>
            </ul>
        </div>
        
        <div className="navbar-end">
            <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                <img
                    alt="Tailwind CSS Navbar component"
                    src={profile_pic} />
                </div>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li>
                <span className="justify-between">
                    Profile
                    <span className="badge">New</span>
                </span>
                </li>
                <li><span>Settings</span></li>
                <li><span>Logout</span></li>
            </ul>
        </div>
            <a href='https://hemanthmaniportfolio.netlify.app/' className="btn">Hemanth</a>
            
        </div>
    </div>
  )
}

export default Header