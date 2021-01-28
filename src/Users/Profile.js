import React, { useState } from 'react'
import Redwood2 from '../SlideShowImages/Redwood2.jpeg'
import ShopsMap from '../GoogleApi/ShopsMap'

const Profile = ({ user, meets }) => {
    const [showMap, setShowMap] = useState(false)
    
    const handleShow = (value) => {
        setShowMap(value)
    }
    return (
        <div className='profile-page'>
            <div className='profile-wrapper'>
                <div className='build-center'>
                    <h1>{user.username}'s Page</h1>
                    <img src={user.club.image_url} alt='Club'/>
                </div>  
                <div className='contents-grid'>  
                    <div className='build-aside'>
                        <h2>Club Name:</h2>
                        <h1>{user.club.name}</h1>
                        <h4>Upcoming Meets:</h4>   
                        {meets.map((p) => {
                            return <li>{p.date} - {p.name}</li>
                        })}
                    <div className='build-aside-btn'>
                    {showMap ?
                    <button onClick={() => handleShow(false)}>Close Map</button>:
                    <button onClick={() => handleShow(true)}>Shops Near By</button>}
                    </div>
                    </div> 
                    <div className='shops-map'>
                        {showMap && <ShopsMap />}
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Profile