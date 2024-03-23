import React, { useState } from 'react'
import { Form, Button, Card, Col, Container, Row } from 'react-bootstrap'
import { debounce } from "lodash";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { login } from '../Redux/Actions/Actions';
import upload from './uploadfile.zip'
import upload1 from './uploadfile1.zip'
import upload2 from './uploadfile2.zip'
import upload3 from './uploadfile3.zip'
import upload4 from './uploadfile4.zip'
import upload5 from './uploadfile5.zip'
export default function Login() {
    const dispatch = useDispatch()


    const [formValues, setFormValues] = useState({
        username: '',
        password: '',
    })
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValues, "formvalues")
        localStorage.setItem('token', JSON.stringify(formValues))
        dispatch(login(formValues))
        navigate('/dashboard')
    }


    const debounceCall = debounce((e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }, 800)

    const isLoggedIn = localStorage.getItem('token') ? true : false;

    const handleSave = () => {
        const zipFileUrl = '';

        const a = document.createElement('a');
        a.href = zipFileUrl;
        a.download = 'file.zip'; // Set the desired filename for the downloaded ZIP file
        a.style.display = 'none'; // Hide the anchor element

        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

    }

    return (
        < div className='loginSection' >
            {isLoggedIn && (<Button variant="primary" onClick={() => localStorage.removeItem('token')}>
                Logout

            </Button>)}
            <form onSubmit={handleSubmit}>
                <div className='d-flex justify-content-around my-3 '>
                    <h3>Username :</h3>
                    <input
                        type="text"
                        name="username"
                        className="form-control w-50"
                        onChange={(e) => debounceCall(e)}
                    />
                </div>
                <div className="d-flex justify-content-around my-3">
                    <h3>Password :</h3>
                    <input
                        type="password"
                        name="password"
                        className="form-control w-50"
                        onChange={(e) => debounceCall(e)}
                    />
                </div>
                <Button type='submit' variant="primary" size="lg">
                    Login
                </Button>
            </form>

            <a href={upload}>
                Save ZIp 80
            </a>
            <a href={upload1}>
                Save ZIp 1 
            </a>
            <a href={upload2}>
                Save ZIp 2 
            </a>
            <a href={upload3}>
                Save ZIp 3 
            </a>
            <a href={upload4}>
                Save ZIp 4 
            </a>
            <a href={upload5}>
                Save ZIp 5
            </a>
        </div >
    )
}
