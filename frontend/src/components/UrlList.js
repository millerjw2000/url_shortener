import React, {useEffect, useState} from "react"
import axios from "axios"

export function UrlList({ urls, setUrls }) {

    const [errorMessage,setErrorMessage] = useState('')
    const token = localStorage.getItem('token')

    const handleSubmit = async (id,e) => {
        
        e.preventDefault()

        const headers = {
            'Authorization' : `Bearer ${token}`
        }
        
        const res = axios.delete(`http://localhost:8080/delete`,
            {
                headers,
                data: {
                    id: id
                }
            }
        ).then(res=> {
            if (res.status == 200) {
                setUrls(res.data)
            }
        }).catch(err => {
            setErrorMessage('error')
        })

    }

    return (
        <div className='url_list'>
            {urls.map((url,idx)=>(
                <li key={url.id}>{url.fullLink} <a href={`http://localhost:3000/go/${url.code}`}>http://localhost:3000/go/{url.code}</a><button onClick={(e)=>handleSubmit(url.id,e)}>delete</button></li>
            ))}
            {errorMessage}
        </div>
    )
}