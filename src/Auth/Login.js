import React, { Component } from 'react'

class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = (e) => {
        const {name, value} = e.target 
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault() 
        this.props.handleSubmit(this.state)
    }

    handleErrors = () => {
        return (
            <div>
                <ul>
                    {this.state.error.map(error => {
                        return <li key={error}>{error}</li>
                    })}
                </ul>
            </div>
        )
    }

    render() {
        const { username, password } = this.state
        return (
            <div className='login-page'>
                <h1>Log in</h1>
                <div className='login-form'>
                    <div className='form-container'>
                        <form onSubmit={this.handleSubmit}>
                            <br/>
                            <br/>
                            <input 
                                name='username' 
                                value={username}
                                type='text' 
                                placeholder='Username'
                                onChange={this.handleChange}
                                />
                                <br/>
                                <input 
                                name='password'
                                value={password}
                                type='password'
                                placeholder='Password'
                                onChange={this.handleChange}
                                />
                                <br/>
                                <br/>
                                <button className='submit-btn' type='submit'>Log in</button>
                                <div>
                                    Or <a className='to-link' href='/signup'>Sign Up</a>
                                </div> 
                        </form>
                    </div>
                </div>
                <div>
                    {this.state.error ? this.handleErrors() : null}
                </div>
            </div>
        )
    }
}

export default Login

// {/* <input 
//                     name='username' 
//                     value={username}
//                     type='text' 
//                     placeholder='Username'
//                     onChange={this.handleChange}
//                     />
//                     <br/>
//                     <input 
//                     name='password'
//                     value={password}
//                     type='password'
//                     placeholder='Password'
//                     onChange={this.handleChange}
//                     />
//                     <br/>
//                     <button className='submit-btn' type='submit'>Log in</button>
//                     <div>
//                         Or <a className='to-link' href='/signup'>Sign Up</a>
//                     </div> */}