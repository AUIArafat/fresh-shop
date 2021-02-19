import logo from "../../assets/images/logo.png";
import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";
import { Component } from "react";

class Header extends Component {
    state = {
        isHover:false,
        hoverDropDown:{
            classes: "dropdown-menu animated fadeOutUp",
            display: "none"
        }
    }
    onHoverHandler = () =>{
        const updatedHoverDropDown = {
            ...this.state.hoverDropDown
        }
        const updatedHover = !this.state.isHover
        updatedHoverDropDown.classes = updatedHover ? "dropdown-menu animated fadeInDown" : "dropdown-menu animated fadeOutUp"
        updatedHoverDropDown.display = updatedHover ? "block" : "none"
        this.setState({
            isHover: updatedHover,
            hoverDropDown: updatedHoverDropDown
        })
    }
  render() {
    return (
      <div>
        <header className="main-header">
          <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
            <div className="container">
              <div className="navbar-header">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbar-menu"
                  aria-controls="navbars-rs-food"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand" href="index.html">
                  <img src={logo} className="logo" alt="" />
                </a>
              </div>
              <div className="collapse navbar-collapse" id="navbar-menu">
                <ul
                  className="nav navbar-nav ml-auto"
                  data-in="fadeInDown"
                  data-out="fadeOutUp"
                >
                  <li>
                    <NavLink className="nav-link" to="/home">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/about-us">
                      About Us
                    </NavLink>
                  </li>
                  <li onClick={this.onHoverHandler}>
                    <a
                      href="#"
                      className="nav-link dropdown-toggle arrow"
                      data-toggle={this.state.isHover ? "dropdown on" : "dropdown"}
                    >
                      SHOP
                    </a>
                    <ul
                      className={this.state.hoverDropDown.classes}
                      style={{
                        display: this.state.hoverDropDown.display,
                        opacity: 1,
                        background: "#000000",
                      }}
                    >
                      <li>
                        <NavLink className="dropdown-nav-link" to="/shop">
                          Sidebar Shop
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-nav-link"
                          to="/shop-detail"
                        >
                          Shop Detail
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-nav-link" to="/cart">
                          Cart
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-nav-link" to="/checkout">
                          Checkout
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-nav-link" to="/my-account">
                          My Account
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-nav-link" to="/wishlist">
                          Wishlist
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink className="nav-link" to="/gallery">
                      Gallery
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="contact-us">
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="attr-nav">
                <ul>
                  <li className="search">
                    <a href="#">
                      <i className="fa fa-search"></i>
                    </a>
                  </li>
                  <li className="side-menu" onClick={this.props.toggleSide}>
                    <a href="#">
                      <i className="fa fa-shopping-bag"></i>
                      <span className="badge">3</span>
                      <p>My Cart</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <Sidebar toggleSide={this.props.toggleSide} sideOn={this.props.sideOn} />
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
