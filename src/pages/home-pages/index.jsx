import BoxAddProducts from '../../components/box-add-products'
import Categories from '../../components/categories'
import LatestBlog from '../../components/latest-blogs'
import Products from '../../components/products'

function HomePages(){
    return (
        // <Slider/>
        <div>
            <Categories/>
            <BoxAddProducts/>
            <Products/>
            <LatestBlog/>
        </div>
    )
}

export default HomePages