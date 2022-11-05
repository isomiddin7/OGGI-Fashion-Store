import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { ImTwitter } from 'react-icons/im'
import { GrLinkedinOption } from 'react-icons/gr'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div id='line'></div>
        <div className='main-container'>
            <div className='first_line'>
                <div className='footer-links'>
                    <ul>
                        <li><Link style={{textDecoration: 'none', color: 'white'}}>Home</Link></li>
                        <li><Link style={{textDecoration: 'none', color: 'white'}}>Pages</Link></li>
                        <li><Link style={{textDecoration: 'none', color: 'white'}}>Shop</Link></li>
                        <li><Link style={{textDecoration: 'none', color: 'white'}}>Contacts</Link></li>
                    </ul>
                </div>
                <div className='footer-logo'>
                    <img src='https://oggi.rainbow-themes.net/wp-content/uploads/2019/09/logo_black_white_new.png' alt="" />
                </div>
                <div className='footer-icons'>
                    <ul>
                        <li><Link><FaFacebook size={30} color='white'/></Link></li>
                        <li><Link><BsInstagram size={30} color='white'/></Link></li>
                        <li><Link><ImTwitter size={30} color='white'/></Link></li>
                        <li><Link><GrLinkedinOption size={30} color='white'/></Link></li>
                    </ul>
                </div>
            </div>
            <div className='footer-center'>
                <h4>FIND YOUR STONE</h4>
                <p>Lorem ipsum dolor  sit amet consectetur <br /> adipisicing elit. Nostrum reiciendis, soluta dolores iure expedita <br /> dolorem laboriosam veritatis totam inventore rerum.</p>
                <input type="seacrch" placeholder='Enter your email adress'/>
                <div className='btn-container'>
                    <button className='btn'>Request</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer