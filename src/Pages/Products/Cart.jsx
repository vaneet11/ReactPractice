import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Loader from '../../Layout/Loader'

export default function Cart() {
    const navigate = useNavigate()
    const cartItem = JSON.parse(localStorage.getItem('Cart'))
    const [isLoader, setLoader] = useState(true)

    setTimeout(() => {
        setLoader(false)
    }, 2000)

    const handleQuantity = (id, operator, quantity) => {
        const cartItemIndex = cartItem.findIndex(item => item.id === id)
        if (operator === '+') {
            cartItem[cartItemIndex].quantity = cartItem[cartItemIndex].quantity + 1
        }
        else if (operator === '-') {
            cartItem[cartItemIndex].quantity = cartItem[cartItemIndex].quantity - 1
        }
        else {
            alert('invalid')
        }

        localStorage.setItem('Cart', JSON.stringify(cartItem))
        Window.refresh()

    }
    return (
        <Container >
            <div className='p-5'>
                <Row>
                    <h4 className='fw-bold mx-auto'>My Cart</h4>
                </Row>
                {isLoader ? (
                    <div className='cover-spin'>
                        <Loader />
                    </div>
                ) : (
                    <Row >
                        {cartItem && cartItem.length > 0 &&
                            cartItem.slice(0, 6).map((item) =>
                            (
                                <Col className='my-3' key={item.id}>
                                    <Card border="primary" style={{ width: '18rem' }} key={item.id}>
                                        <Card.Img variant="top" src={item.image}
                                            onClick={() => navigate(`/products/${item.id}`)} />
                                        <Card.Body>
                                            <Card.Title className='text-truncate'>{item.title}</Card.Title>
                                            <Card.Text>
                                                Rating : {`${item.rating.rate} / 10`}
                                                <p >
                                                    Price : <span className='fw-bold'> ₹ {item.price}</span><br />
                                                    Total Price = <span className="fw-bold">₹ {item.price * item.quantity}</span>
                                                </p>

                                                <div className='d-flex justify-content-evenly'>
                                                    <Button
                                                        variant="outline-info"
                                                        onClick={() => handleQuantity(item.id, '-', item.quantity)}
                                                    >
                                                        <span className='fw-bold'> - </span>
                                                    </Button>

                                                    <span className='align-middle' >{item.quantity}</span>
                                                    <Button
                                                        variant="outline-info"
                                                        onClick={() => handleQuantity(item.id, '+', item.quantity)}
                                                    >
                                                        <span className="fw-bold"> + </span>
                                                    </Button>

                                                </div>
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                            )}
                    </Row>
                )}
            </div>
        </Container>
    )
}
