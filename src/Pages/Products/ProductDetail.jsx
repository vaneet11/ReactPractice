import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Loader from '../../Layout/Loader'

export default function ProductDetail() {
  const params = useParams()
  const [ProductDetail, setProductDetail] = useState({})
  const [isLoader, setLoader] = useState(true)

  useEffect(() => {
    if (params.id) {
      axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then((res) => {
          setProductDetail(res.data)
          setLoader(false)
        })
    }
  }, [])
  console.log(ProductDetail, "aaaaaaaaa")
  return (
    <Container>

      <div className='p-3'>
        {isLoader && (
          <div className='cover-spin'>
            <Loader />
          </div>
        )}
        <Row className='mt-5'>
          {ProductDetail && (
            <>
              <Col md={6}>
                <h4>{ProductDetail?.title}</h4>
                <h6> {ProductDetail?.category}</h6>
                <p className='my-3 fw-sm'>
                  {ProductDetail?.description}
                </p>

                <ul>
                  <li>Rating : {ProductDetail?.rating.rate} / 10</li>
                  <li>Total Products Sold : {ProductDetail?.rating.count}</li>
                  <li>Only For {ProductDetail?.price}</li>
                </ul>
              </Col>
              <Col md={6}>
                <Image
                  height={500}
                  rounded
                  src={ProductDetail.image} />
              </Col>
            </>
          )}
        </Row>

      </div>
    </Container>
  )
}
