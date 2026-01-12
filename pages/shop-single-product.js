import Layout from '../components/Layout'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function ShopSingleProduct() {
  const router = useRouter()
  
  return (
    <Layout title="Product Details - Kidol - Kids Toys Store eCommerce HTML Template">
      
    
    <section className="page-title-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 m-auto">
            <div className="page-title-content text-center">
              <h2 className="title">Product</h2>
              <div className="bread-crumbs"><Link href="/"> Home </Link><span className="breadcrumb-sep"> // </span><span className="active"> Product</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    

    
    <section className="product-single-area">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-0">
            <div className="single-product-slider">
              <div className="single-product-thumb">
                <div className="swiper-container single-product-thumb-slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide zoom zoom-hover">
                      <div className="thumb-item">
                        <a className="lightbox-image" data-fancybox="gallery" href="assets/img/shop/details/1.jpg">
                          <img src="/assets/img/shop/details/1.jpg" alt="Image-HasTech" />
                        </a></Link>
                      </div>
                    </div>
                    <div className="swiper-slide zoom zoom-hover">
                      <div className="thumb-item">
                        <a className="lightbox-image" data-fancybox="gallery" href="assets/img/shop/details/2.jpg">
                          <img src="/assets/img/shop/details/2.jpg" alt="Image-HasTech" />
                        </a></Link>
                      </div>
                    </div>
                    <div className="swiper-slide zoom zoom-hover">
                      <div className="thumb-item">
                        <a className="lightbox-image" data-fancybox="gallery" href="assets/img/shop/details/3.jpg">
                          <img src="/assets/img/shop/details/3.jpg" alt="Image-HasTech" />
                        </a></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-product-nav">
                <div className="swiper-container single-product-nav-slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="nav-item">
                        <img src="/assets/img/shop/details/nav1.jpg" alt="Image-HasTech" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="nav-item">
                        <img src="/assets/img/shop/details/nav2.jpg" alt="Image-HasTech" />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="nav-item">
                        <img src="/assets/img/shop/details/nav3.jpg" alt="Image-HasTech" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="single-product-info">
              <h4 className="title">Jigsaw Puzzles For Kids</h4>
              <div className="prices">
                <span className="price">$120.59</span>
              </div>
              <div className="product-rating">
                <div className="rating">
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
                <div className="review">
                  <a href="#/">( 5 Customer Review )</a></Link>
                </div>
              </div>
              <div className="single-product-featured">
                <ul>
                  <li><i className="fa fa-check"></i> Free Shipping</li>
                  <li><i className="fa fa-check"></i> Support 24/7</li>
                  <li><i className="fa fa-check"></i> Money Return</li>
                </ul>
              </div>
              <p className="product-desc">Lorem ipsum dolor sit amet, consect adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisll exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duisol aute irure dolor in reprehenderit.</p>
              <div className="quick-product-action">
                <div className="action-top">
                  <div className="pro-qty">
                    <input type="text" id="quantity" title="Quantity" value="01" / />
                  </div>
                  <button className="btn btn-theme">Add to Cart</button>
                  <Link href="/shop-wishlist" className="btn-wishlist">Add to Wishlist</Link>
                </div>
              </div>
              <div className="widget">
                <h3 className="title">SKU:</h3>
                <div className="widget-tags">
                  <span>Ch-256xl</span>
                </div>
              </div>
              <div className="widget">
                <h3 className="title">Categories:</h3>
                <div className="widget-tags">
                  <Link href="/blog">Toys.</Link>
                  <Link href="/blog">Dresss</Link>
                </div>
              </div>
              <div className="widget">
                <h3 className="title">Tag:</h3>
                <div className="widget-tags">
                  <Link href="/blog">Toys,</Link>
                  <Link href="/blog">Dress</Link>
                </div>
              </div>
              <div className="widget">
                <h3 className="title">Share:</h3>
                <div className="widget-tags widget-share">
                  <span className="fa fa-facebook"></span>
                  <span className="fa fa-dribbble"></span>
                  <span className="fa fa-pinterest-p"></span>
                  <span className="fa fa-twitter"></span>
                  <span className="fa fa-linkedin"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="product-description-review">
                <ul className="nav nav-tabs product-description-tab-menu" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="product-aditional-tab" data-bs-toggle="tab" data-bs-target="#commentProduct" type="button" role="tab" aria-selected="false">Information</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="product-desc-tab" data-bs-toggle="tab" data-bs-target="#productDesc" type="button" role="tab" aria-controls="productDesc" aria-selected="true">Description</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="product-review-tab" data-bs-toggle="tab" data-bs-target="#productReview" type="button" role="tab" aria-controls="productReview" aria-selected="false">Reviews (03)</button>
                  </li>
                </ul>
                <div className="tab-content product-description-tab-content" id="myTabContent">
                  <div className="tab-pane fade" id="commentProduct" role="tabpanel" aria-labelledby="product-aditional-tab">
                    <div className="product-desc">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed utlo perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    </div>
                  </div>
                  <div className="tab-pane fade show active" id="productDesc" role="tabpanel" aria-labelledby="product-desc-tab">
                    <div className="product-desc">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed utlo perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="productReview" role="tabpanel" aria-labelledby="product-review-tab">
                    <div className="product-review">
                      <div className="review-header">
                        <h4 className="title">Customer Reviews</h4>
                        <div className="review-info">
                          <ul className="review-rating">
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star-o"></i></li>
                          </ul>
                          <span className="review-caption">Based on 1 review</span>
                          <span className="review-write-btn">Write a review</span>
                        </div>
                      </div>
                      <div className="product-review-form">
                        <h4 className="title">Write a review</h4>
                        <form action="#" method="post">
                          <div className="review-form-content">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label htmlFor="reviewFormName">Name</label>
                                  <input className="form-control" id="reviewFormName" type="text" placeholder="Enter your name" required="" />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label htmlFor="reviewFormEmail">Email</label>
                                  <input className="form-control" id="reviewFormEmail" type="email" placeholder="john.smith@example.com" required="" />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="rating">
                                  <span className="rating-title">Rating</span>
                                  <span>
                                    <a className="fa fa-star-o" href="#/"></a></Link>
                                    <a className="fa fa-star-o" href="#/"></a></Link>
                                    <a className="fa fa-star-o" href="#/"></a></Link>
                                    <a className="fa fa-star-o" href="#/"></a></Link>
                                    <a className="fa fa-star-o" href="#/"></a></Link>
                                  </span>
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label htmlFor="reviewReviewTitle">Review Title</label>
                                  <input className="form-control" id="reviewReviewTitle" type="text" placeholder="Give your review a title" required="" />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label htmlFor="reviewFormTextarea">Body of Review <span>(1500)</span></label>
                                  <textarea className="form-control textarea" id="reviewFormTextarea" name="comment" rows="7" placeholder="Write your comments here" required=""></textarea>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group pull-right">
                                  <button className="btn btn-theme" type="submit">Submit Review</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="review-content">
                        <div className="review-item">
                          <ul className="review-rating">
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star-o"></i></li>
                          </ul>
                          <h4 className="title">Cobus Bester</h4>
                          <h5 className="review-date"><span>Cobus Bester</span> on <span>Mar 03, 2021</span></h5>
                          <p>Can’t wait to start mixin’ with this one! Irba-irr-Up-up-up-up-date your theme!</p>
                          <a className="review-report" href="#/">Report as Inappropriate</a></Link>
                        </div>
                      </div>
                      <div className="review-content">
                        <div className="review-item">
                          <ul className="review-rating">
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star-o"></i></li>
                          </ul>
                          <h4 className="title">Cobus Bester</h4>
                          <h5 className="review-date"><span>Cobus Bester</span> on <span>Mar 05, 2021</span></h5>
                          <p>Can’t wait to start mixin’ with this one! Irba-irr-Up-up-up-up-date your theme!</p>
                          <a className="review-report" href="#/">Report as Inappropriate</a></Link>
                        </div>
                      </div>
                      <div className="review-content">
                        <div className="review-item">
                          <ul className="review-rating">
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star-o"></i></li>
                          </ul>
                          <h4 className="title">Cobus Bester</h4>
                          <h5 className="review-date"><span>Cobus Bester</span> on <span>Mar 07, 2021</span></h5>
                          <p>Can’t wait to start mixin’ with this one! Irba-irr-Up-up-up-up-date your theme!</p>
                          <a className="review-report" href="#/">Report as Inappropriate</a></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    

    
    <section className="product-slider-area related-product-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="section-title text-center">
              <h2 className="title">Related Product</h2>
              <div className="desc">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="product-tab1-slider">
              <div className="slide-item">
                
                <div className="product-item">
                  <div className="product-thumb">
                    <img src="/assets/img/shop/9.png" alt="Image" />
                    <div className="product-action">
                      <a className="action-quick-view" href="/shop-cart"><i className="ion-ios-cart"></i></a></Link>
                      <a className="action-quick-view" href="#"><i className="ion-arrow-expand"></i></a></Link>
                      <a className="action-quick-view" href="/shop-wishlist"><i className="ion-heart"></i></a></Link>
                      <a className="action-quick-view" href="/shop-compare"><i className="ion-shuffle"></i></a></Link>
                    </div>
                  </div>
                  <div className="product-info">
                    <div className="rating">
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                    </div>
                    <h4 className="title"><Link href="/shop-single-product">Funskool Teddy Brown</Link></h4>
                    <div className="prices">
                      <span className="price">$190.12</span>
                    </div>
                  </div>
                </div>
                
              </div>
              <div className="slide-item">
                
                <div className="product-item">
                  <div className="product-thumb">
                    <img src="/assets/img/shop/10.png" alt="Image" />
                    <div className="product-action">
                      <a className="action-quick-view" href="/shop-cart"><i className="ion-ios-cart"></i></a></Link>
                      <a className="action-quick-view" href="#"><i className="ion-arrow-expand"></i></a></Link>
                      <a className="action-quick-view" href="/shop-wishlist"><i className="ion-heart"></i></a></Link>
                      <a className="action-quick-view" href="/shop-compare"><i className="ion-shuffle"></i></a></Link>
                    </div>
                  </div>
                  <div className="product-info">
                    <div className="rating">
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                    </div>
                    <h4 className="title"><Link href="/shop-single-product">Newborn Kit Set</Link></h4>
                    <div className="prices">
                      <span className="price">$190.12</span>
                    </div>
                  </div>
                </div>
                
              </div>
              <div className="slide-item">
                
                <div className="product-item">
                  <div className="product-thumb">
                    <img src="/assets/img/shop/11.png" alt="Image" />
                    <div className="product-action">
                      <a className="action-quick-view" href="/shop-cart"><i className="ion-ios-cart"></i></a></Link>
                      <a className="action-quick-view" href="#"><i className="ion-arrow-expand"></i></a></Link>
                      <a className="action-quick-view" href="/shop-wishlist"><i className="ion-heart"></i></a></Link>
                      <a className="action-quick-view" href="/shop-compare"><i className="ion-shuffle"></i></a></Link>
                    </div>
                  </div>
                  <div className="product-info">
                    <div className="rating">
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                    </div>
                    <h4 className="title"><Link href="/shop-single-product">Classic Fisher Gift</Link></h4>
                    <div className="prices">
                      <span className="price">$190.12</span>
                    </div>
                  </div>
                </div>
                
              </div>
              <div className="slide-item">
                
                <div className="product-item">
                  <div className="product-thumb">
                    <img src="/assets/img/shop/12.png" alt="Image" />
                    <div className="product-action">
                      <a className="action-quick-view" href="/shop-cart"><i className="ion-ios-cart"></i></a></Link>
                      <a className="action-quick-view" href="#"><i className="ion-arrow-expand"></i></a></Link>
                      <a className="action-quick-view" href="/shop-wishlist"><i className="ion-heart"></i></a></Link>
                      <a className="action-quick-view" href="/shop-compare"><i className="ion-shuffle"></i></a></Link>
                    </div>
                  </div>
                  <div className="product-info">
                    <div className="rating">
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                    </div>
                    <h4 className="title"><Link href="/shop-single-product">Sassy Crib and Floor Mirror</Link></h4>
                    <div className="prices">
                      <span className="price">$190.12</span>
                    </div>
                  </div>
                </div>
                
              </div>
              <div className="slide-item">
                
                <div className="product-item">
                  <div className="product-thumb">
                    <img src="/assets/img/shop/9.png" alt="Image" />
                    <div className="product-action">
                      <a className="action-quick-view" href="/shop-cart"><i className="ion-ios-cart"></i></a></Link>
                      <a className="action-quick-view" href="#"><i className="ion-arrow-expand"></i></a></Link>
                      <a className="action-quick-view" href="/shop-wishlist"><i className="ion-heart"></i></a></Link>
                      <a className="action-quick-view" href="/shop-compare"><i className="ion-shuffle"></i></a></Link>
                    </div>
                  </div>
                  <div className="product-info">
                    <div className="rating">
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                    </div>
                    <h4 className="title"><Link href="/shop-single-product">Funskool Teddy Brown</Link></h4>
                    <div className="prices">
                      <span className="price">$190.12</span>
                    </div>
                  </div>
                </div>
                
              </div>
              <div className="slide-item">
                
                <div className="product-item">
                  <div className="product-thumb">
                    <img src="/assets/img/shop/10.png" alt="Image" />
                    <div className="product-action">
                      <a className="action-quick-view" href="/shop-cart"><i className="ion-ios-cart"></i></a></Link>
                      <a className="action-quick-view" href="#"><i className="ion-arrow-expand"></i></a></Link>
                      <a className="action-quick-view" href="/shop-wishlist"><i className="ion-heart"></i></a></Link>
                      <a className="action-quick-view" href="/shop-compare"><i className="ion-shuffle"></i></a></Link>
                    </div>
                  </div>
                  <div className="product-info">
                    <div className="rating">
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                    </div>
                    <h4 className="title"><Link href="/shop-single-product">Newborn Kit Set</Link></h4>
                    <div className="prices">
                      <span className="price">$190.12</span>
                    </div>
                  </div>
                </div>
                
              </div>
              <div className="slide-item">
                
                <div className="product-item">
                  <div className="product-thumb">
                    <img src="/assets/img/shop/11.png" alt="Image" />
                    <div className="product-action">
                      <a className="action-quick-view" href="/shop-cart"><i className="ion-ios-cart"></i></a></Link>
                      <a className="action-quick-view" href="#"><i className="ion-arrow-expand"></i></a></Link>
                      <a className="action-quick-view" href="/shop-wishlist"><i className="ion-heart"></i></a></Link>
                      <a className="action-quick-view" href="/shop-compare"><i className="ion-shuffle"></i></a></Link>
                    </div>
                  </div>
                  <div className="product-info">
                    <div className="rating">
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                    </div>
                    <h4 className="title"><Link href="/shop-single-product">Classic Fisher Gift</Link></h4>
                    <div className="prices">
                      <span className="price">$190.12</span>
                    </div>
                  </div>
                </div>
                
              </div>
              <div className="slide-item">
                
                <div className="product-item">
                  <div className="product-thumb">
                    <img src="/assets/img/shop/12.png" alt="Image" />
                    <div className="product-action">
                      <a className="action-quick-view" href="/shop-cart"><i className="ion-ios-cart"></i></a></Link>
                      <a className="action-quick-view" href="#"><i className="ion-arrow-expand"></i></a></Link>
                      <a className="action-quick-view" href="/shop-wishlist"><i className="ion-heart"></i></a></Link>
                      <a className="action-quick-view" href="/shop-compare"><i className="ion-shuffle"></i></a></Link>
                    </div>
                  </div>
                  <div className="product-info">
                    <div className="rating">
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                    </div>
                    <h4 className="title"><Link href="/shop-single-product">Sassy Crib and Floor Mirror</Link></h4>
                    <div className="prices">
                      <span className="price">$190.12</span>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  
    </Layout>
  )
}
