import React from 'react'
import Header from '../../components/clientComponents/header'
import Footer from '../../components/clientComponents/footer'

export default function Checkout() {
  return (
    <div id="wrapper">
   <Header />
   
    <section className="cartMain">
      <div className="cartLeft">
        <div className="container">
          <div className="col-12 check-row">
            <form role="form">
              <div className="orderDetailSec">
                <h6>Deliver to M.Faizan Khan</h6>
                <h6>0322-9762503</h6>
                <h6>
                  House No 4 Street No 1 Rehman Park Gulshan e Ravi Lahore
                  <a href="#">change</a>
                </h6>
                <h6>Email to : faizan.cerp@gmail.com <a href="#">edit</a></h6>
              </div>
              <div className="orderDetailSec cPaymentSec">
                <h5>Payment Method</h5>
                <div className="paySourceSec">
                  <a href="#">
                    <img src="../html/images/visaPic.PNG" alt="" />
                  </a>
                  <a href="#">
                    <img src="../html/images/mastercardPic.PNG" alt="" />
                  </a>
                  <a href="#">
                    <img src="../html/images/jazzCash.PNG" alt="" />
                  </a>
                  <a href="#">
                    <img src="../html/images/easyPaisa.PNG" alt="" />
                  </a>
                </div>
                <div className="paymentDetailSec">
                  <div className="form-group">
                    <label htmlFor="accNo">IBAN / ACCOUNT #</label>
                    <input
                      id="accNo"
                      type="text"
                      className="form-control"
                      placeholder="type your account no"
                    />
                  </div>
                  <div className="form-group">
                    <div className="col">
                      <label htmlFor="cvv">CVV #</label>
                    <input
                      id="cvv"
                      type="text"
                      className="form-control"
                      placeholder="Enter Cvv from back of your card"
                    />
                    </div>
                    
                  </div>
                  <div className="form-group">
                    <label htmlFor="exDate">Expiry Date #</label>
                    <input
                      id="exDate"
                      type="date"
                      className="form-control"
                      placeholder="type your account no"
                    />
                  </div>
                  <div className="form-group w-50">
                    <div className="col">
                      <label htmlFor="OTP">OTP</label>
                    <input
                      id="OTP"
                      type="text"
                      className="form-control"
                      placeholder="otp Code Here"
                    />
                    </div>
                    
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="cartRight">
        <h5>Order Summary</h5>
        <div className="subTotalSec">
          <h5>Subtotal (0 items)</h5>
          <h6>Rs. 0</h6>
        </div>
        <form className="row voucherSec">
          <div className="col-9">
             {/* <label htmlFor="inputPassword2" className="visually-hidden">Password</label> */}
            <input
              type="text"
              className="form-control"
              id="inputPassword2"
              placeholder="Enter Voucher Code"
            />
          </div>
          <div className="col-3">
            <button type="button" className="btn btn-warning text-white w-100">
              Apply
            </button>
          </div>
          <div className="totalAmountSec dlvryChargeSec">
            <h6>Delivery Charges</h6>
            <h6>Rs. 250</h6>
          </div>
          <div className="totalAmountSec dlvryChargeSec">
            <h6>Tax</h6>
            <h6>2%</h6>
          </div>
          <div className="totalAmountSec">
            <h5>Total</h5>
            <h6>Rs. 0</h6>
          </div>
          <button
            type="submit"
            className="btn btn-warning text-white my-3 checkoutBtn"
          >
            PROCEED TO CHECKOUT
          </button>
        </form>
      </div>
    </section>

  
    <Footer />
   
  </div>
  )
}
