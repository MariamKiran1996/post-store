import React from 'react'
import Header from '../../components/clientComponents/header'
import Footer from '../../components/clientComponents/footer'

export default function Location() {
  return (
    <div id="wrapper">
    <Header />
   

    <section className="productsSec">
      <div className="prodDetailMain">
        <div className="wishListMain">
          <div className="wishListHead">
            <h3>Locations</h3>
          </div>
          <div className="locationMain">
            <div className="locationBoxMain">
              <div className="locationBox">
                <h5>Lahore Location</h5>
                <h6>
                  Address:
                  <span
                    >House No 4 Street No 1 rehman Park Gulshan e ravi lahore
                    pakistan</span
                  >
                </h6>
                <p>Opening Time: <span>08:00AM</span></p>
                <p>Closing Time: <span>10:00PM</span></p>
                <div>
                  <span>Phone:</span>
                  <a href="tel:111-222-333">111-222-333</a>
                </div>
              </div>
              <div className="locationBox">
                <h5>Karachi Location</h5>
                <h6>
                  Address:
                  <span
                    >House No 4 Street No 1 rehman Park Gulshan e ravi lahore
                    pakistan</span
                  >
                </h6>
                <p>Opening Time: <span>08:00AM</span></p>
                <p>Closing Time: <span>10:00PM</span></p>
                <div>
                  <span>Phone:</span>
                  <a href="tel:111-222-333">111-222-333</a>
                </div>
              </div>
              <div className="locationBox">
                <h5>Islamabad Location</h5>
                <h6>
                  Address:
                  <span
                    >House No 4 Street No 1 rehman Park Gulshan e ravi lahore
                    pakistan</span
                  >
                </h6>
                <p>Opening Time: <span>08:00AM</span></p>
                <p>Closing Time: <span>10:00PM</span></p>
                <div>
                  <span>Phone:</span>
                  <a href="tel:111-222-333">111-222-333</a>
                </div>
              </div>
            </div>
            <div className="locationMap d-flex justify-content-between">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3759.418882724747!2d74.27319974879208!3d31.553235027641527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1695295616216!5m2!1sen!2s"
                width="30%"
                height="330"
                style="border: 0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3759.418882724747!2d74.27319974879208!3d31.553235027641527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1695295616216!5m2!1sen!2s"
                width="30%"
                height="330"
                style="border: 0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3759.418882724747!2d74.27319974879208!3d31.553235027641527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1695295616216!5m2!1sen!2s"
                width="30%"
                height="330"
                style="border: 0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      
    </section>

    
    <Footer />
   
  </div>
  )
}
