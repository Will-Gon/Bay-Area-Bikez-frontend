import React, { Component } from 'react'

class FavoritesContainer extends Component {
    addFaves = () => {
        return this.props.favorites.map((fav) => (
            //console.log(fav.place.image_url)
            <div className='bay-area-meets'>
                <a className='navlink' href={fav.place.name}>
                <img src={fav.place.image_url} alt='Place'/>
                </a>
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