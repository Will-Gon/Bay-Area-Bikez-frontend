import React from 'react'

const MeetCities = ({user, meets}) => {
    return (
        <div>
            <h1>Meet Cities!!!!</h1>
            {meets.map((place) => (
                <img src={place.image_url} alt='Place'/>
            ))}
        </div>
    )
}

export default MeetCities