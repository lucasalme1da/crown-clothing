import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

import './styles.scss'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51H1GOPGiPiOsjrtSjUo8uRUjuPwB0Y7cJMEEDMiMdcXgiBkcfGnYMSjtER68OLG0tZGplhuFBUeRxiyEgA93Vn2K00tOV0bKqJ';

  const onToken = token => {
    console.log(token);
    alert("Payment Successful!");
  }
  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing Ltd."
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;