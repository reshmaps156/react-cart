import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/slice/whistlistSlice';
import { addToCart } from '../redux/slice/cartSlice';



function Home() {
  const data = useFetch('https://fakestoreapi.com/products')
  // console.log(data);
  const dispatch = useDispatch()
  return (
    <>
      <Row className='w-100 my-5 p-3'>
        {data?.length > 0 ?
          data?.map(item => (
            <Col sm={12} md={4} lg={3} className='mt-3 d-flex justify-content-center p-3'>
              <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={item.image} className='w-100' style={{ height: '250px' }} />
                <Card.Body>
                  <Card.Title className='text-center'>{item.title}</Card.Title>
                  <Card.Text>
                  <p className='fw-bold text-primary text-center'> Price : $ {item.price}</p>
                  </Card.Text>
                  <div className='d-flex justify-content-between'>
                    <Button onClick={()=>dispatch(addToWishlist(item))} variant="danger"><FontAwesomeIcon icon={faHeart} /></Button>
                    <Button onClick={()=>dispatch(addToCart(item))} variant="success"><FontAwesomeIcon icon={faCartShopping} /></Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>))

          : <p>Nothing to display</p>
        }
      </Row>
    </>
  )
}

export default Home