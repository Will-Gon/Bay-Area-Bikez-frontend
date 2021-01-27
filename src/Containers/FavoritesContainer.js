import React, { Component } from 'react'

class FavoritesContainer extends Component {
    addFaves = () => {
        return this.props.favorites.map((fav) => (
            //console.log(fav.place.name)
            <div className='bay-area-meets'>
                <img src={fav.place.image_url} alt='Place'/>
                <h2>{fav.place.name}</h2>
                <p>{fav.place.description}</p>
            </div>
        ))
    }
    
    render() {
        return (
            <div>
                <h1>Favorite Meet Cities</h1>
                {this.addFaves()}
            </div>
        )
    }
}

export default FavoritesContainer