import React, { Component } from 'react'
import { Fade } from 'react-slideshow-image'
import Logo1 from '../SlideShowImages/Logo1.jpeg'
import Logo2 from '../SlideShowImages/Logo2.jpeg'
import Logo3 from '../SlideShowImages/Logo3.jpeg'
import Logo4 from '../SlideShowImages/Logo4.png'
import Logo5 from '../SlideShowImages/Logo5.jpeg'
import Logo6 from '../SlideShowImages/Logo6.png'
import Logo7 from '../SlideShowImages/Logo7.png'

const SlideShow2 = () => {
    return (
        <div>
            <h1></h1>
            <div className='slide-container'>
                <Fade>
                    <div className='each-fade'>
                        <div>
                            <img src={Logo1}/>
                        </div>
                    </div>
                    <div className='each-fade'>
                        <div>
                            <img src={Logo2}/>
                        </div>
                    </div>
                    <div className='each-fade'>
                        <div>
                            <img src={Logo3}/>
                        </div>
                    </div>
                    <div className='each-fade'>
                        <div>
                            <img src={Logo4}/>
                        </div>
                    </div>
                    <div className='each-fade'>
                        <div>
                            <img src={Logo5}/>
                        </div>
                    </div>
                    <div className='each-fade'>
                        <div>
                            <img src={Logo6}/>
                        </div>
                    </div>
                    <div className='each-fade'>
                        <div>
                            <img src={Logo7}/>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default SlideShow2