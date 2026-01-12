import Layout from '../components/Layout'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function ShopCompare() {
  const router = useRouter()
  
  return (
    <Layout title="Shop Compare - Kidol - Kids Toys Store eCommerce HTML Template">
      
    
    <section className="page-title-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 m-auto">
            <div className="page-title-content text-center">
              <h2 className="title">Compare</h2>
              <div className="bread-crumbs"><Link href="/"> Home </Link><span className="breadcrumb-sep"> // </span><span className="active"> Compare</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    

    
    <section className="product-area compare-page-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="section-title text-center">
              <h2 className="title">Compare</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="compare-page-content-wrap">
              <div className="compare-table table-responsive">
                <table className="table table-bordered mb-0">
                  <tbody>
                    <tr>
                      <td className="first-column">Product</td>
                      <td className="product-image-title">
                        <a href="/shop-single-product" className="image">
                          <img className="img-fluid" src="/assets/img/shop/1.jpg" alt="Image" />
                        </a></Link>
                        <a href="#" className="category">Puzzles</a></Link>
                        <Link href="/shop-single-product" className="title">Jigsaw Puzzles For Kids</Link>
                      </td>
                      <td className="product-image-title">
                        <a href="/shop-single-product" className="image">
                          <img className="img-fluid" src="/assets/img/shop/2.jpg" alt="Image" />
                        </a></Link>
                        <a href="#" className="category">Ships</a></Link>
                        <Link href="/shop-single-product" className="title"> Bruder Toys Mini Ships</Link>
                      </td>
                      <td className="product-image-title">
                        <a href="/shop-single-product" className="image">
                          <img className="img-fluid" src="/assets/img/shop/3.jpg" alt="Image" />
                        </a></Link>
                        <a href="#" className="category">Mirror</a></Link>
                        <Link href="/shop-single-product" className="title"> Sassy Crib and Floor Mirror</Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="first-column">Description</td>
                      <td className="pro-desc">
                        <p>Samsome Note Book Pro 5 is an the best Laptop on this budgeted. You can satisfied
                          after usign this laptop. </p>
                      </td>
                      <td className="pro-desc">
                        <p>Samsome Note Book Pro 5 is an the best Laptop on this budgeted. You can satisfied
                          after usign this laptop. </p>
                      </td>
                      <td className="pro-desc">
                        <p>Samsome Note Book Pro 5 is an the best Laptop on this budgeted. You can satisfied
                          after usign this laptop. </p>
                      </td>
                    </tr>
                    <tr>
                      <td className="first-column">Price</td>
                      <td className="pro-price">$295</td>
                      <td className="pro-price">$275</td>
                      <td className="pro-price">$395</td>
                    </tr>
                    <tr>
                      <td className="first-column">Color</td>
                      <td className="pro-color">Black</td>
                      <td className="pro-color">Red</td>
                      <td className="pro-color">Blue</td>
                    </tr>
                    <tr>
                      <td className="first-column">Stock</td>
                      <td className="pro-stock">In Stock</td>
                      <td className="pro-stock">Stock Out</td>
                      <td className="pro-stock">In Stock</td>
                    </tr>
                    <tr>
                      <td className="first-column">Add to cart</td>
                      <td><Link href="/shop-cart" className="check-btn">Add to Cart</Link></td>
                      <td><Link href="/shop-cart" className="check-btn disabled">Add to Cart</Link></td>
                      <td><Link href="/shop-cart" className="check-btn">Add to Cart</Link></td>
                    </tr>
                    <tr>
                      <td className="first-column">Rating</td>
                      <td className="pro-ratting">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </td>
                      <td className="pro-ratting">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </td>
                      <td className="pro-ratting">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </td>
                    </tr>
                    <tr>
                      <td className="first-column">Remove</td>
                      <td className="pro-remove">
                        <button><i className="ion-ios-trash-outline"></i></button>
                      </td>
                      <td className="pro-remove">
                        <button><i className="ion-ios-trash-outline"></i></button>
                      </td>
                      <td className="pro-remove">
                        <button><i className="ion-ios-trash-outline"></i></button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  
    </Layout>
  )
}
