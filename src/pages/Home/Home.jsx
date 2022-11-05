import React from 'react'
import './Home.scss'
import Slider from './Slider/Slider'
import Image_3 from '../../assets/image3.jpg'
import Image_4 from '../../assets/image4.jpg'
import Image_5 from '../../assets/image5.jpg'
import Image_6 from '../../assets/image6.jpg'
import Image_7 from '../../assets/image7.jpg'
import Image_8 from '../../assets/image8.jpg'
import Image_9 from '../../assets/image9.jpg'
import Image_10 from '../../assets/image10.jpg'
import Image_11 from '../../assets/image11.jpg'
import Image_12 from '../../assets/image12.jpg'
import Footer from '../../components/Footer/Footer'

const Home = () => {
    return (
        <>
            <Slider />
            <div className='section_1-container'>
                <div className='img-info-container'>
                    <img src={Image_3} alt="pic" className='image' />
                    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: "10px" }}>
                        <p>Red Sleeve Coat <br />$255.<sup>00</sup></p>
                        <div className='btn-container'>
                            <button className='btn'>Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className='left_side-container'>
                    <p className='date'>New Now <br /><span>November'17</span></p>
                    <h1>Paradise Touch</h1>
                    <p className='text'>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. In eu justo ornare, ornare lectus sed, fringilla nisi. Phasellus viverra ipsum et molestie vehicula.</p>
                    <div className='btn-container'>
                        <button className='btn'>Shop by Look</button>
                    </div>

                    <div className='left_bottom_container'>
                        <img src={Image_4} alt="pic" className='pic' />
                        <div className='left_bottom_info'>
                            <p>Chunky $130.<sup>00</sup></p>
                            <div className='btn-container'>
                                <button className='btn'>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section_2'>
                <img src={Image_5} alt="" />
            </div>
            <div className='section_3'>
                <div className='section_3_leftside'>
                    <p id='text'>INSPIRATION <br /><span>COLORFUL AUTUMN</span></p>
                    <h1>Tone to Tone</h1>
                    <p id='ctx'>Lorem ipsum dolor sit amet br consectetur adipisicing elit. Ex, consectetur.</p>
                    <div className='btn-container'>
                        <button className='btn'>Explore Collection</button>
                    </div>
                </div>
                <img src={Image_6} alt="pic" />
            </div>

            <div className='section_4'>
                <div className='first'>
                    <img src={Image_7} alt="pic" />
                    <p>Tie Back T-Shirt <br /> $75.<span>00</span></p>
                    <div className='btn-container_2'>
                        <button className='btn_2'>Explore Collection</button>
                    </div>
                </div>

                <div className='first'>
                    <img src={Image_8} alt="pic" />
                    <p>Tie Back T-Shirt <br /> $75.<span>00</span></p>
                    <div className='btn-container_2'>
                        <button className='btn_2'>Explore Collection</button>
                    </div>
                </div>

                <div className='first'>
                    <img src={Image_9} alt="pic" />
                    <p>Tie Back T-Shirt <br /> $75.<span>00</span></p>
                    <div className='btn-container_2'>
                        <button className='btn_2'>Explore Collection</button>
                    </div>
                </div>
            </div>
            <div className='section_5'>
                <img src={Image_10} alt="pic" />
                <div className='section_5_rightside'>
                    <p>ADD DETAILS <br /> <span>Up To 20% OFF</span></p>
                    <h1>Accessories Edition</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, dicta?</p>
                    <div className='btn-container'>
                        <button className='btn'>Explore Collection</button>
                    </div>
                </div>
            </div>

            <div className='section_6'>
                <div className='section_6_leftside'>
                    <img src={Image_11} alt="pic" />
                    <div className='section_6_leftside_bottom'>
                        <p>White T-Shirt <br /> $65.<span>00</span></p>
                        <div className='btn-container'>
                            <button className='btn'>Wristband</button>
                        </div>
                    </div>
                </div>

                <div className='section_6_rightside'>
                    <img src={Image_12} alt="pic" />
                    <div className='section_6_leftside_bottom'>
                        <p>Long Sleeve <br /> $95.<span>00</span></p>
                        <div className='btn-container'>
                            <button className='btn'>Bags</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section_7'>
                <p>FOLLOW OGGI ON</p>
                <h1>Instagram</h1>
            </div>
            <Footer />
        </>

    )
}

export default Home