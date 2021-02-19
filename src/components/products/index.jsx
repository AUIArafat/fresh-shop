import React, { Component } from 'react';
import img_pro_01 from '../../assets/images/img-pro-01.jpg'
import img_pro_02 from '../../assets/images/img-pro-02.jpg'
import img_pro_03 from '../../assets/images/img-pro-03.jpg'
import img_pro_04 from '../../assets/images/img-pro-04.jpg'
import Product from './product';

class Products extends Component{
    state = {
        productList:[
            {
                id:1,
                description:"Lorem ipsum dolor sit amet",
                price:'7.79',
                imgSrc:img_pro_01,
                type:'best-seller',
                category:'sale'
            },
            {
                id:2,
                description:"Lorem ipsum dolor sit amet",
                price:'9.79',
                imgSrc:img_pro_02,
                type:'top-featured',
                category:'new'
            },
            {
                id:3,
                description:"Lorem ipsum dolor sit amet",
                price:'10.79',
                imgSrc:img_pro_03,
                type:'top-featured',
                category:'sale'
            },
            {
                id:4,
                description:"Lorem ipsum dolor sit amet",
                price:'15.79',
                imgSrc:img_pro_04,
                type:'best-seller',
                category:'sale'
            }
        ],
        filter: 'all',
    }
    filterProduct = (type) =>{
        this.setState({
            filter:type,
        })

    }
    render() {
        let filteredProduct = this.state.productList.filter(product=> product.type === this.state.filter || this.state.filter ==='all')
        return (
            <div className="products-box">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title-all text-center">
                            <h1>Fruits & Vegetables</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="special-menu text-center">
                            <div className="button-group filter-button-group">
                                <button className={this.state.filter === 'all' ? "active":''} data-filter="*" onClick={() => this.filterProduct('all')}>All</button>
                                <button className={this.state.filter === 'top-featured' ? "active":''} data-filter=".top-featured" onClick={() => this.filterProduct('top-featured')}>Top featured</button>
                                <button className={this.state.filter === 'best-seller' ? "active":''} data-filter=".best-seller" onClick={() => this.filterProduct('best-seller')}>Best seller</button>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="row special-list">
                 {filteredProduct.map(product =>(
                     <Product product={product} key={product.id} isWhyText={true} isAddToCart={true}/>
                 ))}
                </div>
            </div>
        </div>
        )
    }
}

export default Products;