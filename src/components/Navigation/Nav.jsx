import React, { Component} from 'react';
import logo from '../../assets/images/logo.png';
import imgPro1 from '../../assets/images/img-pro-01.jpg';
import imgPro2 from '../../assets/images/img-pro-02.jpg';
import imgPro3 from '../../assets/images/img-pro-03.jpg';

class Nav extends Component{
    state = {
        sideOn: false
    }
    toggleSide = () =>{
        this.setState({
            sideOn: !this.state.sideOn
        })
    }
    render(){
        return(
            <div>
            <header className="main-header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
                <div className="container">
                    <div className="navbar-header">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa fa-bars"></i>
                    </button>
                        <a className="navbar-brand" href="index.html"><img src={logo} className="logo" alt=""/></a>
                    </div>
                    <div className="collapse navbar-collapse" id="navbar-menu">
                        <ul className="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">
                            <li className="nav-item active"><a className="nav-link" href="index.html">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="about.html">About Us</a></li>
                            <li className="dropdown">
                                <a href="#" className="nav-link dropdown-toggle arrow" data-toggle="dropdown">SHOP</a>
                                <ul className="dropdown-menu">
                                    <li><a href="shop.html">Sidebar Shop</a></li>
                                    <li><a href="shop-detail.html">Shop Detail</a></li>
                                    <li><a href="cart.html">Cart</a></li>
                                    <li><a href="checkout.html">Checkout</a></li>
                                    <li><a href="my-account.html">My Account</a></li>
                                    <li><a href="wishlist.html">Wishlist</a></li>
                                </ul>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="gallery.html">Gallery</a></li>
                            <li className="nav-item"><a className="nav-link" href="contact-us.html">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="attr-nav">
                        <ul>
                            <li className="search"><a href="#"><i className="fa fa-search"></i></a></li>
                            <li className="side-menu" onClick={this.toggleSide}>
                                <a href="#">
                                    <i className="fa fa-shopping-bag"></i>
                                    <span className="badge">3</span>
                                    <p>My Cart</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={this.state.sideOn ? "side on" : "side"}>
                    <a href="#" className="close-side" onClick={this.toggleSide}><i className="fa fa-times"></i></a>
                    <li className="cart-box">
                        <ul className="cart-list">
                            <li>
                                <a href="#" className="photo"><img src={imgPro1} className="cart-thumb" alt="" /></a>
                                <h6><a href="#">Delica omtantur </a></h6>
                                <p>1x - <span className="price">$80.00</span></p>
                            </li>
                            <li>
                                <a href="#" className="photo"><img src={imgPro2} className="cart-thumb" alt="" /></a>
                                <h6><a href="#">Omnes ocurreret</a></h6>
                                <p>1x - <span className="price">$60.00</span></p>
                            </li>
                            <li>
                                <a href="#" className="photo"><img src={imgPro3} className="cart-thumb" alt="" /></a>
                                <h6><a href="#">Agam facilisis</a></h6>
                                <p>1x - <span className="price">$40.00</span></p>
                            </li>
                            <li className="total">
                                <a href="#" className="btn btn-default hvr-hover btn-cart">VIEW CART</a>
                                <span className="float-right"><strong>Total</strong>: $180.00</span>
                            </li>
                        </ul>
                    </li>
                </div>
            </nav>
        </header>

        <div className="top-search">
            <div className="container">
                <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-search"></i></span>
                    <input type="text" className="form-control" placeholder="Search"/>
                    <span className="input-group-addon close-search"><i className="fa fa-times"></i></span>
                </div>
            </div>
        </div>
        </div>
        )
    }
}

export default Nav;