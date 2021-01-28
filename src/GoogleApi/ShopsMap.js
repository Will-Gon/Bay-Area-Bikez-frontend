import React, { useState } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'
import * as shopsData from '../data/shops-location.json'

const Map = () => {
    const [selectedPlace, setSelectedPlace] = useState(null)
    return (
        <GoogleMap 
        defaultZoom={10} 
        defaultCenter={{ lat: 37.570008, lng: -122.391980 }}
        //defaultOptions={{styles: mapStyles}}
        >
            {shopsData.features.map((place) => (
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
            ))}
           
           {/* {meets.map((p) => (
               //console.log(p.lat)
               <Marker 
               key={p.id}
               position={{
                   lat: p.lat,
                   lng: p.lng
               }}
               onClick={() => {
                   setSelectedPlace(p)
               }}/>
           ))} */}

            {selectedPlace && (
                //console.log(selectedPlace.lat)
                <InfoWindow
                position={{ 
                    lat: selectedPlace.geometry.coordinates[0], 
                    lng: selectedPlace.geometry.coordinates[1]
                }}
                onCloseClick={() => {
                    setSelectedPlace(null)
                }}
                >
                    <div>
                        <h2>{selectedPlace.features.name}</h2>
                        <p>{selectedPlace.features.description}</p>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default function App() {
    return(
        <div className='map-container' style={{ width: "80vw", height: "60vh" }}>
            <WrappedMap 
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=`}
            loadingElement={<div style={{ height: "100%" }} />}
            containerElement={<div style={{ height: "100%" }} />}
            mapElement={<div style={{ height: "100%" }} />}
            />
        </div>
        
    )
} 
