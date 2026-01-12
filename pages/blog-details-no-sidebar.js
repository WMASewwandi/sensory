import Layout from '../components/Layout'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function BlogDetailsNoSidebar() {
  const router = useRouter()
  
  return (
    <Layout title="Blog Details - Kidol - Kids Toys Store eCommerce HTML Template">
      
    
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
    

    
    <section className="blog-details-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="post-details-content">
              <div className="post-details-body">
                <div className="thumb">
                  <img className="w-100" src="/assets/img/blog/details/8.jpg" alt="Image" />
                </div>
                <div className="content">
                  <div className="meta">By, <Link href="/blog" className="author">June Cha </Link><span className="dots"></span><span className="post-date">25 May, 2021</span></div>
                  <h4 className="title">Lorem ipsum dolor sit amet, consecte adipisicing elit sed doeiusm</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcolol laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volu velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proide sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita ullamco labori nisi ut aliquip ex ea commodo conseq Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                  <div className="blockquote-area">
                    <blockquote className="blockquote-style">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit eiusmod tempor incididunt</p>
                      <div className="icon">
                        <img src="/assets/img/icons/4.png" alt="Icon" />
                      </div>
                    </blockquote>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcolol laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volu velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proide sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="thumb-inner">
                        <img className="w-100" src="/assets/img/blog/details/6.jpg" alt="Image" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="thumb-inner mb-sm-30">
                        <img className="w-100" src="/assets/img/blog/details/7.jpg" alt="Image" />
                      </div>
                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita ullamco labori nisi ut aliquip ex ea commodo conseq Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
              </div>
            </div>
            <div className="comment-area">
              <div className="row">
                <div className="col-lg-12">
                  <div className="comment-view-area">
                    <h2 className="title">3 Comments</h2>
                    <div className="comment-content">
                      <div className="single-comment">
                        <div className="author-info">
                          <div className="thumb">
                            <img src="/assets/img/blog/details/1.png" alt="Image" />
                          </div>
                          <div className="author-details border-bottom">
                            <ul>
                              <li>Aidyn Cody <span> - 25 May, 2121</span></li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua.</p>
                            <a className="btn-theme" href="#/">Reply</a></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="comment-content comment-content-style2">
                      <div className="single-comment">
                        <div className="author-info">
                          <div className="thumb">
                            <img src="/assets/img/blog/details/2.png" alt="Image" />
                          </div>
                          <div className="author-details">
                            <ul>
                              <li>Jivan Cody <span> - 25 May, 2121</span></li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua.</p>
                            <a className="btn-theme" href="#/">Reply</a></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="comment-content">
                      <div className="single-comment">
                        <div className="author-info">
                          <div className="thumb pt-38">
                            <img src="/assets/img/blog/details/3.png" alt="Image" />
                          </div>
                          <div className="author-details border-top pt-37">
                            <ul>
                              <li>Rose Cody <span> - 25 May, 2121</span></li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididun ut labore et dolore magna aliqua.</p>
                            <a className="btn-theme" href="#/">Reply</a></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comment-form-wrap mb-lg-0">
                    <form className="comment-form-wrapper" id="comment-form" action="https://whizthemes.com/mail-php/raju/arden/mail.php" method="post">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="section-title m-0">
                            <h2 className="title">Leave a Comment</h2>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <input className="form-control" type="text" placeholder="Name *" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <input className="form-control" type="email" placeholder="Email *" />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <input className="form-control" type="text" placeholder="Subject (Optinal)" />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <textarea className="form-control" placeholder="Message"></textarea>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <button className="btn btn-theme" type="submit">Send a Comment</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
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
