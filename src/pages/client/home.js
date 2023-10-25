import React from 'react'
import Header from '../../components/clientComponents/header'
import Footer from '../../components/clientComponents/footer'

export default function Home() {
  return (
    <div id="wrapper">
   <Header />
   

    <section className="catgBannerSec">
      
      <div className="bannerSec">
        <div className="responsive myCard">
          <a href="#" className="bannerBox">
            <div className="banner bannerOne text-center">
              <img
                src="../html/images/sportsTwo.jpg"
                alt=""
                className="bannerImg"
              />
              <div className="textSecNew">
                <h1>Live Sale in <span>ON !</span></h1>
                <p>
                  For All Sale Items Visit our Page
                </p>
                <h6 aria-readonly="true" className="bannerShopBtn">Shop Now</h6>
              </div>
            </div>
          </a>
          <a href="#" className="bannerBox">
            <div className="banner bannerOne">
              <img
                src="../html/images/menfashTwo.jpg"
                alt=""
                className="bannerImg"
              />
              <h5 className="bannerText">
                Best Men's Fashion Deals
                <span>upto 30% Off</span>
              </h5>
              <h6 aria-readonly="true" className="bannerShopBtn">Shop Now</h6>
            </div>
          </a>
          <a href="#" className="bannerBox">
            <div className="banner bannerOne">
              <img
                src="../html/images/womenFashionTwo.jpg"
                alt=""
                className="bannerImg"
              />
              <h5 className="bannerText">
                Best Women's Fashion Deals
                <span>upto 20% Off</span>
              </h5>
              <h6 aria-readonly="true" className="bannerShopBtn">Shop Now</h6>
            </div>
          </a>
        </div>
      </div>
      
    </section>
    
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
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <i className="fas fa-tshirt"></i> Men's Fashion
                </a>
              </div>
              <div
                id="collapseOne"
                className="panel-collapse collapse show"
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
        {/* <!-- <a href="#"> <i className="fas fa-tshirt"></i> Men's Fashion</a> -->
        <!-- <a href="#"><i className="fas fa-female"></i> Women's Fashion</a> -->
        <!-- <a href="#"><i className="fas fa-baby"></i> Mother & Baby</a> -->
        <!-- <a href="#"><i className="fas fa-home"></i> Home & Lifestyle</a> -->
        <!-- <a href="#"><i className="fas fa-mobile-alt"></i> Electronics Devices</a> -->
        <!-- <a href="#"><i className="fas fa-tv"></i> Home Appliances</a> -->
        <!-- <a href="#"><i className="fas fa-table-tennis"></i>Sports</a> -->
        <!-- <a href="#"><i className="fas fa-motorcycle"></i> Automative & Motorbike</a> --> */}
      </div>
      <div className="prodDetailMain">
        <div className="prodFiltersSec">
          <form action="/action_page.php">
            <div className="filterSecOne">
              <label htmlFor="sortBy" className="form-label">Sort By:</label>

              <select
                className="form-select"
                id="sortBy"
                aria-label="Default select example"
              >
                <option value="1" selected>
                  a-z
                </option>
                <option value="2">
                  z-a
                </option>
                <option value="3">
                  Low to High
                </option>
                <option value="4">
                  Hight to Low
                </option>
              </select>
            </div>
            <div className="filterSecOne">
              <label htmlFor="color" className="form-label">Color:</label>
              <div className="example full">
                <input type="text" className="coloris instance3" value="#ffcc00" />
              </div>
            </div>
            <div className="filterSecOne">
              <label htmlFor="size" className="form-label">Size:</label>

              <select
                className="form-select"
                id="size"
                aria-label="Default select example"
              >
                <option value="1" selected>
                  Small
                </option>
                <option value="2">
                  Medium
                </option>
                <option value="3">
                  Large
                </option>
                <option value="4">
                  X-Large
                </option>
              </select>
            </div>
            <div className="filterSecOne">
              <label htmlFor="perPageItems" className="form-label"
                >Items Per Page:</label
              >

              <select
                className="form-select"
                id="perPageItems"
                aria-label="Default select example"
              >
                <option value="1" selected>
                  1 to 10
                </option>
                <option value="2">
                  10 to 20
                </option>
                <option value="3">
                  20 to 30
                </option>
                <option value="4">
                  30 to 50
                </option>
              </select>
            </div>
          </form>
        </div>

       
        <h4 className="prodMainTitle">Top Rated Items</h4>
        <div className="prodListRow">
         
          <div className="prodBox">
            <a href="#">
              <div className="prodImgSec">
                <img src="../html/images/beltOne.jpg" alt="" />
                <span>Sold Out</span>
                <span className="discountText">-30%</span>
              </div>
              <div className="prodTitle">
                <p>Men Imported Metal Belt</p>
              </div>
              <br />
              <div className="prodPriceRow">
                <h6 className="text-danger">Rs. 1500 <span>Rs. 2500</span></h6>
              </div>
            </a>
            <div className="quickViewSec">
              <a href="quickView.html" className="quickViewBtn">
                Quick View
              </a>
              <a href="addCart.html" className="quickCartBtn"
                ><i className="fas fa-cart-plus"></i
              ></a>
              <a href="wishList.html" className="ml-3 quickFavortBtn"
                ><i className="far fa-heart"></i
              ></a>
            </div>
          </div>
          
          <div className="prodBox">
            <a href="#">
              <div className="prodImgSec">
                <img src="../html/images/ballOne.jpg" alt="" />
                <span>8 Available</span>
                <span className="discountText">-70%</span>
              </div>
              <div className="prodTitle">
                <p>One of The Finest Sports Ball</p>
              </div>
            </a>
            <div className="quickViewSec">
              <a href="quickView.html" className="quickViewBtn">
                Quick View
              </a>
              <a href="addCart.html" className="quickCartBtn"
                ><i className="fas fa-cart-plus"></i
              ></a>
              <a href="wishList.html" className="ml-3 quickFavortBtn"
                ><i className="far fa-heart"></i
              ></a>
            </div>
          </div>
         
          <div className="prodBox">
            <a href="#">
              <div className="prodImgSec">
                <img src="../html/images/jewlOne.jpg" alt="" />
                <span>8 Available</span>
              </div>
              <div className="prodTitle">
                <p>Women Attractice Jewlery</p>
              </div>
              <div className="prodPriceRow">
                <h6 className="text-danger">Rs. 3300 <span>Rs. 5800</span></h6>
              </div>
            </a>
            <div className="quickViewSec">
              <a href="#" className="quickViewBtn">
                Quick View
              </a>
              <a href="#" className="quickCartBtn"
                ><i className="fas fa-cart-plus"></i
              ></a>
              <a href="#" className="ml-3 quickFavortBtn"
                ><i className="far fa-heart"></i
              ></a>
            </div>
          </div>
          
          <div className="prodBox">
            <a href="#">
              <div className="prodImgSec">
                <img src="../html/images/jeans.jpg" alt="" />
                <span>8 Available</span>
                <span className="discountText">-5%</span>
              </div>
              <div className="prodTitle">
                <p>One of the finest Denim For Men</p>
              </div>
            </a>
            <div className="quickViewSec">
              <a href="#" className="quickViewBtn">
                Quick View
              </a>
              <a href="#" className="quickCartBtn"
                ><i className="fas fa-cart-plus"></i
              ></a>
              <a href="#" className="ml-3 quickFavortBtn"
                ><i className="far fa-heart"></i
              ></a>
            </div>
          </div>
         
          <div className="prodBox">
            <a href="#">
              <div className="prodImgSec">
                <img src="../html/images/jewlTwo.jpg" alt="" />
                <span>8 Available</span>
              </div>
              <div className="prodTitle">
                <p>Luxurious Jewlery for Women , Premium Quality Product</p>
              </div>
              <div className="prodPriceRow">
                <h6 className="text-danger">Rs. 3000 <span>Rs. 4500</span></h6>
              </div>
            </a>
            <div className="quickViewSec">
              <a href="quickView.html" className="quickViewBtn">
                Quick View
              </a>
              <a href="#" className="quickCartBtn"
                ><i className="fas fa-cart-plus"></i
              ></a>
              <a href="#" className="ml-3 quickFavortBtn"
                ><i className="far fa-heart"></i
              ></a>
            </div>
          </div>
         
          <div className="prodBox">
            <a href="#">
              <div className="prodImgSec">
                <img src="../html/images/shoesOne.jpg" alt="" />
                <span>8 Available</span>
              </div>
              <div className="prodTitle">
                <p>Sports Shoes</p>
              </div>
            </a>
            <div className="quickViewSec">
              <a href="quickView.html" className="quickViewBtn">
                Quick View
              </a>
              <a href="#" className="quickCartBtn"
                ><i className="fas fa-cart-plus"></i
              ></a>
              <a href="#" className="ml-3 quickFavortBtn"
                ><i className="far fa-heart"></i
              ></a>
            </div>
          </div>
          
          <div className="prodBox">
            <a href="#">
              <div className="prodImgSec">
                <img src="../html/images/beltOne.jpg" alt="" />
                <span>Sold Out</span>
                <span className="discountText">-12%</span>
              </div>
              <div className="prodTitle">
                <p>Men Imported Metal Belt</p>
              </div>
            </a>
            <div className="quickViewSec">
              <a href="quickView.html" className="quickViewBtn">
                Quick View
              </a>
              <a href="#" className="quickCartBtn"
                ><i className="fas fa-cart-plus"></i
              ></a>
              <a href="#" className="ml-3 quickFavortBtn"
                ><i className="far fa-heart"></i
              ></a>
            </div>
          </div>
          
          <div className="prodBox">
            <a href="#">
              <div className="prodImgSec">
                <img src="../html/images/womenFashionOne.jpg" alt="" />
                <span>8 Available</span>
                <span className="discountText">-55%</span>
              </div>
              <div className="prodTitle">
                <p>One of The Finest Sports Ball</p>
              </div>
            </a>
            <div className="quickViewSec">
              <a href="#" className="quickViewBtn">
                Quick View
              </a>
              <a href="#" className="quickCartBtn"
                ><i className="fas fa-cart-plus"></i
              ></a>
              <a href="#" className="ml-3 quickFavortBtn"
                ><i className="far fa-heart"></i
              ></a>
            </div>
          </div>
        </div>

       
      </div>
    
    </section>

   
    <Footer />
  </div>
  )
}
