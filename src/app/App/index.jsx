import { Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from '../../components/Layout';
import HomePages from "../../pages/home-pages/"
import Footer from '../../components/Footer';
function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
            {/* <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} /> */}
            <Route path="/home" exact component={HomePages} />
          </Switch>
      </Layout>
      <Footer/>
    </div>
  );
}

export default App;
