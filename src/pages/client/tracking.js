import React from 'react'

export default function Tracking() {
  return (
    <div id="wrapper">
        <section className="productsSec">
    
    <div className="prodDetailMain">
      <div className="wishListMain">
        <div className="wishListHead">
          <h3>Delivery & Payment Details</h3>
        </div>

        <form action="" className="trackingForm">
         
          <div className="form-group">
            <div className="row">
              <div className="col">
                <label htmlFor="orderId">Order ID</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type Your Order ID"
                  id="orderId"
                />
              </div>
              <div className="col">
                <label htmlFor="trackId">Tracking ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="trackId"
                  placeholder="Type Your Tracking ID"
                />
              </div>
            </div>
          </div>

          <div className="container trackAreaMain">
            <div className="row">
              <div className="col-12 col-md-10 hh-grayBox pt45 pb20">
                <div className="row justify-content-between">
                  <div className="order-tracking completed">
                    <span className="is-complete"></span>
                    <p>Ordered<br /><span>Mon, June 24</span></p>
                  </div>
                  <div className="order-tracking completed">
                    <span className="is-complete"></span>
                    <p>Shipped<br /><span>Tue, June 25</span></p>
                  </div>
                  <div className="order-tracking">
                    <span className="is-complete"></span>
                    <p>Delivered<br /><span>Fri, June 28</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <button type="button" className="trackBtn"><i className="fas fa-plane-departure mx-1"></i>Track Your Parcel</button>
        </form>
      </div>
    </div>
   
  </section>
    </div>
  )
}
