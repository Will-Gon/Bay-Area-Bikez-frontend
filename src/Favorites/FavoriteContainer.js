import React from 'react'
import FavoriteCard from './FavoriteCard'

const FavoriteContainer = ({user, favorites, removeFavorite, meets}) => {
    //map seed(url)
    //console.log(user)
    return (
        <div>
            <h1>These are your Favorite Meets</h1>
            <FavoriteCard 
            user={user}
            favorites={favorites}
            removeFavorite={removeFavorite}
            meets={meets}
            />
        </div>
    )
}

export default FavoriteContainer