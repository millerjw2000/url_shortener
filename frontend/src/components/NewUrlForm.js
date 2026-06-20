import React, {useEffect, useState} from "react"
import axios from "axios"
import './newurl.css'
import { GrAdd } from 'react-icons/gr'

export function NewUrlForm({ urls, setUrls }) {

    const [errorMessage,setErrorMessage] = useState('')
    const [urlText,setUrlText] = useState('')
    const token = localStorage.getItem('token')

    const handleUrlTextChange = (e) => {
        setUrlText(e.target.value)
    }

    const isUrl = (url) => { // this is unneeded i think
        try {
            new URL(url)
            return true
        } catch {
            return false
        }
    }

    const handleSubmit = async (e) => {
        
        e.preventDefault()

        const headers = {
            'Authorization' : `Bearer ${token}`
        }

        const res = axios.post('http://localhost:8080/enter',
            {
                fullLink: urlText
            }, {headers}
        ).then(res=> {
            if (res.status == 200) {
                setUrlText('')
                setUrls(res.data)
            }
        }).catch(err => {
            setErrorMessage('error')
        })

    }

    return (
        <div className='new_url_form'>
            <h1>Add a url</h1>
            <form onSubmit={handleSubmit}>
                <input type='url' value={urlText} placeholder='enter a url' required onChange={handleUrlTextChange}/>
                <button type='submit'><GrAdd className='icon' type='submit'/></button>
            </form>
            {errorMessage}
        </div>
    )
}