import React from 'react'

const MeetCities = ({user, meets, addToFavorites, removeFavorite, favorites}) => {
    console.log(meets)
    return (
        <div>
            <h1>Meet Cities!!!!</h1>
            <div className='meets-wrapper'>
            {meets.map((place) => (
                <div className='bay-area-meets'>
                    key={place.id}
                    <img src={place.image_url} alt={place.name}/>
                    {favorites.find(favorite => favorite.place.id === place.id) ? 
                    <button onClick={() => removeFavorite(place)}>Unlike</button>
                    :
                    <button onClick={() => addToFavorites(user, place)}>Like</button>
                }
                </div>
            ))}
            </div>
        </div>
    )
}

export default MeetCities