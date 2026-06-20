import React, {useEffect, useState} from "react"
import axios from "axios"
import "./urllist.css"

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
            <h1>Your URLs</h1>
            {urls.map((url,idx)=>(
                <tr key={url.id}>
                    <td className='full_link'><a href={url.fullLink}>{url.fullLink}</a></td>
                    <td className='short_link'><a href={`http://localhost:3000/go/${url.code}`}>http://localhost:3000/go/{url.code}</a></td>
                    <td className='delete'><button onClick={(e)=>handleSubmit(url.id,e)}>delete</button></td>
                </tr>
            ))}
            {errorMessage}
        </div>
    )
}