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

import Profile from './Users/Profile'

class App extends React.Component {
  
  state = {
    user: null,
    token: '',
    favorites: []
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
          favorites: data.likes // Check Serializer attributes
        })
      })
    }
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
        'Content-Type': 'appliction/json'
      },
      body: JSON.stringify({
        username: info.username,
        password: info.password
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      localStorage.setItem('token', data.token)
      this.setState({
        user: data.user //Need to confirm
      }, () => {
        this.props.history.push('/')
      })
    })
    .catch(errors => console(errors))
  }

  handleSignupFetch = (info, request) => {
    fetch(request, {
      method: 'POST',
      headers: {
        'Content-Type': 'application.json'
      },
      body: JSON.stringify({
        username: info.username,
        password: info.password
      })
    })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem('token', data.token)
      this.setState({
        user: data.user //Need to double check attributes
      }, () => {
        this.props.history.push('/')
      })
    })
    .catch(errors => console.log(errors))
  }

  handleLogout = () => {
    localStorage.removeItem('token')
    this.setState({
      user: null
    })
    return <Redirect to='/' push={true} />
  }

  addToFavorites = (place) => {
    const token = localStorage.getItem('token')
    fetch('http://localhost:3000/favorites', {
      methos: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer${token}`
      }, 
      body: JSON.stringify({place_id: place.id, user_id: this.state.user.id})
    })
    .then(res => res.json())
    .then(data => {
      this.setState(prevState => {
        return {
          favorites: [...prevState.favorites, data.place] //Need to double check attributes
        }
      })
    })
  }

  removeFavorite = (place) => {
    const fav = this.state.favorites.find(favorite => favorite.id === place.id)
    fetch(`http://localhost:3000/favorites/${fav.fav.id}`, {
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
          favorites: prevState.favorites.filter(favorite => favorite.id !== data.place.id)//Need to double check attributes
        }
      })
    })
  }

  updateProfile = (profile) => {
    const token = localStorage.getItem('token')
    fetch(`http://locqalhost:3000/users/${this.state.user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`
      },
      body: JSON.stringify({
        username: profile.username,
        password: profile.password
      })
    })
    .then(res => res.json())
    .then(profile => {
      this.setState({
        users: profile.data.attributes //NEED TO DOUBLE CHECK ATTRIBUTES
      })
    })
  }

  render() {
    const { user, favorites } = this.state
    return(
      <div className='App'>
        {/* <Login /> */}
        <Navbar user={user} />
        <div className='body'>

        <Switch>
          <Route exact path='/' render={() => <Home user={user} />} />
          <Route exact path='/about' render={() => <About />} />
          <Route exact path='/login' component={this.renderForm}/>
          <Route exact path='/signup' component={this.renderForm}/>
          <Route exact path='/logout' component={() => this.state.user ? this.handleLogout() : <Redirect to='/' />} />
          <Route exact path='/bikes' render={() => <Bikes />} />
        </Switch> 
        </div>
      </div>
    )
  }
  
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default withRouter(App)
