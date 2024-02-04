import React, { useState } from 'react'
import './ContactPage.css'

const ContactPage = () => {
    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission here
        console.log({ name, phoneNumber, email, message })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </label>
            <label>
                Phone Number:
                <input
                    type='tel'
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
            </label>
            <label>
                Email:
                <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </label>
            <label>
                Message:
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
            </label>
            <input type='submit' value='Submit' />
        </form>
    )
}

export default ContactPage
