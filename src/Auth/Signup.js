import React, { Component } from 'react'

class Signup extends Component {
    
    state = {
        username: '',
        password: '',
        clubName: 'NorthBay Bikez'
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.handleSubmit(this.state)
    }

    redirect = () => {
        this.props.history.push('/')
    }

    render() {
        const { username, password } = this.state
        return (
            <div className='signup-page'>
                <h1>Sign Up</h1>
                <div className='signup-form'>
                    <div className='form-container'>
                    <form onSubmit={this.handleSubmit}>
                        <div className='field'>
                            <input 
                            name='username'
                            value={username}
                            onChange={this.handleChange}
                            type='text'
                            placeholder='Username'
                            />
                        </div>
                        <div className='field'>
                            <input 
                            name='password'
                            value={password}
                            onChange={this.handleChange}
                            type='password'
                            placeholder='Password'
                            />
                        </div>
                        <div className='field'>
                            <h4>Select your club!</h4>
                            <select name='clubName' onChange={this.handleChange}>
                                <option>NorthBay Bikez</option>
                                <option>EastBay Bikez</option>
                                <option>Redwood Bikez</option>
                            </select>
                        </div>
                        <button className='submit-btn' type='submit'>Sign Up</button>
                    </form>
                    </div>
                </div>
                <div>
                    Already a member, <a className='to-link' href='/login'>Log In</a> here!
                </div>
            </div>
        )
    }
}

export default Signup