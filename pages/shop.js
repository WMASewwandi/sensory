import Layout from '../components/Layout'
import Link from 'next/link'

export default function Shop() {
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
            <div className="col-lg-12">
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
                    <li><Link href="/shop">Sort by Price: <i className="lastudioicon-arrow-up"></i></Link></li>
                    <li><Link href="/shop">Sort by Price: <i className="lastudioicon-arrow-down"></i></Link></li>
                  </ul>
                </div>
              </div>
              <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="column-three" role="tabpanel" aria-labelledby="column-three-tab">
                  <div className="row">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
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
                <div className="tab-pane fade" id="nav-list" role="tabpanel" aria-labelledby="nav-list-tab">
                  <div className="row">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                      <div key={num} className="col-12 product-items-list">
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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla quis ipsum enim viverra. Enim in morbi tincidunt ante luctus tincidunt integer. Sed adipiscing vehicula.</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="tab-pane fade" id="column-two" role="tabpanel" aria-labelledby="column-two-tab">
                  <div className="row">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                      <div key={num} className="col-sm-6">
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
              <div className="row">
                <div className="col-lg-12">
                  <div className="pagination-area">
                    <nav>
                      <ul className="page-numbers">
                        <li>
                          <Link href="/shop" className="page-number active">1</Link>
                        </li>
                        <li>
                          <Link href="/shop" className="page-number">2</Link>
                        </li>
                        <li>
                          <Link href="/shop" className="page-number">3</Link>
                        </li>
                        <li>
                          <Link href="/shop" className="page-number next">
                            <i className="fa fa-angle-right"></i>
                          </Link>
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


