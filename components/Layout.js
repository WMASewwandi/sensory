import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Layout({ children, title = 'Kidol - Kids Toys Store eCommerce' }) {
  const router = useRouter()

  useEffect(() => {
    // Hide preloader when component mounts and scripts are loaded
    const hidePreloader = () => {
      if (typeof document !== 'undefined') {
        document.body.classList.add('preloader-deactive')
      }
    }

    // Hide preloader after a short delay to ensure scripts are loaded
    const timer = setTimeout(() => {
      hidePreloader()
    }, 1000)

    // Also listen for window load event (when all resources are loaded)
    if (typeof window !== 'undefined') {
      if (document.readyState === 'complete') {
        hidePreloader()
      } else {
        window.addEventListener('load', hidePreloader)
      }
    }

    return () => {
      clearTimeout(timer)
      if (typeof window !== 'undefined') {
        window.removeEventListener('load', hidePreloader)
      }
    }
  }, [])

  return (
    <div className="wrapper home-default-wrapper">
      <Head>
        <title>{title}</title>
      </Head>

      {/* Preloader */}
      <div className="preloader-wrap">
        <div className="preloader">
          <span className="dot"></span>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="header-wrapper">
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-5 col-md-4 col-lg-6">
                <div className="header-info-left">
                  <p>Free Returns and Free Shipping</p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-7 col-md-8 col-lg-6 sm-pl-0 xs-pl-15 header-top-right">
                <div className="header-info">
                  <a href="tel://+00123456789"><i className="fa fa-phone"></i> +00 123 456 789</a>
                  <a href="mailto://demo@example.com"><i className="fa fa-envelope"></i> demo@example.com</a>
                  <Link href="/login-register"><i className="fa fa-user"></i> Account</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-middle">
          <div className="container">
            <div className="row row-gutter-0 align-items-center">
              <div className="col-12">
                <div className="header-align">
                  <div className="header-align-left">
                    <div className="header-logo-area">
                      <Link href="/">
                          <img className="logo-main" src="/assets/img/logo.png" alt="Logo" />
                          <img className="logo-light" src="/assets/img/logo.png" alt="Logo" />
                        </Link>
                    </div>
                  </div>
                  <div className="header-align-center">
                    <div className="header-search-box">
                      <form action="#" method="post">
                        <div className="form-input-item">
                          <label htmlFor="search" className="sr-only">Search Everything</label>
                          <input type="text" id="search" placeholder="Search Everything" />
                          <button type="submit" className="btn-src">
                            <i className="pe-7s-search"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="header-align-right">
                    <div className="header-action-area">
                      <div className="header-action-wishlist">
                        <button className="btn-wishlist" onClick={() => router.push('/shop-wishlist')}>
                          <i className="pe-7s-like"></i>
                        </button>
                      </div>
                      <div className="header-action-cart">
                        <button className="btn-cart cart-icon">
                          <span className="cart-count">01</span>
                          <i className="pe-7s-shopbag"></i>
                        </button>
                      </div>
                      <button className="btn-menu d-md-none">
                        <i className="ion-navicon"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-area header-default sticky-header">
          <div className="container">
            <div className="row row-gutter-0 align-items-center">
              <div className="col-4 col-sm-6 col-lg-2">
                <div className="header-logo-area">
                  <Link href="/">
                      <img className="logo-main" src="/assets/img/logo.png" alt="Logo" />
                      <img className="logo-light" src="/assets/img/logo.png" alt="Logo" />
                    </Link>
                </div>
              </div>
              <div className="col-lg-8 sticky-md-none">
                <div className="header-navigation-area d-none d-md-block">
                  <ul className="main-menu nav position-relative">
                    <li className={`has-submenu ${router.pathname === '/' ? 'active' : ''}`}>
                      <Link href="/" className="ml--2">Home</Link>
                      <ul className="submenu-nav">
                        <li><Link href="/">Home One</Link></li>
                        <li><Link href="/index-2">Home Two</Link></li>
                      </ul>
                    </li>
                    <li className={router.pathname === '/about' ? 'active' : ''}>
                      <Link href="/about">About</Link>
                    </li>
                    <li className="has-submenu">
                      <a href="#">Pages</a>
                      <ul className="submenu-nav">
                        <li><Link href="/shop-cart">Cart page</Link></li>
                        <li><Link href="/shop-checkout">Checkout</Link></li>
                        <li><Link href="/my-account">My Account</Link></li>
                        <li><Link href="/shop-wishlist">Wishlist</Link></li>
                        <li><Link href="/shop-compare">Compare</Link></li>
                        <li><Link href="/login-register">Login / Register</Link></li>
                        <li><Link href="/coming-soon">Coming soon</Link></li>
                        <li><Link href="/page-not-found">404</Link></li>
                      </ul>
                    </li>
                    <li className={`has-submenu ${router.pathname.startsWith('/shop') ? 'active' : ''}`}>
                      <Link href="/shop">Shop</Link>
                      <ul className="submenu-nav">
                        <li><Link href="/shop-3-column">Shop 3 Column</Link></li>
                        <li><Link href="/shop">Shop 4 Column</Link></li>
                        <li><Link href="/shop-left-sidebar">Shop Left Sidebar</Link></li>
                        <li><Link href="/shop-right-sidebar">Shop Right Sidebar</Link></li>
                        <li><Link href="/shop">Shop No Sidebar</Link></li>
                        <li><Link href="/shop-single-product">Product Details</Link></li>
                        <li><Link href="/shop-single-product-variable">Product Variable</Link></li>
                        <li><Link href="/shop-single-product-grouped">Product Grouped</Link></li>
                      </ul>
                    </li>
                    <li className={`has-submenu ${router.pathname.startsWith('/blog') ? 'active' : ''}`}>
                      <Link href="/blog">Blog</Link>
                      <ul className="submenu-nav">
                        <li><Link href="/blog">Blog 3 Column</Link></li>
                        <li><Link href="/blog-4-column">Blog 4 Column</Link></li>
                        <li><Link href="/blog-left-sidebar">Blog Left Sidebar</Link></li>
                        <li><Link href="/blog-right-sidebar">Blog Right Sidebar</Link></li>
                        <li><Link href="/blog">Blog No Sidebar</Link></li>
                        <li><Link href="/blog-details">Blog Details Left Sidebar</Link></li>
                        <li><Link href="/blog-details-right-sidebar">Blog Details Right Sidebar</Link></li>
                        <li><Link href="/blog-details-no-sidebar">Blog Details No Sidebar</Link></li>
                      </ul>
                    </li>
                    <li className={router.pathname === '/contact' ? 'active' : ''}>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-8 col-sm-6 col-lg-2">
                <div className="header-action-area">
                  <div className="header-action-search">
                    <button className="btn-search btn-search-menu">
                      <i className="pe-7s-search"></i>
                    </button>
                  </div>
                  <div className="header-action-login">
                    <button className="btn-login" onClick={() => router.push('/login-register')}>
                      <i className="pe-7s-users"></i>
                    </button>
                  </div>
                  <div className="header-action-wishlist">
                    <button className="btn-wishlist" onClick={() => router.push('/shop-wishlist')}>
                      <i className="pe-7s-like"></i>
                    </button>
                  </div>
                  <div className="header-action-cart">
                    <button className="btn-cart cart-icon">
                      <span className="cart-count">01</span>
                      <i className="pe-7s-shopbag"></i>
                    </button>
                  </div>
                  <button className="btn-menu d-lg-none">
                    <i className="ion-navicon"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {children}
      </main>

      {/* Footer */}
      <footer className="footer-area default-style">
        <div className="footer-main">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-lg-3">
                <div className="widget-item item-style3">
                  <div className="about-widget">
                    <Link href="/" className="footer-logo">
                        <img src="/assets/img/logo-light.png" alt="Logo" />
                      </Link>
                    <p>Lorem ipsum dolor sit amet, consecl adipisicing elit, sed do eiusmod teml incididunt ut labore et dolore magna aliqua Ut enim</p>
                    <div className="widget-social-icons">
                      <a href="#"><i className="ion-social-twitter"></i></a>
                      <a href="#"><i className="ion-social-tumblr"></i></a>
                      <a href="#"><i className="ion-social-facebook"></i></a>
                      <a href="#"><i className="ion-social-instagram-outline"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-2">
                <div className="widget-item item-style1">
                  <h4 className="widget-title">Quick Links</h4>
                  <h4 className="widget-title widget-collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#dividerId-1">Quick Links</h4>
                  <div id="dividerId-1" className="collapse widget-collapse-body">
                    <nav className="widget-menu-wrap">
                      <ul className="nav-menu nav item-hover-style">
                        <li><Link href="/">- Support</Link></li>
                        <li><Link href="/">- Helpline</Link></li>
                        <li><Link href="/">- Courses</Link></li>
                        <li><Link href="/about">- About</Link></li>
                        <li><Link href="/">- Event</Link></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-2">
                <div className="widget-item item-style1">
                  <h4 className="widget-title">Other Page</h4>
                  <h4 className="widget-title widget-collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#dividerId-2">Other Page</h4>
                  <div id="dividerId-2" className="collapse widget-collapse-body">
                    <nav className="widget-menu-wrap item-hover-style">
                      <ul className="nav-menu nav">
                        <li><Link href="/about">- About</Link></li>
                        <li><Link href="/blog">- Blog</Link></li>
                        <li><Link href="/">- Speakers</Link></li>
                        <li><Link href="/contact">- Contact</Link></li>
                        <li><Link href="/">- Tricket</Link></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-lg-2">
                <div className="widget-item item-style2">
                  <h4 className="widget-title">Company</h4>
                  <h4 className="widget-title widget-collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#dividerId-3">Company</h4>
                  <div id="dividerId-3" className="collapse widget-collapse-body">
                    <nav className="widget-menu-wrap item-hover-style">
                      <ul className="nav-menu nav">
                        <li><Link href="/">- Jesco</Link></li>
                        <li><Link href="/shop">- Shop</Link></li>
                        <li><Link href="/contact">- Contact us</Link></li>
                        <li><Link href="/login-register">- Log in</Link></li>
                        <li><Link href="/">- Help</Link></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-lg-3">
                <div className="widget-item">
                  <h4 className="widget-title">Store Information.</h4>
                  <h4 className="widget-title widget-collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#dividerId-4">Store Information.</h4>
                  <div id="dividerId-4" className="collapse widget-collapse-body">
                    <p className="widget-address">2005 Your Address Goes Here. <br />896, Address 10010, HGJ</p>
                    <ul className="widget-contact-info">
                      <li>Phone/Fax: <a href="tel://0123456789">0123456789</a></li>
                      <li>Email: <a href="mailto://demo@example.com">demo@example.com</a></li>
                    </ul>
                    <div className="widget-payment-info">
                      <div className="thumb">
                        <Link href="/"><img src="/assets/img/photos/payment1.png" alt="Image" /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-content">
              <div className="row text-center">
                <div className="col-sm-12">
                  <div className="widget-copyright">
                    <p><i className="fa fa-copyright"></i> 2021 <span>KIDOL. </span> Made with <i className="fa fa-heart"></i> by <a target="_blank" href="https://www.hasthemes.com" rel="noopener noreferrer">HasThemes</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-shape bg-img" data-bg-img="/assets/img/photos/footer1.png"></div>
      </footer>

      {/* Scroll Top Button */}
      <div className="scroll-to-top"><span className="fa fa-angle-double-up"></span></div>

      {/* Product Quick View Modal */}
      <aside className="product-quick-view-modal">
        <div className="product-quick-view-inner">
          <div className="product-quick-view-content">
            <button type="button" className="btn-close">
              <span className="pe-7s-close"><i className="lastudioicon-e-remove"></i></span>
            </button>
            <div className="row row-gutter-0">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="thumb">
                  <img src="/assets/img/shop/quick-view1.jpg" alt="Image" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
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
                      <a href="#/">( 5 Customer Review )</a>
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
                        <input type="text" id="quantity" title="Quantity" defaultValue="01" />
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
            </div>
          </div>
        </div>
        <div className="canvas-overlay"></div>
      </aside>

      {/* Search Box */}
      <div className="search-box-wrapper">
        <div className="search-box-content-inner">
          <div className="search-box-form-wrap">
            <div className="search-note">
              <p>Start typing and press Enter to search</p>
            </div>
            <form action="#" method="post">
              <div className="search-form position-relative">
                <label htmlFor="search-input" className="sr-only">Search</label>
                <input type="search" className="form-control" placeholder="Search" id="search-input" />
                <button className="search-button"><i className="pe-7s-search"></i></button>
              </div>
            </form>
          </div>
        </div>
        <a href="#" className="search-close"><i className="pe-7s-close"></i></a>
      </div>

      {/* Sidebar Cart */}
      <aside className="sidebar-cart-modal">
        <div className="sidebar-cart-inner">
          <div className="sidebar-cart-content">
            <a className="cart-close" href="#"><i className="pe-7s-close"></i></a>
            <div className="sidebar-cart-all">
              <div className="cart-header">
                <h3>Shopping Cart</h3>
                <div className="close-style-wrap">
                  <span className="close-style close-style-width-1 cart-close"></span>
                </div>
              </div>
              <div className="cart-content cart-content-padding">
                <ul>
                  <li className="single-product-cart">
                    <div className="cart-img">
                      <Link href="/shop-single-product"><img src="/assets/img/shop/details/nav1.jpg" alt="" /></Link>
                    </div>
                    <div className="cart-title">
                      <h4><Link href="/shop-single-product">Jigsaw Puzzles For Kids </Link></h4>
                      <span> 1 × <span className="price"> $12.00 </span></span>
                    </div>
                    <div className="cart-delete">
                      <a href="#/"><i className="pe-7s-trash icons"></i></a>
                    </div>
                  </li>
                  <li className="single-product-cart">
                    <div className="cart-img">
                      <Link href="/shop-single-product"><img src="/assets/img/shop/details/nav2.jpg" alt="" /></Link>
                    </div>
                    <div className="cart-title">
                      <h4><Link href="/shop-single-product">Bruder Toys Mini Ships </Link></h4>
                      <span> 1 × <span className="price"> $59.00 </span></span>
                    </div>
                    <div className="cart-delete">
                      <a href="#/"><i className="pe-7s-trash icons"></i></a>
                    </div>
                  </li>
                </ul>
                <div className="cart-total">
                  <h4>Subtotal: <span>$278.90</span></h4>
                </div>
                <div className="cart-checkout-btn">
                  <Link href="/shop-cart" className="cart-btn">view cart</Link>
                  <Link href="/shop-checkout" className="checkout-btn">checkout</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <div className="sidebar-cart-overlay"></div>

      {/* Side Menu */}
      <aside className="off-canvas-wrapper">
        <div className="off-canvas-inner">
          <div className="off-canvas-overlay d-none"></div>
          <div className="off-canvas-content">
            <div className="off-canvas-header">
              <div className="close-action">
                <button className="btn-close"><i className="pe-7s-close"></i></button>
              </div>
            </div>
            <div className="off-canvas-item">
              <div className="res-mobile-menu">
                {/* Note Content Auto Generate By Jquery From Main Menu */}
              </div>
            </div>
            <div className="off-canvas-footer"></div>
          </div>
        </div>
      </aside>
    </div>
  )
}

