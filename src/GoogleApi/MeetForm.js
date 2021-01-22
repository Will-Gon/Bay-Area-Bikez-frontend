import React, { Component } from 'react'

class MeetForm extends Component {

    state = {
        date: '',
        location: '',
        meets: []
    }

    render() {
        return (
            <div>
                <h1>Create new meet!</h1>
                <form>
                    <div className='field'>
                        <input 
                        name='date'
                        value=''
                        // onChange={}
                        type='text'
                        placeholder='MM/DD/YYYY'
                        />
                    </div>
                    <div className='field'>
                        <input 
                        name='location'
                        value=''
                        // onChange={}
                        type='text'
                        placeholder='Location'
                        />
                    </div>
                    <button className='submit-btn' type='submit'>Create</button>
                </form>
            </div>
        )
    }
}

export default MeetForm

                 