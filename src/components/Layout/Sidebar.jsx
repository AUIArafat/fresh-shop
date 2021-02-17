import imgPro1 from '../../assets/images/img-pro-01.jpg';
import imgPro2 from '../../assets/images/img-pro-02.jpg';
import imgPro3 from '../../assets/images/img-pro-03.jpg';

function Sidebar(props){
    return (
        <div className={props.sideOn ? "side on" : "side"}>
            <a href="#" className="close-side" onClick={props.toggleSide}><i className="fa fa-times"></i></a>
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
    )
}

export default Sidebar;