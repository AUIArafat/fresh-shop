import add_img_01 from '../../assets/images/add-img-01.jpg'
import add_img_02 from '../../assets/images/add-img-02.jpg'
import BoxAddProduct from './box-add-product'

function BoxAddProducts(){
    return (
        <div className="box-add-products">
            <div className="container">
                <div className="row">
                    <BoxAddProduct imgSrc={add_img_01}/>
                    <BoxAddProduct imgSrc={add_img_02}/>
                </div>
            </div>
        </div>
    )
}

export default BoxAddProducts;