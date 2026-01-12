import Layout from '../components/Layout'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Index2() {
  const router = useRouter()
  
  return (
    <Layout title="Home 02 - Kidol - Kids Toys Store eCommerce HTML Template">
      
    
    <section className="home-slider-area slider-default">
      <div className="home-slider-content">
        <div className="swiper-container home-slider-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              
              <div className="home-slider-item item-two">
                <div className="bg-thumb bg-img" data-bg-img="/assets/img/slider/3.jpg"></div>
                <div className="slider-content-area">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-6 offset-sm-6">
                        <div className="content content2">
                          <div className="inner-content">
                            <h4 className="subtitle">New Arrivals</h4>
                            <h2>Best Kids Store & Online Shop</h2>
                            <Link href="/shop" className="btn-theme">Discover Now</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shape-top bg-img" data-bg-img="/assets/img/photos/1.png"></div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
    

    
    <div className="brand-logo-area brand-logo-default-area">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="swiper-container brand-logo-slider-container">
              <div className="swiper-wrapper brand-logo-slider">
                <div className="swiper-slide brand-logo-item">
                  <a href="#/"><img src="/assets/img/brand-logo/1.png" alt="Brand-Logo" /></a></Link>
                </div>
                <div className="swiper-slide brand-logo-item">
                  <a href="#/"><img src="/assets/img/brand-logo/2.png" alt="Brand-Logo" /></a></Link>
                </div>
                <div className="swiper-slide brand-logo-item">
                  <a href="#/"><img src="/assets/img/brand-logo/3.png" alt="Brand-Logo" /></a></Link>
                </div>
                <div className="swiper-slide brand-logo-item">
                  <a href="#/"><img src="/assets/img/brand-logo/4.png" alt="Brand-Logo" /></a></Link>
                </div>
                <div className="swiper-slide brand-logo-item">
                  <a href="#/"><img src="/assets/img/brand-logo/5.png" alt="Brand-Logo" /></a></Link>
                </div>
                <div className="swiper-slide brand-logo-item">
                  <a href="#/"><img src="/assets/img/brand-logo/6.png" alt="Brand-Logo" /></a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    

    
    <section className="featured-area featured-default-area" data-aos="fade-up" data-aos-duration="1000">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <div className="featured-item">
              <div className="icon">
                <img src="/assets/img/icons/f1.png" alt="Image" />
              </div>
              <div className="featured-info">
                <h4 className="title">Free Shipping</h4>
                <p>Lorem ipsum dolor sit amet consect adipiscing elit sed does</p>
              </div>
              <div className="shape-group">
                <div className="shape-style1">
                  <img src="/assets/img/icons/f4.png" alt="Image" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="featured-item mt-xs-30">
              <div className="icon">
                <img src="/assets/img/icons/f2.png" alt="Image" />
              </div>
              <div className="featured-info">
                <h4 className="title">Support 24/7</h4>
                <p>Lorem ipsum dolor sit amet consect adipiscing elit sed does</p>
              </div>
              <div className="shape-group">
                <div className="shape-style1">
                  <img src="/assets/img/icons/f5.png" alt="Image" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="featured-item mt-sm-30">
              <div className="icon">
                <img src="/assets/img/icons/f3.png" alt="Image" />
              </div>
              <div className="featured-info">
                <h4 className="title">Money Return</h4>
                <p>Lorem ipsum dolor sit amet consect adipiscing elit sed does</p>
              </div>
              <div className="shape-group">
                <div className="shape-style1">
                  <img src="/assets/img/icons/f6.png" alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    

    
    <section className="product-area product-style4-area">
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto">
            <div className="section-title text-center" data-aos="fade-up" data-aos-duration="1000">
              <h2 className="title">Trending Product</h2>
              <div className="desc">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="product-tab1-slider" data-aos="fade-up" data-aos-duration="1300">
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
    

    
    <section className="category-area product-category2-area style-two" data-aos="fade-up" data-aos-duration="1000">
      <div className="container">
        <div className="row category-items2">
          <div className="col-md-6">
            <div className="category-item">
              <div className="thumb">
                <img className="w-100" src="/assets/img/category/4.png" alt="Image" />
                <div className="content">
                  <div className="contact-info">
                    <h2 className="title text-white">Collection</h2>
                    <h4 className="price text-white">Flat <span>20%</span> Off</h4>
                  </div>
                  <Link href="/shop" className="btn-theme">Shop Now</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="category-item mt-sm-50">
              <div className="thumb">
                <img className="w-100" src="/assets/img/category/5.png" alt="Image" />
                <div className="content">
                  <div className="contact-info">
                    <h2 className="title">Collection</h2>
                    <h4 className="price">Flat <span>30%</span> Off</h4>
                  </div>
                  <Link href="/shop" className="btn-theme">Shop Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    

    
    <section className="divider-area divider-style1-area bg-img" data-bg-img="/assets/img/divider/bg1.png" data-aos="fade-up" data-aos-duration="1000">
      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-6">
            <div className="divider-content">
              <h2 className="title">Deal Of The Day</h2>
              <p><span>UPTO 35%  OFF </span> On All Other Baby Products</p>
              <div className="countdown-content">
                <ul className="countdown-timer">
                  <li><span className="days">00</span><p className="days_text">Days</p></li>
                  <li><span className="hours">00</span><p className="hours_text">Hours</p></li>
                  <li><span className="minutes">00</span><p className="minutes_text">MINUTES</p></li>
                  <li><span className="seconds">00</span><p className="seconds_text">SECONDS</p></li>
                </ul>
              </div>
              <Link href="/shop" className="btn-theme">Shop Now</Link>
            </div>
          </div>
        </div>
        <div className="shape-group">
          <div className="shape-style6">
            <img src="/assets/img/divider/3.png" alt="Image" />
          </div>
        </div>
      </div>
      <div className="shape-group">
        <div className="shape-style1" data-bg-img="/assets/img/divider/shape1.png"></div>
        <div className="shape-style2" data-bg-img="/assets/img/divider/shape2.png"></div>
      </div>
    </section>
    

    
    <section className="product-area product-style3-area">
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto">
            <div className="section-title text-center" data-aos="fade-up" data-aos-duration="1000">
              <h2 className="title">New Products</h2>
              <div className="desc">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row" data-aos="fade-up" data-aos-duration="1300">
          <div className="col-md-12">
            <div className="product-tab-content">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="our-features-tab" data-bs-toggle="tab" data-bs-target="#our-features" type="button" role="tab" aria-controls="our-features" aria-selected="true">All Items</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="best-sellers-tab" data-bs-toggle="tab" data-bs-target="#best-sellers" type="button" role="tab" aria-controls="best-sellers" aria-selected="false">Baby Dress</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link mr-0" id="new-items-tab" data-bs-toggle="tab" data-bs-target="#new-items" type="button" role="tab" aria-controls="new-items" aria-selected="false">Baby Toys</button>
                </li>
              </ul>

              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="our-features" role="tabpanel" aria-labelledby="our-features-tab">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="product">
                        <div className="row">
                          <div className="col-lg-3 col-md-4 col-sm-6">
                            
                            <div className="product-item">
                              <div className="product-thumb">
                                <img src="/assets/img/shop/1.png" alt="Image" />
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
                                <h4 className="title"><Link href="/shop-single-product">Funskool Teddy</Link></h4>
                                <div className="prices">
                                  <span className="price">$190.12</span>
                                </div>
                              </div>
                            </div>
                            
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6">
                            
                            <div className="product-item">
                              <div className="product-thumb">
                                <img src="/assets/img/shop/2.png" alt="Image" />
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
                                <h4 className="title"><Link href="/shop-single-product">Baby Play Sets</Link></h4>
                                <div className="prices">
                                  <span className="price">$190.12</span>
                                </div>
                              </div>
                            </div>
                            
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6">
                            
                            <div className="product-item">
                              <div className="product-thumb">
                                <img src="/assets/img/shop/3.png" alt="Image" />
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
                                <h4 className="title"><Link href="/shop-single-product">Jigsaw Puzzles For Kids</Link></h4>
                                <div className="prices">
                                  <span className="price">$190.12</span>
                                </div>
                              </div>
                            </div>
                            
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6">
                            
                            <div className="product-item">
                              <div className="product-thumb">
                                <img src="/assets/img/shop/4.png" alt="Image" />
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
                                <h4 className="title"><Link href="/shop-single-product">Abstract Girl Dress</Link></h4>
                                <div className="prices">
                                  <span className="price">$190.12</span>
                                </div>
                              </div>
                            </div>
                            
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6">
                            
                            <div className="product-item">
                              <div className="product-thumb">
                                <img src="/assets/img/shop/5.png" alt="Image" />
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
                                <h4 className="title"><Link href="/shop-single-product">Bruder Toys Mini Ships</Link></h4>
                                <div className="prices">
                                  <span className="price">$190.12</span>
                                </div>
                              </div>
                            </div>
                            
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6">
                            
                            <div className="product-item">
                              <div className="product-thumb">
                                <img src="/assets/img/shop/6.png" alt="Image" />
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
                                <h4 className="title"><Link href="/shop-single-product">Abstract Boy Dress</Link></h4>
                                <div className="prices">
                                  <span className="price">$190.12</span>
                                </div>
                              </div>
                            </div>
                            
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6">
                            
                            <div className="product-item">
                              <div className="product-thumb">
                                <img src="/assets/img/shop/7.png" alt="Image" />
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
                                <h4 className="title"><Link href="/shop-single-product">Funskool Teddy Pink</Link></h4>
                                <div className="prices">
                                  <span className="price">$190.12</span>
                                </div>
                              </div>
                            </div>
                            
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6">
                            
                            <div className="product-item">
                              <div className="product-thumb">
                                <img src="/assets/img/shop/8.png" alt="Image" />
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
                                <h4 className="title"><Link href="/shop-single-product">Toys Box For Baby</Link></h4>
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
                </div>
                <div className="tab-pane fade" id="best-sellers" role="tabpanel" aria-labelledby="best-sellers-tab">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="product">
                        <div className="row">
                          <div className="col-lg-3 col-md-4 col-sm-6">
                            
                            <div className="product-item">
                              <div className="product-thumb">
                                <img src="/assets/img/shop/5.png" alt="Image" />
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
                                <h4 className="title"><Link href="/shop-single-product">Bruder Toys Mini Ships</Link></h4>
                                <div className="prices">
                                  <span className="price">$190.12</span>
                                </div>
                              </div>
                            </div>
                            
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6">
                            
                            <div className="product-item">
                              <div className="product-thumb">
                                <img src="/assets/img/shop/6.png" alt="Image" />
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
                                <h4 className="title"><Link href="/shop-single-product">Abstract Boy Dress</Link></h4>
                                <div className="prices">
                                  <span className="price">$190.12</span>
                                </div>
                              </div>
                            </div>
                            
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6">
                            
                            <div className="product-item">
                              <div className="product-thumb">
                                <img src="/assets/img/shop/7.png" alt="Image" />
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
                                <h4 className="title"><Link href="/shop-single-product">Funskool Teddy Pink</Link></h4>
                                <div className="prices">
                                  <span className="price">$190.12</span>
                                </div>
                              </div>
                            </div>
                            
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6">
                            
                            <div className="product-item">
                              <div className="product-thumb">
                                <img src="/assets/img/shop/8.png" alt="Image" />
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
                                <h4 className="title"><Link href="/shop-single-product">Toys Box For Baby</Link></h4>
                                <div className="prices">
                                  <span className="price">$190.12</span>
                                </div>
                              </div>
                            </div>
                            
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6">
                            
                            <div className="product-item">
                              <div className="product-thumb">
                                <img src="/assets/img/shop/1.png" alt="Image" />
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
                                <h4 className="title"><Link href="/shop-single-product">Funskool Teddy</Link></h4>
                                <div className="prices">
                                  <span className="price">$190.12</span>
                                </div>
                              </div>
                            </div>
                            
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6">
                            
                            <div className="product-item">
                              <div className="product-thumb">
                                <img src="/assets/img/shop/2.png" alt="Image" />
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
                                <h4 className="title"><Link href="/shop-single-product">Baby Play Sets</Link></h4>
                                <div className="prices">
                                  <span className="price">$190.12</span>
                                </div>
                              </div>
                            </div>
                            
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6">
                            
                            <div className="product-item">
                              <div className="product-thumb">
                                <img src="/assets/img/shop/3.png" alt="Image" />
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
                                <h4 className="title"><Link href="/shop-single-product">Jigsaw Puzzles For Kids</Link></h4>
                                <div className="prices">
                                  <span className="price">$190.12</span>
                                </div>
                              </div>
                            </div>
                            
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6">
                            
                            <div className="product-item">
                              <div className="product-thumb">
                                <img src="/assets/img/shop/4.png" alt="Image" />
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
                                <h4 className="title"><Link href="/shop-single-product">Abstract Girl Dress</Link></h4>
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
                </div>
                <div className="tab-pane fade" id="new-items" role="tabpanel" aria-labelledby="new-items-tab">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="product">
                        <div className="row">
                          <div className="col-lg-3 col-md-4 col-sm-6">
                            
                            <div className="product-item">
                              <div className="product-thumb">
                                <img src="/assets/img/shop/1.png" alt="Image" />
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
                                <h4 className="title"><Link href="/shop-single-product">Funskool Teddy</Link></h4>
                                <div className="prices">
                                  <span className="price">$190.12</span>
                                </div>
                              </div>
                            </div>
                            
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6">
                            
                            <div className="product-item">
                              <div className="product-thumb">
                                <img src="/assets/img/shop/2.png" alt="Image" />
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
                                <h4 className="title"><Link href="/shop-single-product">Baby Play Sets</Link></h4>
                                <div className="prices">
                                  <span className="price">$190.12</span>
                                </div>
                              </div>
                            </div>
                            
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6">
                            
                            <div className="product-item">
                              <div className="product-thumb">
                                <img src="/assets/img/shop/3.png" alt="Image" />
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
                                <h4 className="title"><Link href="/shop-single-product">Jigsaw Puzzles For Kids</Link></h4>
                                <div className="prices">
                                  <span className="price">$190.12</span>
                                </div>
                              </div>
                            </div>
                            
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6">
                            
                            <div className="product-item">
                              <div className="product-thumb">
                                <img src="/assets/img/shop/4.png" alt="Image" />
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
                                <h4 className="title"><Link href="/shop-single-product">Abstract Girl Dress</Link></h4>
                                <div className="prices">
                                  <span className="price">$190.12</span>
                                </div>
                              </div>
                            </div>
                            
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6">
                            
                            <div className="product-item">
                              <div className="product-thumb">
                                <img src="/assets/img/shop/5.png" alt="Image" />
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
                                <h4 className="title"><Link href="/shop-single-product">Bruder Toys Mini Ships</Link></h4>
                                <div className="prices">
                                  <span className="price">$190.12</span>
                                </div>
                              </div>
                            </div>
                            
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6">
                            
                            <div className="product-item">
                              <div className="product-thumb">
                                <img src="/assets/img/shop/6.png" alt="Image" />
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
                                <h4 className="title"><Link href="/shop-single-product">Abstract Boy Dress</Link></h4>
                                <div className="prices">
                                  <span className="price">$190.12</span>
                                </div>
                              </div>
                            </div>
                            
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6">
                            
                            <div className="product-item">
                              <div className="product-thumb">
                                <img src="/assets/img/shop/7.png" alt="Image" />
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
                                <h4 className="title"><Link href="/shop-single-product">Funskool Teddy Pink</Link></h4>
                                <div className="prices">
                                  <span className="price">$190.12</span>
                                </div>
                              </div>
                            </div>
                            
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-6">
                            
                            <div className="product-item">
                              <div className="product-thumb">
                                <img src="/assets/img/shop/8.png" alt="Image" />
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
                                <h4 className="title"><Link href="/shop-single-product">Toys Box For Baby</Link></h4>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    

    
    <section className="testimonial-area testimonial-default-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="section-title text-center" data-aos="fade-up" data-aos-duration="1000">
              <h2 className="title">Testimonial</h2>
              <div className="desc">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row" data-aos="fade-up" data-aos-duration="1300">
          <div className="col-lg-12">
            <div className="swiper-container testimonial-slider-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="client-content">
                      <div className="inner-content">
                        <div className="icon">
                          <img src="/assets/img/icons/1.png" alt="Image" />
                        </div>
                        <p>Lorem ipsum dolor sit amet, consect adipisi elit sed do eiusmod temporlo incidid ut labore et dolore magnalop aliquall Ut enim ad minim.</p>
                      </div>
                      <div className="shape-group">
                        <div className="shape-style1">
                          <img src="/assets/img/testimonial/shape1.png" alt="Image" />
                        </div>
                      </div>
                    </div>
                    <div className="client-info">
                      <div className="thumb">
                        <img src="/assets/img/testimonial/1.png" alt="Image" />
                      </div>
                      <div className="desc">
                        <h4 className="title">Dasia Lovell</h4>
                        <p>Customer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="client-content">
                      <div className="inner-content">
                        <div className="icon">
                          <img src="/assets/img/icons/1.png" alt="Image" />
                        </div>
                        <p>There are many variations of passage of Lorem Ipsum available, but the on majority have suffered alteration in some form, by injected humour.</p>
                      </div>
                      <div className="shape-group">
                        <div className="shape-style1">
                          <img src="/assets/img/testimonial/shape1.png" alt="Image" />
                        </div>
                      </div>
                    </div>
                    <div className="client-info">
                      <div className="thumb">
                        <img src="/assets/img/testimonial/2.png" alt="Image" />
                      </div>
                      <div className="desc">
                        <h4 className="title">Dasia Lovell</h4>
                        <p>Customer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="client-content">
                      <div className="inner-content">
                        <div className="icon">
                          <img src="/assets/img/icons/1.png" alt="Image" />
                        </div>
                        <p>Lorem ipsum dolor sit amet, consect adipisi elit sed do eiusmod temporlo incidid ut labore et dolore magnalop aliquall Ut enim ad minim.</p>
                      </div>
                      <div className="shape-group">
                        <div className="shape-style1">
                          <img src="/assets/img/testimonial/shape1.png" alt="Image" />
                        </div>
                      </div>
                    </div>
                    <div className="client-info">
                      <div className="thumb">
                        <img src="/assets/img/testimonial/3.png" alt="Image" />
                      </div>
                      <div className="desc">
                        <h4 className="title">Akhil Newman</h4>
                        <p>Customer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="client-content">
                      <div className="inner-content">
                        <div className="icon">
                          <img src="/assets/img/icons/1.png" alt="Image" />
                        </div>
                        <p>There are many variations of passage of Lorem Ipsum available, but the on majority have suffered alteration in some form, by injected humour.</p>
                      </div>
                      <div className="shape-group">
                        <div className="shape-style1">
                          <img src="/assets/img/testimonial/shape1.png" alt="Image" />
                        </div>
                      </div>
                    </div>
                    <div className="client-info">
                      <div className="thumb">
                        <img src="/assets/img/testimonial/1.png" alt="Image" />
                      </div>
                      <div className="desc">
                        <h4 className="title">Dasia Lovell</h4>
                        <p>Customer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="client-content">
                      <div className="inner-content">
                        <div className="icon">
                          <img src="/assets/img/icons/1.png" alt="Image" />
                        </div>
                        <p>Lorem ipsum dolor sit amet, consect adipisi elit sed do eiusmod temporlo incidid ut labore et dolore magnalop aliquall Ut enim ad minim.</p>
                      </div>
                      <div className="shape-group">
                        <div className="shape-style1">
                          <img src="/assets/img/testimonial/shape1.png" alt="Image" />
                        </div>
                      </div>
                    </div>
                    <div className="client-info">
                      <div className="thumb">
                        <img src="/assets/img/testimonial/2.png" alt="Image" />
                      </div>
                      <div className="desc">
                        <h4 className="title">Dasia Lovell</h4>
                        <p>Customer</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="client-content">
                      <div className="inner-content">
                        <div className="icon">
                          <img src="/assets/img/icons/1.png" alt="Image" />
                        </div>
                        <p>There are many variations of passage of Lorem Ipsum available, but the on majority have suffered alteration in some form, by injected humour.</p>
                      </div>
                      <div className="shape-group">
                        <div className="shape-style1">
                          <img src="/assets/img/testimonial/shape1.png" alt="Image" />
                        </div>
                      </div>
                    </div>
                    <div className="client-info">
                      <div className="thumb">
                        <img src="/assets/img/testimonial/3.png" alt="Image" />
                      </div>
                      <div className="desc">
                        <h4 className="title">Akhil Newman</h4>
                        <p>Customer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="thumb-style bg-img" data-bg-img="/assets/img/testimonial/shape2.png"></div>
    </section>
    

    
    <section className="blog-area blog-default2-area">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-6 m-auto">
            <div className="section-title text-center" data-aos="fade-up" data-aos-duration="1000">
              <h2 className="title">Latest Blog</h2>
              <div className="desc">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row" data-aos="fade-up" data-aos-duration="1300">
          <div className="col-lg-4 col-md-6 col-sm-6">
            
            <div className="post-item">
              <div className="thumb">
                <Link href="/blog-details"><img src="/assets/img/blog/1.jpg" alt="Image" /></Link>
              </div>
              <div className="content">
                <div className="meta">By, <Link href="/blog" className="author">June Cha </Link><span className="dots"></span><span className="post-date">25 May, 2121</span></div>
                <h4 className="title">
                  <Link href="/blog-details">Baby Planet's toys makes learning so easy</Link>
                </h4>
                <Link href="/blog-details" className="btn-theme">Read More</Link>
              </div>
            </div>
            
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            
            <div className="post-item mt-xs-30">
              <div className="thumb">
                <Link href="/blog-details"><img src="/assets/img/blog/2.jpg" alt="Image" /></Link>
              </div>
              <div className="content">
                <div className="meta">By, <Link href="/blog" className="author">June Cha </Link><span className="dots"></span><span className="post-date">July 24, 2022</span></div>
                <h4 className="title">
                  <Link href="/blog-details">Mother revolves around her children</Link>
                </h4>
                <Link href="/blog-details" className="btn-theme">Read More</Link>
              </div>
            </div>
            
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            
            <div className="post-item mt-md-30">
              <div className="thumb">
                <Link href="/blog-details"><img src="/assets/img/blog/3.jpg" alt="Image" /></Link>
              </div>
              <div className="content">
                <div className="meta">By, <Link href="/blog" className="author">June Cha </Link><span className="dots"></span><span className="post-date">January 28, 2022</span></div>
                <h4 className="title">
                  <Link href="/blog-details">Learn while you grow toys Baby Planet</Link>
                </h4>
                <Link href="/blog-details" className="btn-theme">Read More</Link>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
    
  
    </Layout>
  )
}
