import React from 'react'
import Walnut1 from '../MeetImages/WalnutCreek/Walnut1.jpeg'
import Walnut2 from '../MeetImages/WalnutCreek/Walnut2.jpeg'
import Walnut3 from '../MeetImages/WalnutCreek/Walnut3.jpeg'
import Walnut4 from '../MeetImages/WalnutCreek/Walnut4.jpeg'
import Walnut5 from '../MeetImages/WalnutCreek/Walnut5.jpeg'

const WalnutCreek = () => {
    return (
        <div>
            <h1>Walnut Creek Bike Meet</h1>
            <div>
                <img src={Walnut1} alt='Bike Img'/>
            </div>
            <div>
                <img src={Walnut2} alt='Bike Img'/>
            </div>
            <div>
                <img src={Walnut3} alt='Bike Img'/>
            </div>
            <div>
                <img src={Walnut4} alt='Bike Img'/>
            </div>
            <div>
                <img src={Walnut5} alt='Bike Img'/>
            </div>
        </div>
        
    )
} 

export default WalnutCreek