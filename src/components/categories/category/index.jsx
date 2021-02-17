function Category(props){
    return (
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="shop-cat-box">
                <img className="img-fluid" src={props.imgSrc} alt="" />
                <a className="btn hvr-hover" href="#">Lorem ipsum dolor</a>
            </div>
        </div>
    )
}

export default Category;