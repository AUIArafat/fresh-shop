function InstagramItem(props){
    return(
        <div className="item">
            <div className="ins-inner-box">
                <img src={props.imgSrc} alt="" />
                <div className="hov-in">
                    <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    )
}

export default InstagramItem