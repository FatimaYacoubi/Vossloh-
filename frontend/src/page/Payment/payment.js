import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../../Components/FormContainer'
import CheckoutSteps from '../../Components/CheckoutSteps/CheckoutSteps'
import { savePaymentMethod } from '../../cartredux/cartaction'
import { useNavigate } from 'react-router-dom';
import bg from "./ddd.jpg";

const PaymentScreen = () => {
    const navigate = useNavigate();
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  if (!shippingAddress.address) {
    navigate('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState('PayPal')

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
     navigate('/PlaceOrder')
  }

  return (
    <div style={{marginTop:"200px",backgroundColor:"black",backgroundImage:`url(${bg})`}}>
    <FormContainer style={{ backdropFilter: 'blur(16px) saturate(180%)',
      WebkitBackdropFilter: 'blur(16px) saturate(180%)',
      backgroundColor: 'rgba(255, 255, 255, 0.75)',
      borderRadius: '12px',
      border: '1px solid rgba(209, 213, 219, 0.3)',}}>
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend'>Select Method</Form.Label>
          <Col>
            <Form.Check
              type='radio'
              label='PayPal or Credit Card'
              id='PayPal'
              name='paymentMethod'
              value='PayPal'
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
            {/* <Form.Check
              type='radio'
              label='Stripe'
              id='Stripe'
              name='paymentMethod'
              value='Stripe'
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check> */}
          </Col>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Continue
        </Button>
      </Form>
    </FormContainer> </div>
  )
}

export default PaymentScreen