import React from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import { formatRelative } from 'date-fns'
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete'
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from '@reach/combobox'
import '@reach/combobox/styles.css'
import mapStyles from './mapStyles'
import './Map.css'


const libraries = ['places']
const mapContainerStyle = {
    width: '100vw',
    height: '100vh'
}
const center = {
    lat: 37.570008,
    lng: -122.391980
}
const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true
}
export default function App() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: '',
        libraries,
    })
    const [markers, setMarkers] = React.useState([])
    const [selected, setSelected] = React.useState(null)

    const onMapClick = React.useCallback((e) => {
        setMarkers((current) => [
            ...current,
            {
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
                time: new Date(),
            }
        ])
    }, [])

    const mapRef = React.useRef()
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map
    }, [])

    const panTo = React.useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng })
        mapRef.current.setZoom(14)
    }, [])

    if (loadError) return 'Error loading maps'
    if (!isLoaded) return 'Loading Maps'
    return (
        <div>
            <h1 className='map-h1'>
                Meets {" "}
                <span role='img' aria-label='bike'>
                    🏍 
                </span>
            </h1>

            <Search panTo={panTo}/>

            <GoogleMap 
            mapContainerStyle={mapContainerStyle} 
            zoom={10} 
            center={center}
            options={options}
            onClick={onMapClick}
            onLoad={onMapLoad}
            >

                {markers.map(marker => (
                <Marker key={marker.time.toISOString()} 
                position={{lat: marker.lat, lng: marker.lng}}
                onClick={() => {
                    setSelected(marker)
                }}
                />
                ))}

                {selected ? (
                <InfoWindow position={{lat: selected.lat, lng: selected.lng}} 
                onCloseClick={() => {
                    setSelected(null)
                }}
                >
                    <div>
                        <h2>Meet Place!</h2>
                        <p>created {formatRelative(selected.time, new Date())}</p>  
                    </div>
                </InfoWindow>) : null}
            </GoogleMap>
        </div>
    )
}

function Search({ panTo }) {
    const {ready, value, suggestions: {status, data}, setValue, clearSuggestions} = usePlacesAutocomplete({
        requestOptions: {
            location: { lat: () => 37.570008, lng: () => -122.391980 },
            radius: 200 * 1000,
        },
    })

    return (
        <div className='search'>
    <Combobox 
    onSelect={async (address) => {
        setValue(address, false)
        clearSuggestions()
        try {
            const results = await getGeocode({ address })
            const { lat, lng } = await getLatLng(results[0])
            panTo({ lat, lng })
        } catch(error) {
            console.log('error!')
        }
    }}
    >
        <ComboboxInput 
        value={value} 
        onChange={(e) => {
            setValue(e.target.value)
        }}
        disabled={!ready}
        placeholder='Enter an address'
        />
        <ComboboxPopover>
            <ComboboxList>
            {status === "OK" && 
            data.map(({id, description}) => (
                <ComboboxOption key={id} value={description}/>
            ))}
            </ComboboxList>
        </ComboboxPopover>
    </Combobox>
    </div>
    )
}

//svg