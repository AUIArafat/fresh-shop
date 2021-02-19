import { Component } from "react";
import gallery_img_01 from "../../assets/images/gallery-img-01.jpg";
import gallery_img_02 from "../../assets/images/gallery-img-02.jpg";
import gallery_img_03 from "../../assets/images/gallery-img-03.jpg";
import gallery_img_04 from "../../assets/images/gallery-img-04.jpg";
import gallery_img_05 from "../../assets/images/gallery-img-05.jpg";
import gallery_img_06 from "../../assets/images/gallery-img-06.jpg";
import gallery_img_07 from "../../assets/images/gallery-img-07.jpg";
import gallery_img_08 from "../../assets/images/gallery-img-08.jpg";
import gallery_img_09 from "../../assets/images/gallery-img-09.jpg";
import gallery_img_10 from "../../assets/images/gallery-img-10.jpg";
import gallery_img_11 from "../../assets/images/gallery-img-11.jpg";
import gallery_img_12 from "../../assets/images/gallery-img-12.jpg";
import Product from "../products/product";

class Gallery extends Component {
    state = {
        galleryList:[
            {
                id:1,
                imgSrc:gallery_img_01,
                type:'bulbs',
                category:'sale'
            },
            {
                id:2,
                imgSrc:gallery_img_02,
                type:'fruits',
                category:''
            },
            {
                id:3,
                imgSrc:gallery_img_03,
                type:'bulbs',
                category:''
            },
            {
                id:4,
                imgSrc:gallery_img_04,
                type:'fruits',
                category:''
            },
            {
                id:5,
                imgSrc:gallery_img_05,
                type:'bulbs',
                category:''
            },
            {
                id:6,
                imgSrc:gallery_img_06,
                type:'fruits',
                category:''
            },
            {
                id:7,
                imgSrc:gallery_img_07,
                type:'podded-vegetables',
                category:''
            },
            {
                id:8,
                imgSrc:gallery_img_08,
                type:'root-and-tuberous',
                category:''
            },
            {
                id:9,
                imgSrc:gallery_img_09,
                type:'root-and-tuberous',
                category:''
            },
            {
                id:10,
                imgSrc:gallery_img_10,
                type:'podded-vegetables',
                category:''
            },
            {
                id:11,
                imgSrc:gallery_img_11,
                type:'root-and-tuberous',
                category:''
            },
            {
                id:12,
                imgSrc:gallery_img_12,
                type:'podded-vegetables',
                category:''
            },
            
        ],
        filter:'all'
    }
    filterGalleryHandler = (type) =>{
        this.setState({filter:type})
    }
  render() {
    let filteredGallery = this.state.galleryList.filter(product=> product.type === this.state.filter || this.state.filter ==='all')
    return (
      <div className="products-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-all text-center">
                <h1>Our Gallery</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sit amet lacus enim.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="special-menu text-center">
                <div className="button-group filter-button-group">
                  <button className={this.state.filter === 'all' ? "active":''} onClick={() => this.filterGalleryHandler('all')} data-filter="*">
                    All
                  </button>
                  <button className={this.state.filter === 'bulbs' ? "active":''} onClick={() => this.filterGalleryHandler('bulbs')} data-filter=".bulbs">Bulbs</button>
                  <button className={this.state.filter === 'fruits' ? "active":''} onClick={() => this.filterGalleryHandler('fruits')} data-filter=".fruits">Fruits</button>
                  <button className={this.state.filter === 'podded-vegetables' ? "active":''} onClick={() => this.filterGalleryHandler('podded-vegetables')} data-filter=".podded-vegetables">
                    Podded vegetables
                  </button>
                  <button className={this.state.filter === 'root-and-tuberous' ? "active":''} onClick={() => this.filterGalleryHandler('root-and-tuberous')} data-filter=".root-and-tuberous">
                    Root and tuberous
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row special-list">
                {
                    filteredGallery.map(product =>(
                        <Product product={product} key={product.id} isWhyText={false} isAddToCart={false}/>
                    ))
                }
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
