function BoxAddProduct(props){
    return (
        <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="offer-box-products">
                <img className="img-fluid" src={props.imgSrc} alt="" />
            </div>
        </div>
    )
}

export default BoxAddProduct;