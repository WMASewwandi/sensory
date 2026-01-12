import Layout from '../components/Layout'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Shop3Column() {
  const router = useRouter()
  
  return (
    <Layout title="Shop - Kidol - Kids Toys Store eCommerce HTML Template">
      
    
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
    

    
    <div className="product-area product-grid-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 order-0 order-lg-1">
            <div className="shop-toolbar-wrap">
              <div className="product-showing-status">
                <p className="count-result"><span>12 </span> Product Found of <span> 30</span></p>
              </div>
              <div className="product-view-mode">
                <nav>
                  <div className="nav nav-tabs active" id="nav-tab" role="tablist">
                    <button className="nav-link active" id="column-three-tab" data-bs-toggle="tab" data-bs-target="#column-three" type="button" role="tab" aria-controls="column-three" aria-selected="true"><i className="fa fa-th"></i></button>

                    <button className="nav-link" id="nav-list-tab" data-bs-toggle="tab" data-bs-target="#nav-list" type="button" role="tab" aria-controls="nav-list" aria-selected="false"><i className="fa fa-list"></i></button>

                    <button className="nav-link" id="column-two-tab" data-bs-toggle="tab" data-bs-target="#column-two" type="button" role="tab" aria-controls="column-two" aria-selected="true"><i className="fa fa-th-large"></i></button>
                  </div>
                </nav>
              </div>
              <div className="product-sorting-menu product-sorting">
                <span className="current">Sort By : <span> Default <i className="fa fa-angle-down"></i></span></span>
                <ul>
                  <li className="active"><Link href="/shop" className="active">Sort by Default</Link></li>
                  <li><Link href="/shop">Sort by Popularity</Link></li>
                  <li><Link href="/shop">Sort by Rated</Link></li>
                  <li><Link href="/shop">Sort by Latest</Link></li>
                  <li><a href="/shop">Sort by Price: <i className="lastudioicon-arrow-up"></i></a></Link></li>
                  <li><a href="/shop">Sort by Price: <i className="lastudioicon-arrow-down"></i></a></Link></li>
                </ul>
              </div>
            </div>
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="column-three" role="tabpanel" aria-labelledby="column-three-tab">
                <div className="row">
                  <div className="col-sm-6 col-md-4">
                    
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
                  <div className="col-sm-6 col-md-4">
                    
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
                  <div className="col-sm-6 col-md-4">
                    
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
                  <div className="col-sm-6 col-md-4">
                    
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
                  <div className="col-sm-6 col-md-4">
                    
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
                  <div className="col-sm-6 col-md-4">
                    
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
                  <div className="col-sm-6 col-md-4">
                    
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
                  <div className="col-sm-6 col-md-4">
                    
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
                  <div className="col-sm-6 col-md-4">
                    
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
                  <div className="col-sm-6 col-md-4">
                    
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
                  <div className="col-sm-6 col-md-4">
                    
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
                  <div className="col-sm-6 col-md-4">
                    
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
              <div className="tab-pane fade" id="nav-list" role="tabpanel" aria-labelledby="nav-list-tab">
                <div className="row">
                  <div className="col-12 product-items-list">
                    
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla quis ipsum enim viverra. Enim in morbi tincidunt ante luctus tincidunt integer. Sed adipiscing vehicula.</p>
                      </div>
                    </div>
                    
                  </div>
                  <div className="col-12 product-items-list">
                    
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla quis ipsum enim viverra. Enim in morbi tincidunt ante luctus tincidunt integer. Sed adipiscing vehicula.</p>
                      </div>
                    </div>
                    
                  </div>
                  <div className="col-12 product-items-list">
                    
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla quis ipsum enim viverra. Enim in morbi tincidunt ante luctus tincidunt integer. Sed adipiscing vehicula.</p>
                      </div>
                    </div>
                    
                  </div>
                  <div className="col-12 product-items-list">
                    
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla quis ipsum enim viverra. Enim in morbi tincidunt ante luctus tincidunt integer. Sed adipiscing vehicula.</p>
                      </div>
                    </div>
                    
                  </div>
                  <div className="col-12 product-items-list">
                    
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla quis ipsum enim viverra. Enim in morbi tincidunt ante luctus tincidunt integer. Sed adipiscing vehicula.</p>
                      </div>
                    </div>
                    
                  </div>
                  <div className="col-12 product-items-list">
                    
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla quis ipsum enim viverra. Enim in morbi tincidunt ante luctus tincidunt integer. Sed adipiscing vehicula.</p>
                      </div>
                    </div>
                    
                  </div>
                  <div className="col-12 product-items-list">
                    
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla quis ipsum enim viverra. Enim in morbi tincidunt ante luctus tincidunt integer. Sed adipiscing vehicula.</p>
                      </div>
                    </div>
                    
                  </div>
                  <div className="col-12 product-items-list">
                    
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla quis ipsum enim viverra. Enim in morbi tincidunt ante luctus tincidunt integer. Sed adipiscing vehicula.</p>
                      </div>
                    </div>
                    
                  </div>
                  <div className="col-12 product-items-list">
                    
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla quis ipsum enim viverra. Enim in morbi tincidunt ante luctus tincidunt integer. Sed adipiscing vehicula.</p>
                      </div>
                    </div>
                    
                  </div>
                  <div className="col-12 product-items-list">
                    
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla quis ipsum enim viverra. Enim in morbi tincidunt ante luctus tincidunt integer. Sed adipiscing vehicula.</p>
                      </div>
                    </div>
                    
                  </div>
                  <div className="col-12 product-items-list">
                    
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla quis ipsum enim viverra. Enim in morbi tincidunt ante luctus tincidunt integer. Sed adipiscing vehicula.</p>
                      </div>
                    </div>
                    
                  </div>
                  <div className="col-12 product-items-list">
                    
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla quis ipsum enim viverra. Enim in morbi tincidunt ante luctus tincidunt integer. Sed adipiscing vehicula.</p>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="column-two" role="tabpanel" aria-labelledby="column-two-tab">
                <div className="row">
                  <div className="col-sm-6">
                    
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
                  <div className="col-sm-6">
                    
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
                  <div className="col-sm-6">
                    
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
                  <div className="col-sm-6">
                    
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
                  <div className="col-sm-6">
                    
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
                  <div className="col-sm-6">
                    
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
                  <div className="col-sm-6">
                    
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
                  <div className="col-sm-6">
                    
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
                  <div className="col-sm-6">
                    
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
                  <div className="col-sm-6">
                    
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
                  <div className="col-sm-6">
                    
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
                  <div className="col-sm-6">
                    
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
            <div className="row">
              <div className="col-lg-12">
                <div className="pagination-area">
                  <nav>
                    <ul className="page-numbers">
                      <li>
                        <Link href="/blog" className="page-number active">1</Link>
                      </li>
                      <li>
                        <Link href="/blog" className="page-number">2</Link>
                      </li>
                      <li>
                        <Link href="/blog" className="page-number">3</Link>
                      </li>
                      <li>
                        <a className="page-number next" href="/blog">
                          <i className="fa fa-angle-right"></i>
                        </a></Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  
    </Layout>
  )
}
