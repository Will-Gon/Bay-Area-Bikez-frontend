import React, { Component } from 'react'
import { Slide } from 'react-slideshow-image'

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
                            <img />
                        </div>
                        <div className='bike-slides'>
                            <img alt='Bike Club'/>
                        </div>
                        <div className='bike-slides'>
                            <img alt='Bike Club'/>
                        </div>
                        <div className='bike-slides'>
                            <img alt='Bike Club'/>
                        </div>
                    </Slide>
                </div>
            </div>
        )
    }
}

export default SlideShow