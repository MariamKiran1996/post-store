import React from 'react'

const adminHome=()=> {
  return (
    <div id="wrapper">
    <header class="homeHeader">
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="home.html"><i class="fab fa-css3"></i></a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#"
                >Home <span class="sr-only">(current)</span></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item catgDropdownLink">
            
              <div class="dropdown">
                <button
                  class="btn dropdown-toggle nav-link"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li>
                    <a class="dropdown-item" href="#">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="Checkme1"
                        />
                        <label class="form-check-label" for="Checkme1"
                          >Men's Clothing</label
                        >
                      </div>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="Checkme2"
                        />
                        <label class="form-check-label" for="Checkme2"
                          >Women's Clothing</label
                        >
                      </div>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="Checkme3"
                        />
                        <label class="form-check-label" for="Checkme3"
                          >Home & Lifestyle</label
                        >
                      </div>
                    </a>
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="Checkme4"
                        />
                        <label class="form-check-label" for="Checkme4"
                          >Electronics</label
                        >
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        
          <div class="topSearchSec">
            <div class="input-group">
              <div class="form-outline">
                <input
                  type="search"
                  id="form1"
                  class="form-control"
                  placeholder="Search..."
                />

                <button type="button" class="btn topSearchBtn">
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>

          <form class="cartSec">
            <a href="../addCart.html"><i class="fas fa-cart-plus"></i></a>
            <a href="../wishList.html" class="ml-3"
              ><i class="far fa-heart"></i
            ></a>
          </form>
        </div>
      </nav>
    </header>
    

    <div
      class="side-navbar active-nav d-flex justify-content-between flex-wrap flex-column"
      id="sidebar"
    >
      <ul class="nav flex-column text-white w-100">
        {/* <!-- <a href="#" class="nav-link h3 text-white my-2">
          Responsive SideBar Nav
        </a> --> */}
        <li href="#">
          <a href="#" class="nav-link active">
            <i class="fas fa-th-large"></i>
            <span class="mx-2">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="calendar.html" class="nav-link">
            <i class="fas fa-calendar"></i>
            <span class="mx-2">Calendar</span>
          </a>
        </li>
        <li>
          <a
            href="#submenu1"
            data-bs-toggle="collapse"
            class="nav-link px-0 align-middle"
          >
            <i class="fas fa-chevron-down"></i>
            <span class="ms-1 d-none d-sm-inline">All Category</span>
          </a>
          <ul
            class="collapse show nav flex-column ms-1 pl-5"
            id="submenu1"
            data-bs-parent="#menu"
          >
            <li class="w-100">
              <a href="category.html" class="nav-link px-0">
                <span class="d-none d-sm-inline">Add Category</span>
              </a>
            </li>
            {/* <li>
              <a href="#" class="nav-link px-0">
                <span class="d-none d-sm-inline">Item</span> 2
              </a>
            </li>  */}
          </ul>
        </li>
        <li>
          <a href="product.html" class="nav-link ">
            <i class="fas fa-luggage-cart"></i>
            <span class="mx-2">Products</span>
          </a>
        </li>
      </ul>

      <span href="#" class="nav-link h4 w-100 mb-5 sideSocialList">
        <a href="#"><i class="fab fa-facebook-square"></i></a>
        <a href="#"><i class="fab fa-twitter-square"></i></a>
        <a href="#"><i class="fab fa-instagram-square"></i></a>
      </span>
    </div>

    <div class="p-1 my-container active-cont">
     
      <nav class="navbar top-navbar navbar-light bg-none px-5 mb-3">
        <a class="btn border-0" id="menu-btn"><i class="fas fa-bars"></i></a>
      </nav>
     
      <div class="dashRightMain">
        <h4>Products Status</h4>
        <div class="dashGraphHead">
          <h6>Total Products: <span>34440</span></h6>
          <h6>Remaining Products: <span>1120</span></h6>
          <div class="monthSelectSec">
            <label for="byDateInput">By Date</label>
            <input type="datetime-local" name="" id="byDateInput" />
          </div>
          <div class="monthSelectSec">
            <label for="monthSelect">By Month</label>
            <select
              class="form-select"
              id="monthSelect"
              aria-label="Default select example"
            >
              <option selected>January</option>
              <option value="1">Feb</option>
              <option value="2">March</option>
              <option value="3">April</option>
              <option value="3">May</option>
            </select>
          </div>
        </div>

        <div class="leftSoldGraph">
          <div id="soldGraph" class="leftSoldGraphBox"></div>
          <div id="leftOutGraph" class="leftSoldGraphBox"></div>
        </div>

        <div class="prodGraphSec">
          <div id="prodContainer"></div>
        </div>
      </div>
    </div>



   
     {/* <div class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-sm-4 col-xs-12">
            <div class="single_footer">
              <h4>Customer Care</h4>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">How tp Buy</a></li>
                <li><a href="#">Return & Refunds </a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="single_footer single_footer_address">
              <h4>Page Link</h4>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Track your Order</a></li>
                <li><a href="#">Locate Us</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="single_footer single_footer_address">
              <h4>Subscribe today</h4>
              <div class="signup_form">
                <form action="#" class="subscribe">
                  <input
                    type="text"
                    class="subscribe__input"
                    placeholder="Enter Email Address"
                  />
                  <button type="button" class="subscribe__btn">
                    <i class="fas fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
            <div class="social_profile">
              <ul>
                <li>
                  <a href="#"><i class="fab fa-facebook-f"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-google-plus-g"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 col-sm-12 col-xs-12">
            <p class="copyright">
              Copyright © 2023 <a href="#">Samaritan Tech</a>.
            </p>
          </div>
        </div>
      </div>
    </div>  */}
  </div>
  )
}

export default adminHome;
