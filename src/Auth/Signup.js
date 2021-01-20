import React, { Component } from 'react'

class Signup extends Component {
    
    state = {
        username: '',
        password: ''
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
            <div className='signup-form'>
                <h1>Sign Up</h1>
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
                    <button className='submit-btn' type='submit'>Sign Up</button>
                </form>
                <div>
                    Already a member, <a className='to-link' href='/login'>Log In</a> here!
                </div>
            </div>
        )
    }
}

export default Signup