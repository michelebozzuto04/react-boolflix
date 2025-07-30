import { IoNotifications, IoSearchOutline, IoSearchSharp } from 'react-icons/io5'
import logo from '../../assets/boolflix_logo.png'
import './Header.css'
import menu from '../../utils/menu'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

function ExploreHeader({ searchInput, setSearchInput, handleSearch }) {

    return (
        <div className="container" style={{ position: 'sticky', top: 0, left: 0, zIndex: 1000 }}>
            <header className='headerContainer'>
                <a style={{ width: '33%' }} href='/'>
                    <img className='logo' src={logo} />
                </a>

                <ul style={{ width: '33%', justifyContent: 'center' }} className="menuContainer">
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

                    <IoNotifications className='icon' size={25} color='white' />
                </div>
            </header>
        </div>
    )
}

export default ExploreHeader