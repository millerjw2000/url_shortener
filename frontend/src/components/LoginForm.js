import React, {useEffect, useState} from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

export function LoginForm() {

    const navigate = useNavigate()

    const [message,setMessage] = useState('not logged in!')

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
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

        const res = await axios.post(`http://localhost:8080/auth/login`, 
            {
                username: username,
                password: password
            }
        ).then(res=> {

            if (res.status == 200) {
                setUsername('')
                setPassword('')
                setErrorMessage('Login success!')
                localStorage.setItem('token',res.data.token)
                navigate('/user')
            }
        }).catch(err=> {

            if (err.response) {
                setErrorMessage('Invalid login credentials')
            }
        })    
    
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return (
        <>
            <div className='form'>
                <h1>Login : {message}</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={username} placeholder='username' required onChange={handleUsernameChange}/>
                    <input type='text' value={password} placeholder='password' required onChange={handlePasswordChange}/>
                    <input type='submit' value='login'/>
                </form>
                <Link to={'/register'}>Register here</Link>
                {errorMessage}
            </div>
        </>
    )
}