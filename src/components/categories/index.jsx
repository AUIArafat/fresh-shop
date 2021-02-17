import categories_img_01 from '../../assets/images/categories_img_01.jpg'
import categories_img_02 from '../../assets/images/categories_img_02.jpg'
import categories_img_03 from '../../assets/images/categories_img_03.jpg'
import Category from './category'

function Categories(){
    return (
        <div className="categories-shop">
        <div className="container">
            <div className="row">
                <Category imgSrc={categories_img_01}/>
                <Category imgSrc={categories_img_02}/>
                <Category imgSrc={categories_img_03}/>
            </div>
        </div>
    </div>
    )
}

export default Categories;