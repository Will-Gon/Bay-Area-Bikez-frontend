import React from 'react'
// import { Link } from 'react-router-dom'
import Map from '../GoogleApi/Map'
import MeetPlaces from './MeetPlaces'

const Meets = ({user, meets}) => {
    //console.log(meets)
    return (
        <div>
            <h1>Meets Page</h1>
            <Map meets={meets}/>
            <div>
                <ul>
                    <MeetPlaces user={user}/>
                </ul>
            </div>
        </div> 
    )
}

export default Meets