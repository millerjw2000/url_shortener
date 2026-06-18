import React, {useEffect, useState} from "react"
import axios from "axios"
import { Link, useLocation } from "react-router-dom"
import { Logout } from "../components/Logout"

export function User() {

    const location = useLocation()
    const token = localStorage.getItem('token')
    const [urls,setUrls] = useState([])

    const [loggedIn, setLoggedIn] = useState(false)
    const [message,setMessage] = useState('dsadsadsa')

    useEffect(() => {
        
        const headers = {
            'Authorization' : `Bearer ${token}`
        }

        const res = axios.get(`http://localhost:8080/getAll`, { headers })
        .then(res => {
            if (res.status == 200) {
                setLoggedIn(true)
                setUrls(res.data)
            }
        }).catch(err => {
            if (err.response) {
                
            }
        })
    })

    return (
        <>
            {(loggedIn) ? (
                <>
                    you are logged in
                    {urls.map((url,idx)=>(
                        <li>{url.fullLink}</li>
                    ))}
                    <Logout/>
                </>
            ) : (
                <>
                    You are not logged in!
                </>
            )}
        </>
    )
}