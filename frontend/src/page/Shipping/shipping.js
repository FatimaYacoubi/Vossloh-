import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../../Components/FormContainer'
import {saveShippingAdress } from '../../cartredux/cartaction'
import { useNavigate } from 'react-router-dom';
import bg from "./ddd.jpg"
import CheckoutSteps from '../../Components/CheckoutSteps/CheckoutSteps'
import Navbarr from '../../Components/Navbar/navbar'
const Shipping = () => {
    const navigate = useNavigate();
        const cart = useSelector((state)=>state.cart)
        const {shippingAddress} = cart || {}
    const [address, setAddress] = useState(shippingAddress?.address|| '')
    const [city, setCity] = useState(shippingAddress?.city|| '')
    const [postalCode, setPostalCode] = useState(shippingAddress?.postalCode|| '')
    const [country, setCountry] = useState(shippingAddress?.country|| '')
  
    const dispatch = useDispatch()
  
    const submitHandler = (e) => {
      e.preventDefault()
    dispatch(saveShippingAdress({address , city , postalCode , country}))
    navigate('/payment')
    }
  
    return (
     <div style={{marginTop:"200px",backgroundColor:"black",backgroundImage:`url(${bg})`}}>
      <Navbarr />
       <FormContainer >
        <h1 style={{color:"white",marginTop:"100px"}}>Shipping</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='address'>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter address'
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)}
            ></Form.Control>
          </Form.Group>
  
          <Form.Group controlId='city'>
            <Form.Label>City</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter city'
              value={city}
              required
              onChange={(e) => setCity(e.target.value)}
            ></Form.Control>
          </Form.Group>
  
          <Form.Group controlId='postalCode'>
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter postal code'
              value={postalCode}
              required
              onChange={(e) => setPostalCode(e.target.value)}
            ></Form.Control>
          </Form.Group>
  
          <Form.Group controlId='country'>
            <Form.Label>Country</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter country'
              value={country}
              required
              onChange={(e) => setCountry(e.target.value)}
            ></Form.Control>
          </Form.Group>
  
          <Button type='submit' variant='alert'>
            Continue
          </Button>
        </Form>
        </FormContainer> </div>
    )
  }
export default Shipping