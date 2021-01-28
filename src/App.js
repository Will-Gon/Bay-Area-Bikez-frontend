import React from 'react';
import './App.css';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'

import Login from './Auth/Login'
import Signup from './Auth/Signup'

import About from './Containers/About'
import Home from './Containers/Home'
import Navbar from './Containers/Navbar'
import notFound from './Containers/notFound'
import Bikes from './Containers/Bikes'
import Meets from './Containers/Meets'
import MeetCities from './Containers/MeetCities'
import Profile from './Users/Profile'
import FavoritesContainer from './Containers/FavoritesContainer'
import UpdateForm from './Containers/UpdateForm'
// import * as meetsData from './data/meet-location.json'


import Sf from './MeetContainers/Sf'
import DalyCity from './MeetContainers/DalyCity'
import HMB from './MeetContainers/HMB'
import SanMateo from './MeetContainers/SanMateo'
import Oakland from './MeetContainers/Oakland'
import SanLeandro from './MeetContainers/SanLeandro'
import Tracy from './MeetContainers/Tracy'
import Livermore from './MeetContainers/Livermore'
import Berkeley from './MeetContainers/Berkeley'
import Dublin from './MeetContainers/Dublin'
import WalnutCreek from './MeetContainers/WalnutCreek'
import Richmond from './MeetContainers/Richmond'

class App extends React.Component {
  
  state = {
    user: {
      username: '',
      club: {
        name: ''
      }
    },
    token: '',
    favorites: [],
    meets: [],
    error: null
  }

  componentDidMount() {
    let token = localStorage.getItem('token')
    if (token) {
      fetch('http://localhost:3000/profile', {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          user: data.user, // Check Serializer attributes
          favorites: data.user.likes // Check Serializer attributes
        })
      })
    }
    fetch('http://localhost:3000/places')
    .then(res => res.json())
    .then(data => this.setState({
      meets: data
    }))
  }

  renderForm = (routerProps) => {
    if (routerProps.location.pathname === '/login') {
      return <Login handleSubmit={this.handleLogin} />
    } else if (routerProps.location.pathname === '/signup'){
      return <Signup handleSubmit={this.handleSignup} />
    }
  }

  handleLogin = (info) => {
    //Need to check URL
    this.handleSigninFetch(info, 'http://localhost:3000/login')
  }

  handleSignup = (info) => {
    //Need to check URL
    this.handleSignupFetch(info, 'http://localhost:3000/users')
  }

  handleSigninFetch = (info, request) => {
    fetch(request, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: info.username,
        password: info.password
      })
    })
    .then(res => res.json())
    .then(data => {
      //console.log(data)
      if (data.user) {
        localStorage.setItem('token', data.token)
        this.setState({
          user: data.user,//Need to confirm
          error: null
        }, () => {
          this.props.history.push('/profile')
        })
      } else {
        //console.log(data)
        this.setState({
          error: data.error
        })
      }
    })
    .catch(errors => console.log(errors))
  }

  handleSignupFetch = (info, request) => {
    // console.log(info)
    fetch(request, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: info.username,
        password: info.password,
        club_name: info.clubName
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      localStorage.setItem('token', data.token)
      this.setState({
        user: data.user 
      }, () => {
        this.props.history.push('/')
      })
    })
    .catch(errors => console.log(errors))
  }

  handleLogout = () => {
    localStorage.removeItem('token')
    this.setState({
      user: {
        username: '',
        club: {
          name: ''
        }
      } 
    })
    return <Redirect to='/' push={true} />
  }

  addToFavorites = (user, place) => {
    console.log(place)
    const token = localStorage.getItem('token')
    fetch('http://localhost:3000/likes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer${token}`
      }, 
      body: JSON.stringify({place_id: place.id, user_id: user.id})
    })
    .then(res => res.json())
    .then(data => {
      //console.log(data)
      this.setState(prevState => {
        return {
          favorites: [...prevState.favorites, data] //Need to double check attributes
        }
      })
    })
  }

  removeFavorite = (place) => {
    const fav = this.state.favorites.find(favorite => favorite.place.id === place.id)
    console.log(place)
    fetch(`http://localhost:3000/likes/${fav.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState(prevState => {
        return {
          favorites: prevState.favorites.filter(favorite => favorite.place.id !== place.id)//Need to double check attributes
        }
      })
    })
  }

  updateProfile = (profile) => {
    const token = localStorage.getItem('token')
    fetch(`http://localhost:3000/users/${this.state.user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        username: profile.username,
        password: profile.password
      })
    })
    .then(res => res.json())
    .then(profile => {
      // console.log(profile.user)
      this.setState({
        user: profile.user //NEED TO DOUBLE CHECK ATTRIBUTES
      }, () => {
         this.props.history.push('/profile')
      })
    })
  }

  render() {
    const { user, favorites, meets } = this.state
    return(
      <div className='App'>
        <Navbar user={user} />
        <div className='body'>
        {this.state.error && <p className='error'>{this.state.error}</p>}
        <Switch>
          <Route exact path='/' render={() => <Home user={user} />} />
          <Route exact path='/about' render={() => <About />} />
          <Route exact path='/login' component={this.renderForm}/>
          <Route exact path='/signup' component={this.renderForm}/>
          <Route exact path='/logout' component={() => this.state.user ? this.handleLogout() : <Redirect to='/' />} />
          <Route exact path='/bikes' render={() => <Bikes />} />
          <Route exact path='/meets' render={() => <Meets meets={meets} user={user}/>} />
          <Route exact path='/places_to_like' render={() => <MeetCities user={user} meets={meets} addToFavorites={this.addToFavorites} removeFavorite={this.removeFavorite} favorites={favorites}/>} />
          <Route exact path='/update' render={() => <UpdateForm handleSubmit={this.updateProfile}/>} />
          <Route exact path='/profile' render={() => <Profile user={user} meets={meets}/>} />
          <Route exact path='/likes' render={() => <FavoritesContainer user={user} favorites={favorites} />} />

          <Route exact path='/sf_meet' render={(props) => <Sf {...props} meets={meets.filter(meet => meet.name === 'San Francisco, Ca')}/>} />
          <Route exact path='/daly_city_meet' render={(props) => <DalyCity {...props} meets={meets.filter(meet => meet.name === 'Daly City, Ca')}/>} />
          <Route exact path='/hmb_meet' render={(props) => <HMB {...props} meets={meets.filter(meet => meet.name === 'Half Moon Bay, Ca')}/>} />
          <Route exact path='/san_mateo_meet' render={(props) => <SanMateo {...props} meets={meets.filter(meet => meet.name === 'San Mateo, Ca')}/>} />
          <Route exact path='/oakland_meet' render={(props) => <Oakland {...props} meets={meets.filter(meet => meet.name === 'Oakland, Ca')}/>} />
          <Route exact path='/san_leandro_meet' render={(props) => <SanLeandro {...props} meets={meets.filter(meet => meet.name === 'San Leandro, Ca')}/>} />
          <Route exact path='/tracy_meet' render={(props) => <Tracy {...props} meets={meets.filter(meet => meet.name === 'Tracy, Ca')}/>} />
          <Route exact path='/livermore_meet' render={(props) => <Livermore {...props} meets={meets.filter(meet => meet.name === 'Livermore, Ca')}/>} />
          <Route exact path='/berkeley_meet' render={(props) => <Berkeley {...props} meets={meets.filter(meet => meet.name === 'Berkeley, Ca')}/>} />
          <Route exact path='/dublin_meet' render={(props) => <Dublin {...props} meets={meets.filter(meet => meet.name === 'Dublin, Ca')}/>} />
          <Route exact path='/walnut_creek_meet' render={(props) => <WalnutCreek {...props} meets={meets.filter(meet => meet.name === 'Walnut Creek, Ca')}/>} />
          <Route exact path='/richmond_meet' render={(props) => <Richmond {...props} meets={meets.filter(meet => meet.name === 'Richmond, Ca')}/>} />

          <Route component={notFound} />
        </Switch> 
        </div>
      </div>
    )
  }
  
}

export default withRouter(App)
