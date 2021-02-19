import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from '../../components/Layout';
import HomePages from "../../pages/home-pages/"
import Footer from '../../components/Footer';
import InstagramBox from '../../components/instagram-box';
import AboutUsPages from '../../pages/about-us-pages';
import GalleryPages from '../../pages/gallery-pages';
import ContactUsPages from '../../pages/contact-us-pages';
import Cart from '../../components/Cart'
import Checkout from '../../components/Checkout'
import MyAccount from '../../components/MyAccount'
import Wishlist from '../../components/Wishlist'


function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
            <Route path="/about-us" component={AboutUsPages} />
            <Route path="/home" exact component={HomePages} />
            <Route path="/gallery" exact component={GalleryPages} />
            <Route path="/contact-us" exact component={ContactUsPages} />
            <Route path="/shop/cart" exact component={Cart} />
            <Route path="/shop/checkout" exact component={Checkout} />
            <Route path="/shop/my-account" exact component={MyAccount} />
            <Route path="/shop/wishlist" exact component={Wishlist} />
            <Redirect to="/home" from="/"/>
          </Switch>
      </Layout>
      <InstagramBox/>
      <Footer/>
    </div>
  );
}

export default App;
