import React, { useState } from 'react'
import { Form, Button, Card, Col, Container, Row } from 'react-bootstrap'
import { debounce } from "lodash";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'

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

        navigate('/dashboard')
    }


    const debounceCall = debounce((e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }, 800)

    const isLoggedIn = localStorage.getItem('token') ? true : false;

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
        </div >
    )
}
