import React from 'react'
import Header from '../../components/clientComponents/header'
import Footer from '../../components/clientComponents/footer'

export default function AddToCart() {
  return (
    <div id="wrapper">
   <Header />
    
    <section className="cartMain">
      <div className="cartLeft">
        <div className="container">
          <div className="col-12 check-row">
            <form role="form">
              <div className="form-group">
                <div className="checkbox checkAllSec">
                  <label>
                    <input type="checkbox" className="check" id="checkAll" /> Select
                    All <span>( 3 Items )</span>
                  </label>
                  <a href="#"> <i className="far fa-trash-alt mx-1"></i> Delete</a>
                </div>
                <div className="wListCoTitle cartCoTitle">
                  <h6>Leather Hub</h6>
                  <span
                    >Spend Rs. 799 enjoy free shipping for Express,Standard
                    delivery option
                  </span>
                </div>
               
                <div className="checkbox">
                  <label className="">
                    <input type="checkbox" className="check" />
                  </label>
                  <div className="cartProdRow">
                    <a href="#" className="cartProdRowLeft">
                      <div className="cProdImgSec">
                        <img src="../html/images/beltOne.jpg" alt="" />
                      </div>
                      <div className="cProdTitleSec">
                        <h6>
                          Pure Leather Belt for Men , length 155mm , width 200mm
                        </h6>
                      </div>
                    </a>
                    <div className="wProdPriceSec cartProdPriceSec">
                      <div className="priceDecText">
                        <h6>Rs. 2200</h6>
                        <span>-30%</span>
                      </div>
                      <h5>Rs. 1500</h5>

                      <h6 className="text-success">Price Dropped</h6>
                      <div className="cWishDLtSec">
                        <a href="#"><i className="far fa-heart"></i></a>
                        <a href="#"><i className="far fa-trash-alt"></i></a>
                      </div>
                    </div>
                    <div href="#" className="cartProdRowRight">
                      <div className="qProdQuantityRow">
                        <div className="qty">
                          <span className="minus bg-dark">-</span>
                          <input
                            type="number"
                            className="count"
                            name="qty"
                            value="1"
                          />
                          <span className="plus bg-dark">+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

               
                <div className="checkbox">
                  <label className="">
                    <input type="checkbox" className="check" />
                  </label>
                  <div className="cartProdRow">
                    <a href="#" className="cartProdRowLeft">
                      <div className="cProdImgSec">
                        <img src="../html/images/beltOne.jpg" alt="" />
                      </div>
                      <div className="cProdTitleSec">
                        <h6>
                          Pure Leather Belt for Men , length 155mm , width 200mm
                        </h6>
                      </div>
                    </a>
                    <div className="wProdPriceSec cartProdPriceSec">
                      <div className="priceDecText">
                        <h6>Rs. 2200</h6>
                        <span>-30%</span>
                      </div>
                      <h5>Rs. 1500</h5>

                      <h6 className="text-success">Price Dropped</h6>
                      <div className="cWishDLtSec">
                        <a href="#"><i className="far fa-heart"></i></a>
                        <a href="#"><i className="far fa-trash-alt"></i></a>
                      </div>
                    </div>
                    <div href="#" className="cartProdRowRight">
                      <div className="qProdQuantityRow">
                        <div className="qty">
                          <span className="minus bg-dark">-</span>
                          <input
                            type="number"
                            className="count"
                            name="qty"
                            value="1"
                          />
                          <span className="plus bg-dark">+</span>
                        </div>
                      </div>
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
           {/* <label htmlFor="inputPassword2" className="visually-hidden">Password</label>  */}
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
          <div className="totalAmountSec">
            <h5>Total</h5>
            <h6>Rs. 0</h6>
          </div>
          <button type="submit" className="btn btn-warning text-white my-3 checkoutBtn">
            PROCEED TO CHECKOUT
          </button>
        </form>
      </div>
    </section>
    <Footer />

   
   
  
  </div>
  )
}
