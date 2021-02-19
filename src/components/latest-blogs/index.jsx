import blog_img from '../../assets/images/blog-img.jpg'
import blog_img_01 from '../../assets/images/blog-img-01.jpg'
import blog_img_02 from '../../assets/images/blog-img-02.jpg'
import Blog from './blog'

function LatestBlog(){
    return (
        <div className="latest-blog">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="title-all text-center">
                        <h1>latest blog</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <Blog imgSrc={blog_img}/>
                <Blog imgSrc={blog_img_01}/>
                <Blog imgSrc={blog_img_02}/>
            </div>
        </div>
    </div>
    )
}

export default LatestBlog;