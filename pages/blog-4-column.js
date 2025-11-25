import Layout from '../components/Layout'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Blog4Column() {
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
    

    
    <section className="blog-area blog-grid-area blog-grid-4column">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="blog-content-area">
              <div className="row">
                <div className="col-sm-6 col-md-4 col-lg-3">
                  
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
                <div className="col-sm-6 col-md-4 col-lg-3">
                  
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
                <div className="col-sm-6 col-md-4 col-lg-3">
                  
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
                <div className="col-sm-6 col-md-4 col-lg-3">
                  
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
                <div className="col-sm-6 col-md-4 col-lg-3">
                  
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
                <div className="col-sm-6 col-md-4 col-lg-3">
                  
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
                <div className="col-sm-6 col-md-4 col-lg-3">
                  
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
                <div className="col-sm-6 col-md-4 col-lg-3">
                  
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
                <div className="col-sm-6 col-md-4 col-lg-3">
                  
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
                <div className="col-sm-6 col-md-4 col-lg-3">
                  
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
                <div className="col-sm-6 col-md-4 col-lg-3">
                  
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
                <div className="col-sm-6 col-md-4 col-lg-3">
                  
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
                          <Link href="/blog" className="page-number next">
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
    </section>
    
  
    </Layout>
  )
}
