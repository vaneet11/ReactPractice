import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../../Layout/Loader'
import { BsCart4 } from "react-icons/bs";

export default function Products() {
  const [productList, setProductList] = useState('')
  const [categories, setCategories] = useState({})
  const [isLoader, setLoader] = useState()
  const [dataValue, setDataValue] = useState(-1)

  const navigate = useNavigate()

  const params = useParams()
  console.log(params, "params")

  useEffect(() => {
    setLoader(true)
    if (params.category) {
      axios.get(`https://fakestoreapi.com/products/category/${params.category}`)
        .then((res) => {
          setProductList(res.data)
          setLoader(false)
        })
    }
    else {
      axios.get('https://fakestoreapi.com/products')
        .then((res) => {
          setProductList(res.data)
          setLoader(false)
        })

    }

    axios.get('https://fakestoreapi.com/products/categories')
      .then((res) => {
        setCategories(res.data)
      })
  }, [dataValue])

  const handleCart = (item, id) => {

    const cartItem = JSON.parse(localStorage.getItem('Cart'))

    if (cartItem && cartItem.length > 0) {
      item.quantity = 1;
      const findItem = cartItem.find((item, ind) => item.id === id)
      if (findItem) {
        console.log("1")
        const quantity = cartItem.map((ele, index) => {
          if (ele.id === id) {
            ele.quantity = ele.quantity + 1;
            return ele
          }
          else {
            return ele
          }
        })
        localStorage.setItem('Cart', JSON.stringify(quantity))
      } else {
        console.log("2")
        cartItem.push(item)
        localStorage.setItem('Cart', JSON.stringify(cartItem))
      }
    }
    else {
      console.log("3")
      item.quantity = 1;
      localStorage.setItem('Cart', JSON.stringify([item]))
    }

  }
  return (
    <Container >

      <div className='p-5'>
        <Row>
          <Col md={4}>
            <h3 className='mx-auto'> All Products</h3>
          </Col>
          <Col>
            {categories &&
              categories.length > 0 &&
              categories.map((item, ind) => (
                <Button
                  key={ind}
                  className='mx-2'
                  type="radio"
                  variant="outline-info"
                  name="radio"
                  active={ind === dataValue}
                  onClick={() => {
                    setDataValue(ind)
                    navigate(`/products/category/${item}`)
                  }}

                >
                  {item}
                </Button>
              ))}

            <BsCart4
              className='float-end'
              onClick={() => {
                navigate('/products/cart')
              }}
            />

          </Col>
        </Row>
        {isLoader && (
          <div className='cover-spin'>
            <Loader />
          </div>
        )}
        <Row >
          {productList && productList.length > 0 &&
            productList.slice(0, 6).map((item) =>
            (
              <Col className='my-3' key={item.id}>
                <Card border="primary" style={{ width: '18rem' }} key={item.id}>
                  <Card.Img variant="top" src={item.image} onClick={() => navigate(`/products/${item.id}`)} />
                  <Card.Body>
                    <Card.Title className='text-truncate'>{item.title}</Card.Title>
                    <Card.Text>
                      Rating : {`${item.rating.rate} / 10`}
                      <p >
                        Price : <span className='fw-bold'> ₹ {item.price}</span>
                      </p>
                    </Card.Text>
                    <Button
                      variant="primary"
                      className='ms-5'
                      onClick={() => {
                        handleCart(item, item.id)
                      }}
                    >Add To Cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
            )}
        </Row>
      </div>
    </Container>
  )
}
