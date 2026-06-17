import React, {useEffect, useState} from "react"
import { Link, useNavigate } from "react-router-dom"

export function LoginForm() {

    const navigate = useNavigate()

    const [message,setMessage] = useState('not logged in!')

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [errorMessage,setErrorMessage] = useState("")

    const handleSubmit = async (e) => {
        
        e.preventDefault()

        setMessage('logged in!')
        setUsername('')
        setPassword('')
    
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return (
        <>
            <div className='login_form'>
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