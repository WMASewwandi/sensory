import Layout from '../components/Layout'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function ShopWishlist() {
  const router = useRouter()
  
  return (
    <Layout title="Wishlist - Kidol - Kids Toys Store eCommerce HTML Template">
      
    
    <section className="page-title-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 m-auto">
            <div className="page-title-content text-center">
              <h2 className="title">Wishlist</h2>
              <div className="bread-crumbs"><Link href="/"> Home </Link><span className="breadcrumb-sep"> // </span><span className="active"> Wishlist</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    

    
    <section className="product-area wishlist-page-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="section-title text-center">
              <h2 className="title">Wishlist</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <form action="#">
              <div className="wishlist-table-content">
                <div className="table-content table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th className="width-remove"></th>
                        <th className="width-thumbnail"></th>
                        <th className="width-name">Product</th>
                        <th className="width-price"> Unit price </th>
                        <th className="width-stock-status"> Stock status </th>
                        <th className="width-wishlist-cart"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="product-remove"><a href="#">×</a></Link></td>
                        <td className="product-thumbnail">
                          <Link href="/shop-single-product"><img src="/assets/img/shop/details/nav1.jpg" alt="Image" /></Link>
                        </td>
                        <td className="product-name">
                          <h5><Link href="/shop-single-product">Jigsaw Puzzles For Kids</Link></h5>
                        </td>
                        <td className="product-price"><span className="amount">$120.00</span></td>
                        <td className="stock-status">
                          <span><i className="fa fa-check"></i> In Stock</span>
                        </td>
                        <td className="wishlist-cart"><Link href="/shop-cart">Add to Cart</Link></td>
                      </tr>
                      <tr>
                        <td className="product-remove"><a href="#">×</a></Link></td>
                        <td className="product-thumbnail">
                          <Link href="/shop-single-product"><img src="/assets/img/shop/details/nav2.jpg" alt="Image" /></Link>
                        </td>
                        <td className="product-name">
                          <h5><Link href="/shop-single-product">Bruder Toys Mini Ships</Link></h5>
                        </td>
                        <td className="product-price"><span className="amount">$120.00</span></td>
                        <td className="stock-status">
                          <span><i className="fa fa-check"></i> In Stock</span>
                        </td>
                        <td className="wishlist-cart"><Link href="/shop-cart">Add to Cart</Link></td>
                      </tr>
                      <tr>
                        <td className="product-remove"><a href="#">×</a></Link></td>
                        <td className="product-thumbnail">
                          <Link href="/shop-single-product"><img src="/assets/img/shop/details/nav3.jpg" alt="Image" /></Link>
                        </td>
                        <td className="product-name">
                          <h5><Link href="/shop-single-product">Sassy Crib and Floor Mirror</Link></h5>
                        </td>
                        <td className="product-price"><span className="amount">$120.00</span></td>
                        <td className="stock-status">
                          <span><i className="fa fa-check"></i> In Stock</span>
                        </td>
                        <td className="wishlist-cart"><Link href="/shop-cart">Add to Cart</Link></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    
  
    </Layout>
  )
}
