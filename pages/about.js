import Layout from '../components/Layout'
import Link from 'next/link'

export default function About() {
  return (
    <Layout title="About Us - Kidol - Kids Toys Store eCommerce HTML Template">
      <section className="page-title-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 m-auto">
              <div className="page-title-content text-center">
                <h2 className="title">About Us</h2>
                <div className="bread-crumbs"><Link href="/"> Home </Link><span className="breadcrumb-sep"> // </span><span className="active"> About Us</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="divider-area divider-style3-area">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6" data-aos="fade-right" data-aos-duration="1000">
              <div className="thumb">
                <img src="/assets/img/divider/4.png" alt="Image" />
                <div className="shape-group">
                  <div className="shape-style1">
                    <img src="/assets/img/divider/shape3.png" alt="Image" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6" data-aos="fade-up" data-aos-duration="1000">
              <div className="divider-content">
                <h4 className="subtitle">Hello there!</h4>
                <h2 className="title">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed dolo</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo temp incidi ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostru exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duislpl aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugial nulla pariatur. Excepteur sint occaecat.</p>
                <Link href="/contact" className="btn-theme">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="brand-logo-area brand-logo-default-area" data-aos="fade-up" data-aos-duration="1000">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="swiper-container brand-logo-slider-container">
                <div className="swiper-wrapper brand-logo-slider">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <div key={num} className="swiper-slide brand-logo-item">
                      <a href="#/"><img src={`/assets/img/brand-logo/${num}.png`} alt="Brand-Logo" /></a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="team-area team-default-area">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-6 m-auto">
              <div className="section-title text-center" data-aos="fade-up" data-aos-duration="1000">
                <h2 className="title">Team Member</h2>
                <div className="desc">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row" data-aos="fade-up" data-aos-duration="1300">
            {[
              { name: 'Alyana Thomson', img: 1, className: '' },
              { name: 'Phoenix Walker', img: 2, className: 'mt-sm-50' },
              { name: 'Oscar Thomsen', img: 3, className: 'mt-sm-50', style: 'style-two' }
            ].map((member, idx) => (
              <div key={idx} className="col-md-4">
                <div className={`team-member ${member.className}`}>
                  <div className={`thumb ${member.style || ''}`}>
                    <img src={`/assets/img/team/${member.img}.png`} alt="Image" />
                    <div className="member-icons">
                      <a href="#/"><i className="fa fa-facebook"></i></a>
                      <a href="#/"><i className="fa fa-dribbble"></i></a>
                      <a href="#/"><i className="fa fa-pinterest-p"></i></a>
                      <a href="#/"><i className="fa fa-twitter"></i></a>
                    </div>
                  </div>
                  <div className="content">
                    <div className="member-info">
                      <h4 className="name"><a href="#/">{member.name}</a></h4>
                      <h6 className="designation">Customer</h6>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonial-area testimonial-default-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto">
              <div className="section-title text-center" data-aos="fade-up" data-aos-duration="1000">
                <h2 className="title">Testimonial</h2>
                <div className="desc">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row" data-aos="fade-up" data-aos-duration="1300">
            <div className="col-lg-12">
              <div className="swiper-container testimonial-slider-container">
                <div className="swiper-wrapper">
                  {[
                    { name: 'Dasia Lovell', img: 1, text: 'Lorem ipsum dolor sit amet, consect adipisi elit sed do eiusmod temporlo incidid ut labore et dolore magnalop aliquall Ut enim ad minim.' },
                    { name: 'Demetri Caron', img: 2, text: 'There are many variations of passage of Lorem Ipsum available, but the on majority have suffered alteration in some form, by injected humour.' },
                    { name: 'Akhil Newman', img: 3, text: 'Lorem ipsum dolor sit amet, consect adipisi elit sed do eiusmod temporlo incidid ut labore et dolore magnalop aliquall Ut enim ad minim.' },
                    { name: 'Dasia Lovell', img: 1, text: 'There are many variations of passage of Lorem Ipsum available, but the on majority have suffered alteration in some form, by injected humour.' },
                    { name: 'Demetri Caron', img: 2, text: 'Lorem ipsum dolor sit amet, consect adipisi elit sed do eiusmod temporlo incidid ut labore et dolore magnalop aliquall Ut enim ad minim.' },
                    { name: 'Akhil Newman', img: 3, text: 'There are many variations of passage of Lorem Ipsum available, but the on majority have suffered alteration in some form, by injected humour.' }
                  ].map((testimonial, idx) => (
                    <div key={idx} className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="client-content">
                          <div className="inner-content">
                            <div className="icon">
                              <img src="/assets/img/icons/1.png" alt="Image" />
                            </div>
                            <p>{testimonial.text}</p>
                          </div>
                          <div className="shape-group">
                            <div className="shape-style1">
                              <img src="/assets/img/testimonial/shape1.png" alt="Image" />
                            </div>
                          </div>
                        </div>
                        <div className="client-info">
                          <div className="thumb">
                            <img src={`/assets/img/testimonial/${testimonial.img}.png`} alt="Image" />
                          </div>
                          <div className="desc">
                            <h4 className="title">{testimonial.name}</h4>
                            <p>Customer</p>
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
        <div className="thumb-style bg-img" data-bg-img="/assets/img/testimonial/shape2.png"></div>
      </section>

      <section className="divider-area divider-style4-area" data-aos="fade-up" data-aos-duration="1000">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="divider-wrap bg-img" data-bg-img="/assets/img/photos/bg1.png">
                <div className="row align-items-center">
                  <div className="col-lg-6 position-relative">
                    <div className="content">
                      <h2>Subscribe for Exclusive Sales & News</h2>
                    </div>
                    <div className="shape-group">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="newsletter-form">
                      <form action="#">
                        <input className="form-control" type="email" placeholder="Enter Your Email" />
                        <button className="btn btn-theme" type="submit">Subscribe</button>
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


