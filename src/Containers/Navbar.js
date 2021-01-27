import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({user}) => {

    return (
        <div className='navbar'>
            <div className='nav-right'>
                <a className='navlink' href='/'>Home</a>
                <a className='navlink' href='/about'>About</a>
                <a className='navlink' href='/bikes'>Bikes</a>
                {user.username === '' ?
                    <>
                        <div className='nav-right'>
                            <div className='dropdown'>
                                <button className='dropbtn'>Account</button>
                                <div className='dropdown-content'>
                                    <a className='navlink' href='/login'>Log In</a>
                                    <a className='navlink' href='/signup'>Sign Up</a>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <a className='navlink' href='/meets'>Meets</a>
                        <div className='dropdown'>
                            <button className='dropbtn'>{user.username}</button>
                            <div className='dropdown-content'>
                                <Link className='navlink' to='/places_to_like'>Cities</Link>
                                <Link className='navlink' to='/likes'>Favorites</Link>
                                <Link className='navlink' to='/profile'>Profile</Link>
                                <Link className='navlink' to='/update'>Update Profile</Link>
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