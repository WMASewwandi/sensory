import Layout from '../components/Layout'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function ComingSoon() {
  const router = useRouter()
  
  return (
    <Layout title="Coming soon - Kidol - Kids Toys Store eCommerce HTML Template">
      

    
    <section className="coming-soon-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="coming-soon-content text-center">
              <h1>Left <span>215</span> Days</h1>
              <p> We’re working on a new and exciting product that we think you’ll really like! Enter your email address to be the fisrt to know when we lauch it..</p>
              <div className="subscribe-form">
                <form>
                  <i className="fa fa-envelope-o"></i>
                  <div className="input-content">
                    <input className="email" type="email" required="" placeholder="Enter your email..." name="EMAIL" />
                    <div className="submit-btn">
                      <input className="button" type="submit" name="subscribe" value="NOTIFY ME" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  
    </Layout>
  )
}
