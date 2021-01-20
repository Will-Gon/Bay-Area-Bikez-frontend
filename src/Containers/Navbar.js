import React from 'react'
// need to npm install router 
//just wrote this to out while I was thinking about it
import { Link } from 'react-router-dom'

const Navbar = ({user}) => {

    return (
        <div className='navbar'>
            <div className='nav-right'>
                <a className='navlink' href='/'>Home</a>
                <a className='navlink' href='/about'>About</a>
                <a className='navlink' href='/bikes'>Bikes</a>
                {
                    !user ?
                    <>
                    <div className='dropdown'>
                        <button className='dropbtn'>Account</button>
                        <div className='dropdown-content'>
                            <a className='navlink' href='/login'>Log In</a>
                            <a className='navlink' href='/signup'>Sign Up</a>
                        </div>
                    </div>
                    </>
                    :
                    <>
                    <a className='navlink' href='/likes'>Liked Places</a>
                    <div className='dropdown'>
                        <button className='dropbtn'>{user.username}</button>
                        <div className='dropdown-content'>
                            <Link className='navlink' to='/new_meet'>Create Meet</Link>
                            <Link className='navlink' to='/favorite'>Favorites</Link>
                            <Link className='navlink' to='/profile'>Profile</Link>
                            <Link className='navlink' to='/logout'>Log Out</Link>
                        </div>
                    </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Navbar