import React from 'react'

import './EmailSignUp.css'

const EmailSignUp = () => {
    const [email, setEmail] = React.useState('')

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/
        return re.test(email)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validateEmail(email)) {
            console.log('Email is valid')
        } else {
            console.log('Email is invalid')
        }
    }

    return (
        <div className={'email-sign-up'}>
            <h1>Be the first to know</h1>
            <form>
                <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email Address'
                />
                <button onClick={handleSubmit}>Sign Up</button>
            </form>
        </div>
    )
}

export default EmailSignUp
