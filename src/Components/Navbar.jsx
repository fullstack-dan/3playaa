import './Navbar.css'
import logo from '../assets/3PLAYAA_SMALL.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const showMenu = () => {
        let x = document.getElementById('nav-links')
        if (x.style.display === 'flex') {
            x.style.display = 'none'
        } else {
            x.style.display = 'flex'
        }
    }

    const closeMenu = () => {
        let x = document.getElementById('nav-links')
        if (x.style.display === 'flex') {
            x.style.display = 'none'
        }
    }

    return (
        <nav className='navbar'>
            <div className='nav-logo'>
                <Link to='/' onClick={closeMenu}>
                    <img src={logo} alt='3PLAYAA' />
                </Link>
            </div>
            <div className='nav-menu'>
                <a className='hamburger-icon' onClick={showMenu}>
                    M
                </a>
                <div id='nav-links'>
                    <Link to='/shop' onClick={closeMenu}>
                        Shop
                    </Link>
                    <Link to='/about' onClick={closeMenu}>
                        About
                    </Link>
                    <Link to='/contact' onClick={closeMenu}>
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
