import React, { Component } from 'react'

class UpdateForm extends Component {

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
                    {this.state.errors.map(error => {
                        return <li key={error}>{error}</li>
                    })}
                </ul>
            </div>
        )
    }

    render() {
        const { username, password } = this.state
        return (
            <div className='update-page'>
                <h1>Update Form</h1>
                <div className='update-form'>
                    <div className='update-form-container'>
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
                            <button className='submit-btn' type='submit'>Update</button>
                        </form>
                    </div>
                </div>
                <div>
                    {this.state.errors ? this.handleErrors() : null}
                </div>
            </div>
        )
    }
}

export default UpdateForm