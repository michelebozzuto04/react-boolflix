import { IoNotifications, IoSearchSharp } from 'react-icons/io5'
import logo from '../../assets/boolflix_logo.png'
import './Header.css'

function Header({ searchInput, setSearchInput, handleSearch }) {

    return (
        <div className="container" style={{ position: 'sticky', top: 0, left: 0, zIndex: 1000 }}>
            <header className='headerContainer'>
                <a href='/'>
                    <img className='logo' src={logo} />
                </a>

                <div className="actionsContainer">
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
                                <IoSearchSharp type='submit' size={25} color='white' />
                            </button>
                        </form>
                    </div>

                    <IoNotifications size={25} color='white' />
                </div>
            </header>
        </div>
    )
}

export default Header