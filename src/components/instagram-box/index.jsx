import instagram_img_01 from '../../assets/images/instagram-img-01.jpg'
import instagram_img_02 from '../../assets/images/instagram-img-02.jpg'
import instagram_img_03 from '../../assets/images/instagram-img-03.jpg'

import InstagramItem from "./instagram-item";

function InstagramBox(){
    return(
        <div className="instagram-box">
            <div className="main-instagram owl-carousel owl-theme" style={{display:'flex'}}>
                <InstagramItem imgSrc={instagram_img_01}/>
                <InstagramItem imgSrc={instagram_img_02}/>
                <InstagramItem imgSrc={instagram_img_03}/>
            </div>
        </div>
    )
}

export default InstagramBox; 