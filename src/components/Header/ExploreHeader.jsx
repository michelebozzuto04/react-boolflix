import { IoNotifications, IoSearchOutline, IoSearchSharp } from 'react-icons/io5'
import logo from '../../assets/boolflix_logo.png'
import './Header.css'
import menu from '../../utils/menu'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

function ExploreHeader({ searchInput, setSearchInput, handleSearch }) {

    return (
        <div style={{ position: 'sticky', top: 0, left: 0, zIndex: 1000, backgroundColor: 'rgba(0, 0, 0, 0.9)' }}>
            <div className="container">
                <header className='headerContainer'>
                    <a style={{ width: 200 }} href='/'>
                        <img className='logo' src={logo} />
                    </a>

                    <ul style={{ width: 'auto', flexGrow: 1, justifyContent: 'start', marginLeft: 30 }} className="menuContainer">
                        {menu.map((menuItem, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={menuItem.path}>{menuItem.name}</NavLink>
                                </li>
                            )
                        })}
                    </ul>

                    <div style={{ width: '33%', justifyContent: 'flex-end' }} className="actionsContainer">
                        <div className="searchContainer">
                            <form onSubmit={(e) => handleSearch(e)}>
                                <input
                                    type='text'
                                    placeholder='Cerca qualcosa...'
                                    className='searchInput'
                                    value={searchInput}
                                    onChange={(e) => setSearchInput(e.target.value)}
                                />
                                <button className='searchButton' type='submit'>
                                    <IoSearchOutline type='submit' size={25} color='white' />
                                </button>
                            </form>
                        </div>

                        <div className='icon'>
                            <a>ACCEDI</a>
                        </div>

                        <div className='icon' style={{ position: 'relative', display: 'flex' }}>
                            <IoNotifications className='icon' size={25} color='white' />
                            <span className="notification">1</span>
                        </div>

                        <div className='icon' style={{ width: 30, verticalAlign: 'middle' }}>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' />
                        </div>
                    </div>
                </header>
            </div>
        </div >
    )
}

export default ExploreHeader