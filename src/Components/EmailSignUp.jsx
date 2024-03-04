import React from 'react'

import './EmailSignUp.css'

import SibApiV3Sdk from 'sib-api-v3-sdk'

let defaultClient = SibApiV3Sdk.ApiClient.instance

let apiKey = defaultClient.authentications['api-key']
apiKey.apiKey = import.meta.env.VITE_APP_EMAIL_API_KEY
const storePassword = import.meta.env.VITE_APP_STORE_PASSWORD

const EmailSignUp = () => {
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [phoneInputVal, setPhoneInputVal] = React.useState('')
    const [info, setInfo] = React.useState(
        'Why did you click this link ? Maybe something caught your attention. Maybe you have great tastes. Most likely you know quality when you see it. I don’t know exactly; but you can leave your contact information to get added to our privileged access list, featuring special promos, discounts and preorder access. Join us at 3Playaa; find out what it means to Be Yourself. 💘'
    )
    const [displayStorePassword, setDisplayStorePassword] =
        React.useState(false)
    const [storePasswordInput, setStorePasswordInput] = React.useState('')

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/
        return re.test(email)
    }

    const validatePhone = (phone) => {
        const re = /^\d{10}$/
        return re.test(phone)
    }

    const fnSetPhoneInputVal = (val) => {
        if (val.length === 10 && validatePhone(val)) {
            setPhone(val)
            setPhoneInputVal(
                `(${val.slice(0, 3)}) ${val.slice(3, 6)}-${val.slice(6)}`
            )
        } else {
            setPhone('')
            setPhoneInputVal(val.replace(/\D/g, ''))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name === '' || email === '' || phone === '') {
            setInfo('Please enter all values.')
            return
        }
        if (!validateEmail(email)) {
            setInfo('Please enter a valid email address.')
            return
        }
        if (!validatePhone(phone)) {
            setInfo('Please enter a valid phone number.')
            return
        }
        setInfo('One second...')
        let apiInstance = new SibApiV3Sdk.ContactsApi()
        let createContact = new SibApiV3Sdk.CreateContact() // CreateContact | Values to create a contact
        createContact.email = email
        createContact.attributes = {
            FIRSTNAME: name,
            SMS: `+1${phone}`,
        }
        console.log(createContact)
        apiInstance.createContact(createContact).then(
            function (data) {
                console.log('API called successfully. Returned data: ' + data)
                setInfo("Thanks for signing up! We'll see you soon.")
                setEmail('')
                setName('')
                setPhone('')
                setPhoneInputVal('')
            },
            function (error) {
                setInfo('Something went wrong. Please try again later!')
                console.error(error)
            }
        )
    }

    const checkStorePassword = (password) => {
        if (password !== storePassword) {
            setInfo('Incorrect password.')
            return
        }
        localStorage.setItem('allowAccess', 'true')
        localStorage.setItem('lastAccess', new Date().toString())
        setDisplayStorePassword(false)
        window.location.href = '/'
    }

    return (
        <div className={'email-sign-up'}>
            <h3>{info}</h3>
            <form>
                <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Name'
                />
                <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email Address'
                />
                <input
                    type='tel'
                    value={phoneInputVal}
                    onChange={(e) => fnSetPhoneInputVal(e.target.value)}
                    placeholder='Phone Number'
                />
                <button onClick={handleSubmit}>Sign Up</button>
            </form>
            <p
                onClick={() => setDisplayStorePassword(!displayStorePassword)}
                className={'custom-link'}
            >
                View Store
            </p>
            {displayStorePassword && (
                <div className='view-store-form'>
                    <input
                        type='password'
                        placeholder='Store Password'
                        value={storePasswordInput}
                        onChange={(e) => setStorePasswordInput(e.target.value)}
                    />
                    <button
                        onClick={() => checkStorePassword(storePasswordInput)}
                    >
                        Submit
                    </button>
                </div>
            )}
        </div>
    )
}

export default EmailSignUp
