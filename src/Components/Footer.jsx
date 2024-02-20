import React from 'react'
import './Footer.css'

import SibApiV3Sdk from 'sib-api-v3-sdk'

let defaultClient = SibApiV3Sdk.ApiClient.instance

let apiKey = defaultClient.authentications['api-key']
apiKey.apiKey = import.meta.env.VITE_APP_EMAIL_API_KEY

const Footer = () => {
    const [email, setEmail] = React.useState('')
    const [info, setInfo] = React.useState('Sign up for our newsletter:')

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/
        return re.test(email)
    }

    const addContact = () => {
        if (!validateEmail(email)) {
            setInfo('Please enter a valid email address.')
            return
        }
        let apiInstance = new SibApiV3Sdk.ContactsApi()
        let createContact = new SibApiV3Sdk.CreateContact() // CreateContact | Values to create a contact
        createContact.email = email
        apiInstance.createContact(createContact).then(
            function (data) {
                console.log('API called successfully. Returned data: ' + data)
                setInfo('See you soon!')
                setEmail('')
            },
            function (error) {
                setInfo('There was an error. Please try again.')
                console.error(error)
            }
        )
    }

    return (
        <footer>
            <div>
                <p>Copyright &copy; 2024, 3Playaa</p>
            </div>
            <form className={'footer-email-form'}>
                <p>{info}</p>
                <div>
                    <input
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type='button' onClick={addContact}>
                        Submit
                    </button>
                </div>
            </form>
        </footer>
    )
}

export default Footer
