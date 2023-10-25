import React from 'react'

export default function Footer() {
  return (
    <div className="footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-sm-4 col-xs-12">
          <div className="single_footer">
            <h4>Customer Care</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">How tp Buy</a></li>
              <li><a href="#">Return & Refunds </a></li>
            </ul>
          </div>
        </div>
      
        <div className="col-md-4 col-sm-4 col-xs-12">
          <div className="single_footer single_footer_address">
            <h4>Page Link</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Track your Order</a></li>
              <li><a href="#">Locate Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="col-md-4 col-sm-4 col-xs-12">
          <div className="single_footer single_footer_address">
            <h4>Subscribe today</h4>
            <div className="signup_form">
              <form action="#" className="subscribe">
                <input
                  type="text"
                  className="subscribe__input"
                  placeholder="Enter Email Address"
                />
                <button type="button" className="subscribe__btn">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
          <div className="social_profile">
            <ul>
              <li>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
              </li>
              <li>
                <a href="#"><i className="fab fa-twitter"></i></a>
              </li>
              <li>
                <a href="#"><i className="fab fa-google-plus-g"></i></a>
              </li>
              <li>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
     
      <div className="row">
        <div className="col-lg-12 col-sm-12 col-xs-12">
          <p className="copyright">
            Copyright © 2023 <a href="#">Samaritan Tech</a>.
          </p>
        </div>
        
      </div>
     
    </div>
    
  </div>
  )
}
