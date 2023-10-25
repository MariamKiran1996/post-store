import React from 'react'
import Header from '../../components/clientComponents/header'
import Footer from '../../components/clientComponents/footer'

export default function QuickView() {
  return (
    <div id="wrapper">
        <section className="quickViewMain">
      <div className="quickContSec">
        <div className="quickContLeft">
          <div className="qclGallerySec">
            <div className="qclGalleryTop">
              {/* <!-- <img src="../html/images/beltNewTwo.jpg" alt="" /> --> */}
              <div className="img-zoom-container">
                <img
                  id="myimage"
                  src="../html/images/beltNewTwo.jpg"
                  width="300"
                  height="240"
                />
                <div id="myresult" className="img-zoom-result"></div>
              </div>
            </div>
            <div className="qclGalleryDown">
              <div className="productSlider">
                <div className="prodSliderBox">
                  <img src="../html/images/beltNewOne.jpg" alt="" />
                </div>
                <div className="prodSliderBox">
                  <img src="../html/images/beltNewOne.jpg" alt="" />
                </div>
                <div className="prodSliderBox">
                  <img src="../html/images/beltNewOne.jpg" alt="" />
                </div>
                <div className="prodSliderBox">
                  <img src="../html/images/beltNewOne.jpg" alt="" />
                </div>
                <div className="prodSliderBox">
                  <img src="../html/images/beltNewOne.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="qProdDescSec">
            <h4>Leather Belt For Men's 155mm</h4>
            <div className="ratingSecRow">
              <div className="rate">
                <input type="radio" id="star5" name="rate" value="5" />
                <label htmlFor="star5" title="text">5 stars</label>
                <input type="radio" id="star4" name="rate" value="4" />
                <label htmlFor="star4" title="text">4 stars</label>
                <input type="radio" id="star3" name="rate" value="3" />
                <label htmlFor="star3" title="text">3 stars</label>
                <input type="radio" id="star2" name="rate" value="2" />
                <label htmlFor="star2" title="text">2 stars</label>
                <input type="radio" id="star1" name="rate" value="1" />
                <label htmlFor="star1" title="text">1 star</label>
              </div>
              <a href="#">313 Ratings</a>
            </div>
            <div className="brandRow">
              <h6>Brand:</h6>
              <h6><a href="#">" Leather Hub "</a></h6>
            </div>
            <div className="qProdPriceSec">
              <div className="priceTextRow">
                <h3 className="qPriceText">Rs. 1500</h3>
                <h5>Rs. 2750 <span>-30%</span></h5>
              </div>
              <div className="qProdColorRow">
                <label htmlFor="color" className="form-label">Choose Color:</label>
                <div className="example full">
                  <input
                    type="text"
                    className="coloris instance3"
                    value="#ffcc00"
                  />
                </div>
              </div>

              <div className="qProdQuantityRow">
                <h6>Quantity:</h6>
                <div className="qty">
                  <span className="minus bg-dark">-</span>
                  <input type="number" className="count" name="qty" value="1" />
                  <span className="plus bg-dark">+</span>
                </div>
              </div>
              <div className="qbuyAddCartRow">
                <a href="#">Buy Now </a>
                <a href="addCart.html">Add to Cart</a>
              </div>
            </div>
          </div>
        </div>
        <div className="quickContRight">
          <h5 className="grayColor mb-4">Delivery</h5>
          <div className="qDeliveryRow">
            <div className="qDeliveryLeft">
              <i className="fa fa-map-marker-alt"></i>
              <h6>
                House 4 , Street 1 Rehman Park Gulshan e Ravi Lahore 54000
              </h6>
            </div>
            <div className="qDeliveryRight">
              <a href="#">Change</a>
            </div>
          </div>
          <div className="qDeliveryRow standardDlvRow">
            <div className="qDeliveryLeft">
              <i className="fas fa-map-pin"></i>
              <h6>
                Standard Delivery <span><i> ( 21 Sep to 25 Sep ) </i></span>
              </h6>
            </div>
            <div className="qDeliveryRight">
              <a href="#">Rs. 160</a>
            </div>
          </div>
          <div className="qDeliveryRow standardDlvRow">
            <div className="qDeliveryLeft">
              <i className="fas fa-hand-holding-usd"></i>
              <h6>
                Cash on Delivery Available
              </h6>
            </div>
            <div className="qDeliveryRight"></div>
          </div>
          <div className="qDeliveryRow standardDlvRow">
            <div className="qDeliveryLeft">
              <i className="fas fa-hand-point-left"></i>
              <h6>
                7 Days Return Policy
                <small className="ml-2">( Change of mind is not applicable )</small>
              </h6>
            </div>
            <div className="qDeliveryRight"></div>
          </div>
          <div className="qDeliveryRow standardDlvRow">
            <div className="qDeliveryLeft">
              <i className="fas fa-shield-alt"></i>
              <h6>
                Warranty Not Available
              </h6>
            </div>
            <div className="qDeliveryRight"></div>
          </div>
        </div>
      </div>
      
      <div className="qPordDetailMain">
        <div className="qProdDetLeft">
          <div className="qPordDetHead">
            <h5>Ratings & Reviews of Product</h5>
          </div>
          <div className="qProdDetList">
            <ul>
              <li>Length : 155mm</li>
              <li>Height: 22mm</li>
              <li>Weight: 0.57Kg</li>
              <li>Kindly Check The Size Before Order</li>
              <li>Its PU Leather</li>
            </ul>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
              amet sint tempora, consectetur id nam quis debitis minus, adipisci
              odit officia optio?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
              amet sint tempora, consectetur id nam quis debitis minus, adipisci
              odit officia optio?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
              amet sint tempora, consectetur id nam quis debitis minus, adipisci
              odit officia optio?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
              amet sint tempora, consectetur id nam quis debitis minus, adipisci
              odit officia optio?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
              amet sint tempora, consectetur id nam quis debitis minus, adipisci
              odit officia optio?
            </p>
          </div>
          
        </div>
        <div className="qProdReviewSec">
          <div
            className="height-100 d-flex justify-content-center align-items-center"
          >
            <div className="card p-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="ratings">
                  <i className="fa fa-star rating-color"></i>
                  <i className="fa fa-star rating-color"></i>
                  <i className="fa fa-star rating-color"></i>
                  <i className="fa fa-star rating-color"></i>
                  <i className="fa fa-star"></i>
                </div>
                <h5 className="review-count">12 Reviews</h5>
              </div>

              <div
                className="mt-4 d-flex justify-content-between align-items-center"
              >
                <h5 className="review-stat">Quality</h5>
                <div className="small-ratings">
                  <i className="fa fa-star rating-color"></i>
                  <i className="fa fa-star rating-color"></i>
                  <i className="fa fa-star rating-color"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>

              <div
                className="mt-1 d-flex justify-content-between align-items-center"
              >
                <h5 className="review-stat">Overall Ratings</h5>
                <div className="small-ratings">
                  <i className="fa fa-star rating-color"></i>
                  <i className="fa fa-star rating-color"></i>
                  <i className="fa fa-star rating-color"></i>
                  <i className="fa fa-star rating-color"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>

              <div
                className="mt-1 d-flex justify-content-between align-items-center"
              >
                <h5 className="review-stat">Delivery on Time</h5>
                <div className="small-ratings">
                  <i className="fa fa-star rating-color"></i>
                  <i className="fa fa-star rating-color"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
              </div>

              <div
                className="mt-1 d-flex justify-content-between align-items-center"
              >
                <h5 className="review-stat">Customer Response</h5>
                <div className="small-ratings">
                  <i className="fa fa-star rating-color"></i>
                  <i className="fa fa-star rating-color"></i>
                  <i className="fa fa-star rating-color"></i>
                  <i className="fa fa-star rating-color"></i>
                  <i className="fa fa-star rating-color"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <section className="custProdReview">
        <div className="custProdRevHead">
          <h5>Product Reviews</h5>
        </div>
        <div className="custRevContSec">
          <div className="custRevContHead">
            <div className="custNameRatingRow">
              <div className="small-ratings">
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <h6>by Huzaifa k.</h6>
            </div>
            <div className="cRevContRight">
              <h6>2 weeks ago</h6>
            </div>
          </div>
          <p className="my-3">
            Allhamdulillah 💫i recieve my order paras bohat acha ha ye mera
            pehla order tha daraz sa jo bohat acha aya 🥰ha jasa colour dekha
            tha wlasa hi aaya ha😍 Thanks 👍❤️
          </p>
          <div className="cRevGallerySec">
            <a href="#">
              <img src="../html/images/beltNewOne.jpg" alt="" />
            </a>
            <a href="#">
              <img src="../html/images/beltNewOne.jpg" alt="" />
            </a>
            <a href="#">
              <img src="../html/images/beltNewOne.jpg" alt="" />
            </a>
            <a href="#">
              <img src="../html/images/beltNewOne.jpg" alt="" />
            </a>
          </div>
        </div>
        <div className="custRevContSec">
          <div className="custRevContHead">
            <div className="custNameRatingRow">
              <div className="small-ratings">
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <h6>by Huzaifa k.</h6>
            </div>
            <div className="cRevContRight">
              <h6>2 weeks ago</h6>
            </div>
          </div>
          <p className="my-3">
            Allhamdulillah 💫i recieve my order paras bohat acha ha ye mera
            pehla order tha daraz sa jo bohat acha aya 🥰ha jasa colour dekha
            tha wlasa hi aaya ha😍 Thanks 👍❤️
          </p>
          <div className="cRevGallerySec">
            <a href="#">
              <img src="../html/images/beltNewOne.jpg" alt="" />
            </a>
            <a href="#">
              <img src="../html/images/beltNewOne.jpg" alt="" />
            </a>
            <a href="#">
              <img src="../html/images/beltNewOne.jpg" alt="" />
            </a>
            <a href="#">
              <img src="../html/images/beltNewOne.jpg" alt="" />
            </a>
          </div>
        </div>
        <div className="custRevContSec">
          <div className="custRevContHead">
            <div className="custNameRatingRow">
              <div className="small-ratings">
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <h6>by Huzaifa k.</h6>
            </div>
            <div className="cRevContRight">
              <h6>2 weeks ago</h6>
            </div>
          </div>
          <p className="my-3">
            Allhamdulillah 💫i recieve my order paras bohat acha ha ye mera
            pehla order tha daraz sa jo bohat acha aya 🥰ha jasa colour dekha
            tha wlasa hi aaya ha😍 Thanks 👍❤️
          </p>
          <div className="cRevGallerySec">
            <a href="#">
              <img src="../html/images/beltNewOne.jpg" alt="" />
            </a>
            <a href="#">
              <img src="../html/images/beltNewOne.jpg" alt="" />
            </a>
            <a href="#">
              <img src="../html/images/beltNewOne.jpg" alt="" />
            </a>
            <a href="#">
              <img src="../html/images/beltNewOne.jpg" alt="" />
            </a>
          </div>
        </div>
      </section>
    </section>
    </div>
  )
}
