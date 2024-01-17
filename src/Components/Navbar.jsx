import './Navbar.css'
import logo from '../assets/3PLAYAA_SMALL.png'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt='logo' />
            </div>
            <div className='nav-links'>
                <a href='/'>Home</a>
                <a href='/about'>Shop</a>
                <a href='/about'>About</a>
                <a href='/contact'>Contact</a>
            </div>
        </nav>
    )
}

export default Navbar
