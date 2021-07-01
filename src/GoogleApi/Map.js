import React, { useState } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'
import mapStyles from '../GoogleApi/mapStyles'


const Map = ({meets}) => {
    const [selectedPlace, setSelectedPlace] = useState(null)
    return (
        <GoogleMap 
        defaultZoom={10} 
        defaultCenter={{ lat: 37.7258, lng: -122.1569 }}
        defaultOptions={{styles: mapStyles}}
        >
            {/* {meetsData.features.map((place) => (
                <Marker 
                key={place.properties.PARK_ID} 
                position={{ 
                    lat: place.geometry.coordinates[0], 
                    lng: place.geometry.coordinates[1]
                }}
                onClick={() => {
                    setSelectedPlace(place)
                }}
                />       
            ))} */}
           
           {meets.map((p) => (
               <Marker 
               key={p.id}
               position={{
                   lat: p.lat,
                   lng: p.lng
               }}
               onClick={() => {
                   setSelectedPlace(p)
               }}/>
           ))}

            {selectedPlace && (
                <InfoWindow
                position={{ 
                    lat: selectedPlace.lat, 
                    lng: selectedPlace.lng
                }}
                onCloseClick={() => {
                    setSelectedPlace(null)
                }}
                >
                    <div>
                        <h2>{selectedPlace.name}</h2>
                        <p>{selectedPlace.description}</p>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default function App({meets}) {
    return(
        <div className='map-container' style={{ width: "80vw", height: "60vh" }}>
            <WrappedMap 
            meets={meets}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCljdIRukrw4wxB0NV2PJBAr8Xs788hcI8`}
            loadingElement={<div style={{ height: "100%" }} />}
            containerElement={<div style={{ height: "100%" }} />}
            mapElement={<div style={{ height: "100%" }} />}
            />
        </div>
        
    )
} 


