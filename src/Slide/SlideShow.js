import React, { Component } from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import Redwood2 from '../SlideShowImages/Redwood2.jpeg'
import Eastside2 from '../SlideShowImages/Eastside2.png'
import NorthBay2 from '../SlideShowImages/NorthBay2.jpeg'

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
                            <img src={Redwood2} alt='Bike Club' />
                        </div>
                        <div className='bike-slides'>
                            <img src={Eastside2} alt='Bike Club'/>
                        </div>
                        <div className='bike-slides'>
                            <img src={NorthBay2} alt='Bike Club'/>
                        </div>
                    </Slide>
                </div>
            </div>
        )
    }
}

export default SlideShow