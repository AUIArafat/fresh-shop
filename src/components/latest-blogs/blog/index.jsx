function Blog(props){
    return (
        <div className="col-md-6 col-lg-4 col-xl-4">
            <div className="blog-box">
                <div className="blog-img">
                    <img className="img-fluid" src={props.imgSrc} alt="" />
                </div>
                <div className="blog-content">
                    <div className="title-blog">
                        <h3>Fusce in augue non nisi fringilla</h3>
                        <p>Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.</p>
                    </div>
                    <ul className="option-blog">
                        <li><a href="#"><i className="far fa-heart"></i></a></li>
                        <li><a href="#"><i className="fas fa-eye"></i></a></li>
                        <li><a href="#"><i className="far fa-comments"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Blog;