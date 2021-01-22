import React from 'react'
import Map from '../GoogleApi/Map'
import * as meetsData from '../data/meet-location.json'

const Meets = ({user}) => {
    return (
        <div>
            <h1>Meets Page</h1>
            <Map />
            <div>
                <ul>
                    {meetsData.features.map(place => {
                        return <li>{place.properties.NAME}</li>
                    })}
                </ul>
            </div>
        </div> 
    )
}

export default Meets