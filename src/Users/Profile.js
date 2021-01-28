import React from 'react'
import Redwood2 from '../SlideShowImages/Redwood2.jpeg'
import ShopsMap from '../GoogleApi/ShopsMap'

const Profile = ({ user, meets }) => {
    //console.log(meets)
    return (
        <div>
            <h1>{user.username}'s Page</h1>
            <div className='build-center'>
                <img src={user.club.image_url} alt='Club'/>
            </div>     
            <div className='build-aside'>
                <h2>Club Name:</h2>
                <h1>{user.club.name}</h1>
                <h4>Upcoming Meets:</h4>   
                {meets.map((p) => {
                    return <li>{p.date} - {p.name}</li>
                })}
            </div> 
            <div className='build-aside'>
            <a className='li-link' href='/shops_map'>Near by Shops</a>
            </div>
            {/* <div>
                <ShopsMap />
            </div> */}
        </div>
    )
}

export default Profile