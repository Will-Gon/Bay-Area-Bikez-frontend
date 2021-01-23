import React from 'react'
import Daly1 from '../MeetImages/DalyCity/Daly1.jpeg'
import Daly2 from '../MeetImages/DalyCity/Daly2.jpeg'
import Daly3 from '../MeetImages/DalyCity/Daly3.jpeg'
import Daly4 from '../MeetImages/DalyCity/Daly4.jpeg'
import Daly5 from '../MeetImages/DalyCity/Daly5.jpeg'

const DalyCity = () => {
    return (
        <div>
            <h1>Daly City Bike Meet</h1>
            <div>
                <img src={Daly1} alt='Bike Img'/>
            </div>
            <div>
                <img src={Daly2} alt='Bike Img'/>
            </div>
            <div>
                <img src={Daly3} alt='Bike Img'/>
            </div>
            <div>
                <img src={Daly4} alt='Bike Img'/>
            </div>
            <div>
                <img src={Daly5} alt='Bike Img'/>
            </div>
        </div>
        
    )
} 

export default DalyCity