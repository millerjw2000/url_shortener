import React, {useEffect, useState} from "react"
import axios from "axios"
import { Link, useLocation } from "react-router-dom"
import { Logout } from "../components/Logout"
import { NewUrlForm } from "../components/NewUrlForm"
import { UrlList } from "../components/UrlList"

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
            if (res.status === 200) {
                setLoggedIn(true)
                setUrls(res.data)
            }
        }).catch(err => {
            if (err.response) {
                
            }
        })
    },[token])

    return (
        <>
            {(loggedIn) ? (
                <>
                    you are logged in
                    <UrlList urls={urls} setUrls={setUrls}/>
                    <NewUrlForm urls={urls} setUrls={setUrls}/>
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