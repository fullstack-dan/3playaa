import React, { useState } from 'react'
import './ContactPage.css'

const ContactPage = () => {
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission here
        console.log({ firstname, lastname, phoneNumber, email, message })
    }

    return (
        <div className={'contact-page'}>
            <div className={'contact-header'}>
                <h1>Contact Us</h1>
                <p>
                    We value your feedback and want to hear from you. Fill out
                    the form below and we will get back to you as soon as
                    possible.
                </p>
            </div>
            <form className={'contact-form'} onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input
                        type='text'
                        value={name}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Last Name:
                    <input
                        type='text'
                        value={lastname}
                        onChange={(e) => setLastName(e.target.value)}
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
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default ContactPage
