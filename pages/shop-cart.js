import Layout from '../components/Layout'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function ShopCart() {
  const router = useRouter()
  
  return (
    <Layout title="Shop Cart - Kidol - Kids Toys Store eCommerce HTML Template">
      
    
    <section className="page-title-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 m-auto">
            <div className="page-title-content text-center">
              <h2 className="title">Cart</h2>
              <div className="bread-crumbs"><Link href="/"> Home </Link><span className="breadcrumb-sep"> // </span><span className="active"> Cart</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    

    
    <section className="product-area cart-page-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="section-title text-center">
              <h2 className="title">Cart</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="cart-table-wrap">
              <div className="cart-table table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th className="width-thumbnail"></th>
                      <th className="width-name">Product</th>
                      <th className="width-price"> Price</th>
                      <th className="width-quantity">Quantity</th>
                      <th className="width-subtotal">Subtotal</th>
                      <th className="width-remove"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="product-thumbnail">
                        <Link href="/shop-single-product"><img src="/assets/img/shop/details/nav1.jpg" alt="Image" /></Link>
                      </td>
                      <td className="product-name">
                        <h5><Link href="/shop-single-product">Jigsaw Puzzles For Kids</Link></h5>
                      </td>
                      <td className="product-price"><span className="amount">$120.00</span></td>
                      <td className="cart-quality">
                        <div className="product-details-quality">
                          <input type="number" className="input-text qty text" step="1" min="1" max="100" name="quantity" value="1" title="Qty" placeholder="" />
                        </div>
                      </td>
                      <td className="product-total"><span>$120.00</span></td>
                      <td className="product-remove"><a href="#"><i className="ion-ios-trash-outline"></i></a></Link></td>
                    </tr>
                    <tr>
                      <td className="product-thumbnail">
                        <Link href="/shop-single-product"><img src="/assets/img/shop/details/nav2.jpg" alt="Image" /></Link>
                      </td>
                      <td className="product-name">
                        <h5><Link href="/shop-single-product">Bruder Toys Mini Ships</Link></h5>
                      </td>
                      <td className="product-price"><span className="amount">$120.00</span></td>
                      <td className="cart-quality">
                        <div className="product-details-quality">
                          <input type="number" className="input-text qty text" step="1" min="1" max="100" name="quantity" value="1" title="Qty" placeholder="" />
                        </div>
                      </td>
                      <td className="product-total"><span>$120.00</span></td>
                      <td className="product-remove"><a href="#"><i className="ion-ios-trash-outline"></i></a></Link></td>
                    </tr>
                    <tr>
                      <td className="product-thumbnail">
                        <Link href="/shop-single-product"><img src="/assets/img/shop/details/nav3.jpg" alt="Image" /></Link>
                      </td>
                      <td className="product-name">
                        <h5><Link href="/shop-single-product">Sassy Crib and Floor Mirror</Link></h5>
                      </td>
                      <td className="product-price"><span className="amount">$120.00</span></td>
                      <td className="cart-quality">
                        <div className="product-details-quality">
                          <input type="number" className="input-text qty text" step="1" min="1" max="100" name="quantity" value="1" title="Qty" placeholder="" />
                        </div>
                      </td>
                      <td className="product-total"><span>$120.00</span></td>
                      <td className="product-remove"><a href="#"><i className="ion-ios-trash-outline"></i></a></Link></td>
                    </tr>
                </tbody>
              </table>
              </div>
            </div>
            <div className="cart-shiping-update-wrapper">
              <div className="cart-shiping-btn continure-btn">
                <a className="btn btn-link" href="/shop"><i className="ion-ios-arrow-left"></i> Back To Shop</a></Link>
              </div>
              <div className="cart-shiping-btn update-btn">
                <a className="btn btn-link" href="/shop"><i className="ion-ios-reload"></i> Back To Shop</a></Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="cart-calculate-discount-wrap mb-40">
              <h4>Calculate shipping </h4>
              <div className="calculate-discount-content">
                <div className="select-style">
                  <select className="select-active">
                    <option>Bangladesh</option>
                    <option>Bahrain</option>
                    <option>Azerbaijan</option>
                    <option>Barbados</option>
                    <option>Barbados</option>
                  </select>
                </div>
                <div className="select-style">
                  <select className="select-active">
                    <option>State / County</option>
                    <option>Bahrain</option>
                    <option>Azerbaijan</option>
                    <option>Barbados</option>
                    <option>Barbados</option>
                  </select>
                </div>
                <div className="input-style">
                  <input type="text" placeholder="Town / City" />
                </div>
                <div className="input-style">
                  <input type="text" placeholder="Postcode / ZIP" />
                </div>
                <div className="calculate-discount-btn">
                  <a className="btn btn-link" href="#/">Update</a></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="cart-calculate-discount-wrap mb-40">
              <h4>Coupon Discount </h4>
              <div className="calculate-discount-content">
                <p>Enter your coupon code if you have one.</p>
                <div className="input-style">
                  <input type="text" placeholder="Coupon code" />
                </div>
                <div className="calculate-discount-btn">
                  <a className="btn btn-link" href="#/">Apply Coupon</a></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <div className="grand-total-wrap">
              <div className="grand-total-content">
                <h3>Subtotal <span>$180.00</span></h3>
                <div className="grand-shipping">
                  <span>Shipping</span>
                  <ul>
                    <li><input type="radio" name="shipping" value="info" checked="checked" /><label>Free shipping</label></li>
                    <li><input type="radio" name="shipping" value="info" checked="checked" /><label>Flat rate: <span>$100.00</span></label></li>
                    <li><input type="radio" name="shipping" value="info" checked="checked" /><label>Local pickup: <span>$120.00</span></label></li>
                  </ul>
                </div>
                <div className="shipping-country">
                  <p>Shipping to Bangladesh</p>
                </div>
                <div className="grand-total">
                  <h4>Total <span>$185.00</span></h4>
                </div>
              </div>
              <div className="grand-total-btn">
                <Link href="/shop-checkout" className="btn btn-link">Proceed to checkout</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  
    </Layout>
  )
}
