import React from 'react'
import './Home.scss'
import Slider from './Slider/Slider'
import Image_3 from '../../assets/image3.jpg'
import Image_4 from '../../assets/image4.jpg'

const Home = () => {
    return (
        <>
            <Slider />
            <div className='section_1-container'>
                <img src={Image_3} alt="pic" className='image' />
                <div className='left_side-container'>
                    <p className='date'>New Now <span>November'17</span></p>
                    <h1>Paradise Touch</h1>
                    <p className='text'>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. In eu justo ornare, ornare lectus sed, fringilla nisi. Phasellus viverra ipsum et molestie vehicula.</p>
                    <div className='btn-container'>
                        <button className='btn'>Shop by Look</button>
                    </div>

                    <div className='left_bottom_container'>
                        <img src={Image_4} alt="pic"/>
                        <div className='left_bottom_info'>
                            <p>Chunky $130.<sup>00</sup></p>
                            <div className='btn-container_2'>
                                <button className='btn_2'>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Home