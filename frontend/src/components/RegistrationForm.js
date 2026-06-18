import React, {useEffect, useState} from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

export function RegistrationForm() {
    
    const navigate = useNavigate()

    const [message,setMessage] = useState('not logged in!')

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const [errorMessage,setErrorMessage] = useState("")

    const handleSubmit = async (e) => {
        
        e.preventDefault()
        setMessage('fart')

        for (let i=0; i < password.length; i++) {
            if (password[i] === ' ') {
                setErrorMessage('Password cannot contain spaces')
                return null
            }
        }

        for (let i=0; i < username.length; i++) {
            if (username[i] === ' ') {
                setErrorMessage('Username cannot contain spaces')
                return null
            }
        }

        if (password !== confirmPassword) {
            setErrorMessage('Passwords must match!')
            return null
        }

         if (username.length > 25) {
            setErrorMessage('Username must not exceed 25 chars')
            return null
        }

        const res = await axios.post(`http://localhost:8080/auth/register`, 
            {
                username: username,
                password: password
            }
        ).then(res=> {

            if (res.status == 200) {
                setUsername('')
                setPassword('')
                setConfirmPassword('')
                setErrorMessage('Registration success!')
                navigate('/')
            }
        }).catch(err=> {

            if (err.response) {
                setErrorMessage('Username is taken')
            }
        })    
    
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value)
    }

    return (
        <>
            <div className='form'>
                <h1>Register : {message}</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={username} placeholder='username' required onChange={handleUsernameChange}/>
                    <input type='text' value={password} placeholder='password' required onChange={handlePasswordChange}/>
                    <input type='text' value={confirmPassword} placeholder='confirm password' required onChange={handleConfirmPasswordChange}/>
                    <input type='submit' value='Register'/>
                </form>
                <Link to={'/'}>Login page</Link>
                {errorMessage}
            </div>
        </>
    )
}