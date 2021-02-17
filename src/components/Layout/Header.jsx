import logo from '../../assets/images/logo.png';
import Sidebar from './Sidebar';

function Header(props) {
    return (
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
                            <li className="nav-item active"><a className="nav-link" href="/home">Home</a></li>
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
                            <li className="side-menu" onClick={props.toggleSide}>
                                <a href="#">
                                    <i className="fa fa-shopping-bag"></i>
                                    <span className="badge">3</span>
                                    <p>My Cart</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <Sidebar toggleSide={props.toggleSide} sideOn={props.sideOn}/>
            </nav>
        </header>
      </div>
    )
}

export default Header;