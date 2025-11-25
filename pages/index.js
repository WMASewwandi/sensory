import Layout from '../components/Layout'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout title="Home 01 - Kidol - Kids Toys Store eCommerce HTML Template">
      {/* Hero Area */}
      <section className="home-slider-area slider-default">
        <div className="home-slider-content">
          <div className="swiper-container home-slider-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="home-slider-item">
                  <div className="thumb-one bg-img" data-bg-img="/assets/img/slider/1.png"></div>
                  <div className="slider-content-area">
                    <div className="container">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="content">
                            <div className="inner-content">
                              <h2>Best Kids Store & Online Shop</h2>
                              <p>Give The Gift Of Your Children Everyday</p>
                              <Link href="/shop" className="btn-theme">Shop This Now</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img className="thumb-two" src="/assets/img/slider/2.png" alt="Image" />
                    <img className="thumb-three" src="/assets/img/slider/3.png" alt="Image" />
                    <img className="thumb-four" src="/assets/img/photos/3.png" alt="Image" />
                  </div>
                  <div className="shape-top bg-img" data-bg-img="/assets/img/photos/1.png"></div>
                  <div className="shape-bottom bg-img" data-bg-img="/assets/img/photos/2.png"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Area */}
      <section className="category-area product-category1-area" data-aos="fade-up" data-aos-duration="1000">
        <div className="container">
          <div className="row category-items1">
            <div className="col-sm-6 col-md-4">
              <div className="category-item">
                <div className="thumb thumb-style1">
                  <img src="/assets/img/category/1.png" alt="Image" />
                  <div className="content">
                    <div className="contact-info">
                      <h2 className="title">Baby Dress</h2>
                      <h4 className="price">$32.00</h4>
                    </div>
                    <Link href="/shop" className="btn-link">Shop Now</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="category-item mt-xs-25">
                <div className="thumb thumb-style2">
                  <img src="/assets/img/category/2.png" alt="Image" />
                  <div className="content">
                    <div className="contact-info">
                      <h2 className="title">Baby Toys</h2>
                      <h4 className="price">$25.00</h4>
                    </div>
                    <Link href="/shop" className="btn-link">Shop Now</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="category-item mt-sm-25">
                <div className="thumb thumb-style3">
                  <img src="/assets/img/category/3.png" alt="Image" />
                  <div className="content">
                    <div className="contact-info">
                      <h2 className="title">Teddy Bear</h2>
                      <h4 className="price">$18.00</h4>
                    </div>
                    <Link href="/shop" className="btn-link">Shop Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Tab Area - This is a large section, keeping it simplified but functional */}
      <section className="product-area product-style1-area">
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
          <div className="row">
            <div className="col-md-12">
              <div className="product-tab-content">
                <ul className="nav nav-tabs" id="myTab" role="tablist" data-aos="fade-up" data-aos-duration="1000">
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

                <div className="tab-content" id="myTabContent" data-aos="fade-up" data-aos-duration="1300">
                  <div className="tab-pane fade show active" id="our-features" role="tabpanel" aria-labelledby="our-features-tab">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="product">
                          <div className="row">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                              <div key={num} className="col-lg-3 col-md-4 col-sm-6">
                                <div className="product-item">
                                  <div className="product-thumb">
                                    <img src={`/assets/img/shop/${num}.png`} alt="Image" />
                                    <div className="product-action">
                                      <Link href="/shop-cart" className="action-quick-view"><i className="ion-ios-cart"></i></Link>
                                      <a className="action-quick-view" href="#"><i className="ion-arrow-expand"></i></a>
                                      <Link href="/shop-wishlist" className="action-quick-view"><i className="ion-heart"></i></Link>
                                      <Link href="/shop-compare" className="action-quick-view"><i className="ion-shuffle"></i></Link>
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
                                    <h4 className="title"><Link href="/shop-single-product">Product {num}</Link></h4>
                                    <div className="prices">
                                      <span className="price">$190.12</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
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
                            {[5, 6, 7, 8, 1, 2, 3, 4].map((num) => (
                              <div key={num} className="col-lg-3 col-md-4 col-sm-6">
                                <div className="product-item">
                                  <div className="product-thumb">
                                    <img src={`/assets/img/shop/${num}.png`} alt="Image" />
                                    <div className="product-action">
                                      <Link href="/shop-cart" className="action-quick-view"><i className="ion-ios-cart"></i></Link>
                                      <a className="action-quick-view" href="#"><i className="ion-arrow-expand"></i></a>
                                      <Link href="/shop-wishlist" className="action-quick-view"><i className="ion-heart"></i></Link>
                                      <Link href="/shop-compare" className="action-quick-view"><i className="ion-shuffle"></i></Link>
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
                                    <h4 className="title"><Link href="/shop-single-product">Product {num}</Link></h4>
                                    <div className="prices">
                                      <span className="price">$190.12</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
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
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                              <div key={num} className="col-lg-3 col-md-4 col-sm-6">
                                <div className="product-item">
                                  <div className="product-thumb">
                                    <img src={`/assets/img/shop/${num}.png`} alt="Image" />
                                    <div className="product-action">
                                      <Link href="/shop-cart" className="action-quick-view"><i className="ion-ios-cart"></i></Link>
                                      <a className="action-quick-view" href="#"><i className="ion-arrow-expand"></i></a>
                                      <Link href="/shop-wishlist" className="action-quick-view"><i className="ion-heart"></i></Link>
                                      <Link href="/shop-compare" className="action-quick-view"><i className="ion-shuffle"></i></Link>
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
                                    <h4 className="title"><Link href="/shop-single-product">Product {num}</Link></h4>
                                    <div className="prices">
                                      <span className="price">$190.12</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
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

      {/* Divider Area */}
      <section className="divider-area divider-style1-area bg-img" data-bg-img="/assets/img/divider/bg1.png" data-aos="fade-up" data-aos-duration="1000">
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-6 m-auto">
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
            <div className="shape-style3">
              <img src="/assets/img/divider/1.png" alt="Image" />
            </div>
            <div className="shape-style4">
              <img src="/assets/img/divider/2.png" alt="Image" />
            </div>
          </div>
        </div>
        <div className="shape-group">
          <div className="shape-style1" data-bg-img="/assets/img/divider/shape1.png"></div>
          <div className="shape-style2" data-bg-img="/assets/img/divider/shape2.png"></div>
        </div>
      </section>

      {/* Category Area 2 */}
      <section className="category-area product-category2-area" data-aos="fade-up" data-aos-duration="1000">
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

      {/* Trending Product */}
      <section className="product-area product-style2-area">
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
              <div className="product-tab1-slider" data-aos="fade-up" data-aos-duration="1500">
                {[9, 10, 11, 12, 9, 10, 11, 12].map((num, idx) => (
                  <div key={idx} className="slide-item">
                    <div className="product-item">
                      <div className="product-thumb">
                        <img src={`/assets/img/shop/${num}.png`} alt="Image" />
                        <div className="product-action">
                          <Link href="/shop-cart" className="action-quick-view"><i className="ion-ios-cart"></i></Link>
                          <a className="action-quick-view" href="#"><i className="ion-arrow-expand"></i></a>
                          <Link href="/shop-wishlist" className="action-quick-view"><i className="ion-heart"></i></Link>
                          <Link href="/shop-compare" className="action-quick-view"><i className="ion-shuffle"></i></Link>
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
                        <h4 className="title"><Link href="/shop-single-product">Product {num}</Link></h4>
                        <div className="prices">
                          <span className="price">$190.12</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Area */}
      <section className="blog-area blog-default-area">
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
            {[1, 2, 3].map((num) => (
              <div key={num} className="col-lg-4 col-md-6 col-sm-6">
                <div className={`post-item ${num === 2 ? 'mt-xs-30' : num === 3 ? 'mt-md-30' : ''}`}>
                  <div className="thumb">
                    <Link href="/blog-details"><img src={`/assets/img/blog/${num}.jpg`} alt="Image" /></Link>
                  </div>
                  <div className="content">
                    <div className="meta">By, <Link href="/blog" className="author">June Cha </Link><span className="dots"></span><span className="post-date">25 May, 2121</span></div>
                    <h4 className="title">
                      <Link href="/blog-details">Blog Post Title {num}</Link>
                    </h4>
                    <Link href="/blog-details" className="btn-theme">Read More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}


