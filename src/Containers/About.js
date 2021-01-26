import React from 'react'
import Redwood2 from '../SlideShowImages/Redwood2.jpeg'
import Eastside2 from '../SlideShowImages/Eastside2.png'
import NorthBay2 from '../SlideShowImages/NorthBay2.jpeg'

const About = () => {
    return (
        <div>
            <h1>About Page</h1>
            <div>
                <img src={Redwood2} alt='Club Image'/>
                <p>The Redwood Riders MC is a co-ed group of fun loving folks who love to ride…drama free! We welcome all types of motorcycles over 650cc’s and riders of all skill levels. Been riding since the beginning of time (or somewhere in between)? If you enjoy a leisurely pace, great roads and hanging out with easy going, down to earth people, come check us out!</p>
            </div>
            <div>
                <img src={Eastside2} alt='Club Image'/>
                <p>Satudarah MC is an outlaw motorcycle club that has spread the globe since being founded in the Netherlands town of Moordrecht in 1990. It differs from most other outlaw motorcycle gangs in the fact that it welcomes all races into its club, owing to its historical creation by a group of Moluccans and Dutch friends.</p>
            </div>
            <div>
                <img src={NorthBay2} alt='Club Image'/>
                <p>Enthusiast Club of Off-Road and Street Bike Riders. We are actively involved with BLM and Forest Service land management. We Support Enduro & Cross Country Racing, Host Dual Sport, Street & Adventures Rides. Support local riding- Join a Club..!!!
</p>
            </div>
        </div>
    )
}

export default About