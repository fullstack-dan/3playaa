import './Navbar.css'
import logo from '../assets/3PLAYAA_SMALL.png'

const Navbar = () => {
    const showMenu = () => {
        let x = document.getElementById('nav-links')
        if (x.style.display === 'flex') {
            x.style.display = 'none'
        } else {
            x.style.display = 'flex'
        }
    }

    return (
        <nav className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt='logo' />
            </div>
            <div className='nav-menu'>
                <a
                    href='javascript:void(0);'
                    className='hamburger-icon'
                    onClick={showMenu}
                >
                    M
                </a>
                <div id='nav-links'>
                    <a href='#news'>Shop</a>
                    <a href='#contact'>About</a>
                    <a href='#about'>Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
