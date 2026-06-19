import React, {useEffect, useState} from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"

export function Go() {

    const [outputMessage,setOutputMessage] = useState('Loading . . .')
    const {code} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8080/go/${code}`)
        .then(res => {
            window.location.href = res.data
        })
        .catch(err => {
            setOutputMessage('error')
        })
    },[code])

    return (
        <>
            {outputMessage}
        </>
    )
}