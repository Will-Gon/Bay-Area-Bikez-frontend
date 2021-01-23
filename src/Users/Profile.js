import React from 'react'

const Profile = ({user}) => {
    //console.log(user)
    return (
        <div>
            <h1>{user.username}'s Page</h1>
        <div>
            <h1>{user.club.name}</h1>
        </div>
            
        </div>
    )
}

export default Profile