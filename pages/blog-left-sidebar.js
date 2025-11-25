import Layout from '../components/Layout'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function BlogLeftSidebar() {
  const router = useRouter()
  
  return (
    <Layout title="Blog - Kidol - Kids Toys Store eCommerce HTML Template">
      
    
    <section className="page-title-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 m-auto">
            <div className="page-title-content text-center">
              <h2 className="title">Blog</h2>
              <div className="bread-crumbs"><Link href="/"> Home </Link><span className="breadcrumb-sep"> // </span><span className="active"> Blog</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    

    
    <section className="blog-area blog-grid-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 order-0 order-lg-1">
            <div className="blog-content-area">
              <div className="row">
                <div className="col-sm-6">
                  
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
                <div className="col-sm-6">
                  
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
                <div className="col-sm-6">
                  
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
                <div className="col-sm-6">
                  
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
                <div className="col-sm-6">
                  
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
                <div className="col-sm-6">
                  
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
                <div className="col-sm-6">
                  
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
                <div className="col-sm-6">
                  
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
              </div>
              <div className="row mb-md-50">
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
          <div className="col-lg-4 order-1 order-lg-0">
            <div className="sidebar-area blog-sidebar-area">
              <div className="widget-item">
                <div className="widget-body">
                  <div className="widget-search-box">
                    <form action="#" method="post">
                      <div className="form-input-item">
                        <label htmlFor="search2" className="sr-only">Search</label>
                        <input type="text" id="search2" placeholder="Search" />
                        <button type="submit" className="btn-src">
                          <i className="fa fa-search"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="widget-item widget-item2">
                <div className="widget-title blog-post-title">
                  <h3 className="title">Archives</h3>
                </div>
                <div className="widget-body">
                  <div className="widget-archives">
                    <ul>
                      <li><Link href="/blog">January 2018</Link></li>
                      <li><Link href="/blog">February 2019</Link></li>
                      <li><Link href="/blog">March 2020</Link></li>
                      <li><Link href="/blog">April 2021</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="widget-item">
                <div className="widget-title blog-post-title">
                  <h3 className="title">Recent Post</h3>
                </div>
                <div className="widget-body">
                  <div className="widget-blog-post">
                    <div className="thumb">
                      <Link href="/blog-details"><img src="/assets/img/blog/details/1.jpg" alt="Image" /></Link>
                    </div>
                    <div className="content">
                      <span>25 May, 2121</span>
                      <h4><Link href="/blog-details">Baby Planet's toys to makes learning easy</Link></h4>
                    </div>
                  </div>
                  <div className="widget-blog-post">
                    <div className="thumb">
                      <Link href="/blog-details"><img src="/assets/img/blog/details/2.jpg" alt="Image" /></Link>
                    </div>
                    <div className="content">
                      <span>25 May, 2121</span>
                      <h4><Link href="/blog-details">Lorem ipsum dolor sit conse tetur adipis.</Link></h4>
                    </div>
                  </div>
                  <div className="widget-blog-post">
                    <div className="thumb">
                      <Link href="/blog-details"><img src="/assets/img/blog/details/3.jpg" alt="Image" /></Link>
                    </div>
                    <div className="content">
                      <span>25 May, 2121</span>
                      <h4><Link href="/blog-details">Mother revolves around her children</Link></h4>
                    </div>
                  </div>
                  <div className="widget-blog-post">
                    <div className="thumb">
                      <Link href="/blog-details"><img src="/assets/img/blog/details/4.jpg" alt="Image" /></Link>
                    </div>
                    <div className="content">
                      <span>25 May, 2121</span>
                      <h4><Link href="/blog-details">Learn while you grow toys Baby Planet</Link></h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="widget-item widget-item2">
                <div className="widget-title blog-post-title">
                  <h3 className="title">Categories</h3>
                </div>
                <div className="widget-body">
                  <div className="widget-categories">
                    <ul>
                      <li><Link href="/blog">Baby Toys</Link></li>
                      <li><Link href="/blog">Baby Dress</Link></li>
                      <li><Link href="/blog">Baby Dayper</Link></li>
                      <li><Link href="/blog">Baby Book</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="widget-item">
                <div className="widget-title blog-post-title">
                  <h3 className="title">Subscribe</h3>
                </div>
                <div className="widget-body">
                  <div className="widget-newsletter">
                    <div className="newsletter-form">
                      <form action="#">
                        <input className="form-control" type="email" placeholder="Enter Your Email" />
                        <button className="btn btn-theme" type="submit">Subscribe Now</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="widget-item widget-item2 mb-md-0">
                <div className="widget-title blog-post-title">
                  <h3 className="title">Tags</h3>
                </div>
                <div className="widget-body">
                  <div className="widget-tags">
                    <ul>
                      <li><Link href="/blog">Baby</Link></li>
                      <li><Link href="/blog" className="babyfashion">BabyFashion</Link></li>
                      <li><Link href="/blog" className="toy">Toy</Link></li>
                      <li><Link href="/blog">Baby Toy</Link></li>
                    </ul>
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
