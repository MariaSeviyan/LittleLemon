import React from 'react'
import css from "./Footer.css"
import footerImage from "../../assets/Logo2.png"
import {BsFacebook,BsInstagram, BsTwitter} from "react-icons/bs"
import { Link } from 'react-router-dom'
import { AiFillGithub } from 'react-icons/ai'

const Footer = () => {
  return (
    <>
    <section className='primary-background section'>
        <div className='container footer'>
            <img className='footer-logo' src={footerImage} alt="error" />
            <div>
                <span className='footerHd'>Sitemap</span>
                <menu>
                    <li><Link to="/" className="footerItem footer-hover">Home</Link></li>
                    <li><Link to="/Menu" className="footerItem footer-hover">Menu</Link></li>
                    <li><Link to="/BookingForm" className="footerItem footer-hover">Reservation</Link></li>
                    <li><Link to="/AboutUs" className="footerItem footer-hover">About</Link></li>
                    <li><Link to="/Profile" className="footerItem footer-hover">Login</Link></li>
                </menu>
            </div>
            <div>
                <span className='footerHd'>Contact Us</span>
                <menu>
                    <li className='footerItem'>Pisa Ave, Chicago</li>
                    <li className='footerItem'>(123) 456-7890</li>
                    <li className='footerItem'>little@lemon.com</li>
                </menu>
            </div>
            <div className='footerSocials'>
                <span className='footerHd'>Connect with Us</span>
                <div>
                    
                    <span className='footerSocialItem footer-hover'><BsInstagram/></span>
                    
                </div>
            </div>
        </div>
    </section>
    <section className='primary-background section'>
        <div className='container github-container'>
            <h2 className='text-white'>Little Lemon</h2>
            <p className='text-white github-container-para'>
                " Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  Illum, doloribus odio, officiis iure in similique aut enim ipsum, 
                  ipsa neque voluptatibus amet dolorum consectetur laborum non deleniti molestias culpa eos! "
            </p>
        </div>
    </section>
    </>
  )
}

export default Footer
