import React from 'react'

export default function Header() {
  return (
    <header className="homeHeader">
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="home.html"><i className="fab fa-css3"></i></a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#"
              >Home <span className="sr-only">(current)</span></a
            >
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item catgDropdownLink">
            
            <div className="dropdown">
              <button
                className="btn dropdown-toggle nav-link"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <a className="dropdown-item" href="#">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="Checkme1"
                      />
                      <label className="form-check-label" htmlFor="Checkme1"
                        >Men's Clothing</label
                      >
                    </div>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="Checkme2"
                      />
                      <label className="form-check-label" htmlFor="Checkme2"
                        >Women's Clothing</label
                      >
                    </div>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="Checkme3"
                      />
                      <label className="form-check-label" htmlFor="Checkme3"
                        >Home & Lifestyle</label
                      >
                    </div>
                  </a>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <a className="dropdown-item" href="#">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="Checkme4"
                      />
                      <label className="form-check-label" htmlFor="Checkme4"
                        >Electronics</label
                      >
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
     
        <div className="topSearchSec">
          <div className="input-group">
            <div className="form-outline">
              <input
                type="search"
                id="form1"
                className="form-control"
                placeholder="Search..."
              />

              <button type="button" className="btn topSearchBtn">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>

        <form className="cartSec">
          <a href="addCart.html"><i className="fas fa-cart-plus"></i></a>
          <a href="wishList.html" className="ml-3"
            ><i className="far fa-heart"></i
          ></a>
        </form>
      </div>
    </nav>
  </header>
  )
}
