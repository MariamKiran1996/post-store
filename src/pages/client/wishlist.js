import React from 'react'

export default function Wishlist() {
  return (
    <div id="wrapper">
        <section className="productsSec">
      <div className="catgListSec myCard">
        <div className="accordMain">
          <div
            className="panel-group"
            id="accordion"
            role="tablist"
            aria-multiselectable="true"
          >
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingOne">
                <a
                  role="button"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  <i className="fas fa-tshirt"></i> Men's Fashion
                </a>
              </div>
              <div
                id="collapseOne"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingOne"
              >
                <div className="panel-body">
                  <a href="#">T-Shirts & Tanks</a>
                  <a href="#">Pants & Jeans</a>
                  <a href="#">Shoes</a>
                  <a href="#">Winter Clothing</a>
                  <a href="#">Kurta & Shalwar Kameez</a>
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingTwo">
                <a
                  className="collapsed"
                  role="button"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <i className="fas fa-female"></i> Women's Fashion
                </a>
              </div>
              <div
                id="collapseTwo"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingTwo"
              >
                <div className="panel-body">
                  <a href="#">Unsticthed Fabrics</a>
                  <a href="#">Kurta's & Shalwar Kameez</a>
                  <a href="#">Shoes</a>
                  <a href="#">Winter Clothing</a>
                  <a href="#">Girls Accessories</a>
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingThree">
                <a
                  className="collapsed"
                  role="button"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <i className="fas fa-baby"></i> Mother & Baby
                </a>
              </div>
              <div
                id="collapseThree"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingThree"
              >
                <div className="panel-body">
                  <a href="#">Mil Formula & Baby Food</a>
                  <a href="#">Toys & Games</a>
                  <a href="#">Baby Personal Care</a>
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingOne">
                <a
                  role="button"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  <i className="fas fa-home"></i> Home & Lifestyle
                </a>
              </div>
              <div
                id="collapseFour"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingOne"
              >
                <div className="panel-body">
                  <a href="#">Bedding</a>
                  <a href="#">Decor</a>
                  <a href="#">Furniture</a>
                  <a href="#">Laundary & Cleaning</a>
                  <a href="#">Stationary & Craft</a>
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingTwo">
                <a
                  className="collapsed"
                  role="button"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <i className="fas fa-mobile-alt"></i> Electronics Devices
                </a>
              </div>
              <div
                id="collapseFive"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingTwo"
              >
                <div className="panel-body">
                  <a href="#">Smart Phones</a>
                  <a href="#">Tablets</a>
                  <a href="#">Monitors</a>
                  <a href="#">Laptops</a>
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingThree">
                <a
                  className="collapsed"
                  role="button"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <i className="fas fa-tv"></i> Home Appliances
                </a>
              </div>
              <div
                id="collapseSix"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingThree"
              >
                <div className="panel-body">
                  <a href="#">Air Conditoner</a>
                  <a href="#">Home Audio & Theater</a>
                  <a href="#">Refrigerators</a>
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingThree">
                <a
                  className="collapsed"
                  role="button"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <i className="fas fa-table-tennis"></i>Sports
                </a>
              </div>
              <div
                id="collapseSeven"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingThree"
              >
                <div className="panel-body">
                  <a href="#">Exercise & Fitness</a>
                  <a href="#">Supplements</a>
                  <a href="#">Shoes & Clothing</a>
                  <a href="#">Fitness Gadgets</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="prodDetailMain">
        <div className="wishListMain">
          <div className="wishListHead">
            <h3>My Wishlist & Followed Stores ( 3 )</h3>
          </div>
          <div className="wishTabSec">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-wish-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-wish"
                  type="button"
                  role="tab"
                  aria-controls="pills-wish"
                  aria-selected="true"
                >
                  My Wishlist <span>(3)</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-pPurchase-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-pPurchase"
                  type="button"
                  role="tab"
                  aria-controls="pills-pPurchase"
                  aria-selected="false"
                >
                  Past Purchases
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-followStore-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-followStore"
                  type="button"
                  role="tab"
                  aria-controls="pills-followStore"
                  aria-selected="false"
                >
                  Followed Stores
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-wish"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="addAllCartSec textCard">
                  <a href="#">ADD ALL TO CART</a>
                </div>
                <div className="noFavrtSec">
                  <i className="far fa-heart"></i>
                  <h6>There are no favorites yet.</h6>
                  <h6>
                    Add your favorites to wishlist and they will show here.
                  </h6>
                  <a href="home.html" className="wContShopBtn">CONTINUE SHOPPING</a>
                </div>

                <div className="wListContSec textCard">
                  <div className="wListContHead">
                    <h4>Wishlist <i className="fas fa-level-down-alt"></i></h4>
                  </div>
                  <div className="wListDetailSec">
                    <div className="wListCoTitle">
                      <h6>Leather Hub</h6>
                    </div>
                    <div className="wProdDetailRow">
                      <div className="wProdImgSec">
                        <div>
                          <a href="#">
                            <img src="../html/images/beltOne.jpg" alt="" />
                          </a>
                        </div>
                        <div className="wProdTitle">
                          <a href="#"
                            >Pure Leather Belt for Men , length 155mm , width
                            200mm
                          </a>
                          <span>Quantity : 6 left</span>
                          <a href="#">
                            <i className="far fa-trash-alt"></i>
                          </a>
                        </div>
                      </div>
                      
                      <div className="wProdPriceSec">
                        <h5>Rs. 1500</h5>
                        <div className="priceDecText">
                          <h6>Rs. 2200</h6>
                          <span>-30%</span>
                        </div>
                        <h6 className="text-success">Price Dropped</h6>
                      </div>
                      <div className="wCartIconSec">
                        <a href="addCart.html"> <i className="fas fa-cart-plus"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="wListDetailSec">
                    <div className="wListCoTitle">
                      <h6>Leather Hub</h6>
                    </div>
                    <div className="wProdDetailRow">
                      <div className="wProdImgSec">
                        <div>
                          <a href="#">
                            <img src="../html/images/beltOne.jpg" alt="" />
                          </a>
                        </div>
                        <div className="wProdTitle">
                          <a href="#"
                            >Pure Leather Belt for Men , length 155mm , width
                            200mm
                          </a>
                          <span>Quantity : 6 left</span>
                          <a href="#">
                            <i className="far fa-trash-alt"></i>
                          </a>
                        </div>
                      </div>
                      
                      <div className="wProdPriceSec">
                        <h5>Rs. 1500</h5>
                        <div className="priceDecText">
                          <h6>Rs. 2200</h6>
                          <span>-30%</span>
                        </div>
                        <h6 className="text-success">Price Dropped</h6>
                      </div>
                      <div className="wCartIconSec">
                        <a href="#"> <i className="fas fa-cart-plus"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="wListDetailSec">
                    <div className="wListCoTitle">
                      <h6>Leather Hub</h6>
                    </div>
                    <div className="wProdDetailRow">
                      <div className="wProdImgSec">
                        <div>
                          <a href="#">
                            <img src="../html/images/beltOne.jpg" alt="" />
                          </a>
                        </div>
                        <div className="wProdTitle">
                          <a href="#"
                            >Pure Leather Belt for Men , length 155mm , width
                            200mm
                          </a>
                          <span>Quantity : 6 left</span>
                          <a href="#">
                            <i className="far fa-trash-alt"></i>
                          </a>
                        </div>
                      </div>
                      
                      <div className="wProdPriceSec">
                        <h5>Rs. 1500</h5>
                        <div className="priceDecText">
                          <h6>Rs. 2200</h6>
                          <span>-30%</span>
                        </div>
                        <h6 className="text-success">Price Dropped</h6>
                      </div>
                      <div className="wCartIconSec">
                        <a href="#"> <i className="fas fa-cart-plus"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-pPurchase"
                role="tabpanel"
                aria-labelledby="pills-pPurchase-tab"
              >
                past purchase
              </div>
              <div
                className="tab-pane fade"
                id="pills-followStore"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                Followed Store
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
    </div>
  )
}
