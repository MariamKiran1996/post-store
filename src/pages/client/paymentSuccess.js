import React from 'react'
import Header from '../../components/clientComponents/header'
import Footer from '../../components/clientComponents/footer'

export default function PaymentSuccess() {
  return (
    <div id="wrapper">
    <Header />

    <section className="productsSec">
    
      <div className="prodDetailMain">
        <div className="wishListMain">
          <div className="wishListHead text-center">
            <h3>Payment Details</h3>
          </div>
          <div className="d-flex w-100 justify-content-center">
            <div className="orderIdSec mt-4 mx-5">
              <h6>Order Id #</h6>
              <h5 className="text-success mt-2 ">pK25500505050-d</h5>
            </div>
            <div className="orderIdSec mt-4 mx-5">
              <h6>Tracking Id #</h6>
              <h5 className="text-success mt-2 ">dg123123-d</h5>
            </div>
          </div>
          <div className="paymentSuccesSec">
            <h5>
              Your Payment has been Done
              <span><i className="fas fa-check-double"></i></span>
            </h5>
            <p>For more shopping , kindly click on below button.</p>
            <a href="home.html" className="wContShopBtn">BACK TO SHOPPING</a>
          </div>
        </div>
      </div>
     
    </section>

    
    <Footer /> 
    
  </div>
  )
}
