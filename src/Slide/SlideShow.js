import React, { Component } from 'react'
import { Slide } from 'react-slideshow-image'
import Harley1 from '../SlideShowImages/Harley1.jpg'
import Harley2 from '../SlideShowImages/Harley2.jpg'
import Harley3 from '../SlideShowImages/Harley3.jpg'
import Harley4 from '../SlideShowImages/Harley4.jpg'

class SlideShow extends Component {
     
    state = {
        autoPlay: true
    }

    zoomOutProperties = {
        idicators: true,
        scale: 0.4
    }

    render() {
        return (
            <div>
                <div>
                    <Slide scale={0.4} autoPlay={this.state.autoPlay} easing='ease'>
                        <div className='bike-slides'>
                            <img src={Harley1} alt='Bike Club' />
                        </div>
                        <div className='bike-slides'>
                            <img src={Harley2} alt='Bike Club'/>
                        </div>
                        <div className='bike-slides'>
                            <img src={Harley3} alt='Bike Club'/>
                        </div>
                        <div className='bike-slides'>
                            <img src={Harley4} alt='Bike Club'/>
                        </div>
                    </Slide>
                </div>
            </div>
        )
    }
}

export default SlideShow