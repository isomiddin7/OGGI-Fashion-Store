import React, { useState } from 'react'
import './Slider.scss';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import firstSlide from '../../../assets/firstSlider.jpg'
import secondSlide from '../../../assets/secondSlider.jpg'
import { Link } from 'react-router-dom'
import styled from 'styled-components';


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
        if(direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 1)
        } else {
            setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0)
        }
    }
    return (
        <div className='slider-container'>
            <div className='arrow left'>
                <AiOutlineArrowLeft size={20} onClick={() => handleClick('left')}/>
            </div>
            <Wrapper slideIndex={slideIndex}>
                <div className='slide-container'>
                    <div className='info-container'>
                        <p>New Season '20</p>
                        <h1>Love Yourself & Your Body</h1>
                        <Link to='#' className='link'>Explore</Link>
                    </div>
                    <div className='img-container'>
                        <img src={firstSlide} alt="slide" className='image' />
                    </div>
                </div>

                <div className='slide-container'>
                    <div className='info-container'>
                        <p>Absolute Liberty 2020</p>
                        <h1>An Exclusive Collection</h1>
                        <Link to='#' className='link'>Explore</Link>
                    </div>
                    <div className='img-container'>
                        <img src={secondSlide} alt="slide" className='image' />
                    </div>
                </div>
            </Wrapper>
            <div className='arrow right'>
                <AiOutlineArrowRight  size={20} onClick={() => handleClick('right')}/>
            </div>
        </div>
    )
}

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`
export default Slider