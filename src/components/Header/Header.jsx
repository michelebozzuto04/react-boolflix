import React from 'react'
import './Header.css'

function Header({ searchInput, setSearchInput, handleSearch }) {
    return (
        <header className='headerContainer'>
            <h1>Boolflix</h1>

            <form onSubmit={(e) => handleSearch(e)}>
                <input
                    type='text'
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <button type='submit'>Search</button>
            </form>
        </header>
    )
}

export default Header