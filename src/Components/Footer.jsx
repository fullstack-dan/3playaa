import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div>
                <p>Copyright &copy; 2024, 3Playaa</p>
            </div>
            <form className={'footer-email-form'}>
                <p>Sign up for our newsletter:</p>
                <div>
                    <input type='email' placeholder='Email Address' />
                    <button>Sign Up</button>
                </div>
            </form>
        </footer>
    )
}

export default Footer
