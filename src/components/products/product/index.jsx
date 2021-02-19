function Product(props){
    let styles = ['col-lg-3', 'col-md-6', 'special-grid'];
    styles.push(props.product.type)
    return (
        <div className={styles.join(' ')}>
        <div className="products-single fix">
            <div className="box-img-hover">
                <div className="type-lb">
                    <p className={props.product.category}>{props.product.category}</p>
                </div>
                <img src={props.product.imgSrc} className="img-fluid" alt="Image"/>
                <div className="mask-icon">
                    <ul>
                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                    </ul>
                    {props.isAddToCart ? ( 
                        <a className="cart" href="#">Add to Cart</a>
                        ) : null
                    }
                </div>
            </div>
            {props.isWhyText ? (            
                <div className="why-text">
                    <h4>{props.product.description}</h4>
                    <h5> ${props.product.price}</h5>
                </div>
                ) : null
            }
        </div>
    </div>

    )
}

export default Product;