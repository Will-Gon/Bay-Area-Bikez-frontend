import React from 'react'
import Tracy1 from '../MeetImages/Tracy/Tracy1.jpeg'
import Tracy2 from '../MeetImages/Tracy/Tracy2.jpeg'
import Tracy3 from '../MeetImages/Tracy/Tracy3.jpeg'
import Tracy4 from '../MeetImages/Tracy/Tracy4.jpeg'
import Tracy5 from '../MeetImages/Tracy/Tracy5.jpeg'

const Tracy = () => {
    return (
        <div>
            <h1>Tracy Bike Meet</h1>
            <div>
                <img src={Tracy1} alt='Bike Img'/>
            </div>
            <div>
                <img src={Tracy2} alt='Bike Img'/>
            </div>
            <div>
                <img src={Tracy3} alt='Bike Img'/>
            </div>
            <div>
                <img src={Tracy4} alt='Bike Img'/>
            </div>
            <div>
                <img src={Tracy5} alt='Bike Img'/>
            </div>
        </div>
        
    )
} 

export default Tracy