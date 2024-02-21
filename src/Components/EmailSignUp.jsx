import React from 'react'

import './EmailSignUp.css'

import SibApiV3Sdk from 'sib-api-v3-sdk'

let defaultClient = SibApiV3Sdk.ApiClient.instance

let apiKey = defaultClient.authentications['api-key']
apiKey.apiKey = import.meta.env.VITE_APP_EMAIL_API_KEY

const EmailSignUp = () => {
    const [email, setEmail] = React.useState('')
    const [info, setInfo] = React.useState('Be the first to know:')

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/
        return re.test(email)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
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
                setInfo("Thanks for signing up! We'll see you soon.")
                setEmail('')
            },
            function (error) {
                setInfo('There was an error. Please try again.')
                console.error(error)
            }
        )
    }

    return (
        <div className={'email-sign-up'}>
            <h1>{info}</h1>
            <form>
                <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email Address'
                />
                <button onClick={handleSubmit}>Sign Up</button>
            </form>
            <p>
                Secure privileged access to pre-launch items 72 hours before our
                public release. These exclusive offerings will be off-limits
                during the public launch.
            </p>
            <p>
                By submitting this form and signing up for emails, you consent
                to receive marketing email messages (e.g. promos, cart
                reminders) from 3Playaa at the email provided. Consent is not a
                condition of purchase. Msg frequency varies. Unsubscribe at any
                time by replying STOP or clicking the unsubscribe link (where
                available).
            </p>
        </div>
    )
}

export default EmailSignUp
