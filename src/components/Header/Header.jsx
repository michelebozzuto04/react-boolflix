import { IoNotifications, IoSearch, IoSearchOutline, IoSearchSharp } from 'react-icons/io5'
import logo from '../../assets/boolflix_logo.png'
import './Header.css'
import menu from '../../utils/menu'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

function Header({ searchInput, setSearchInput, handleSearch }) {

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
                    <Link className='icon' to={"/explore"}>
                        <IoSearch type='submit' size={25} color='white' />
                    </Link>

                    <div className='icon' style={{ position: 'relative', display: 'flex' }}>
                        <IoNotifications size={25} color='white' />
                        <span className="notification">1</span>
                    </div>

                    <div className='icon'>
                        <a>ACCEDI</a>
                    </div>

                    <div className='icon' style={{ width: 30, verticalAlign: 'middle' }}>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' />
                    </div>
                </div>
            </header >
        </div >
    )
}

export default Header