import Layout from '../components/Layout'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function PageNotFound() {
  const router = useRouter()
  
  return (
    <Layout title="404 - Kidol - Kids Toys Store eCommerce HTML Template">
      

    
    <section className="page-not-found-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="error-content text-center">
              <h1>We Are Sorry, Page Not Found</h1>
              <p>Unfortunately the page you were looking for could not be found. It may be temporarily unavailable, moved or no longer exist. Check the Url you entered for any mistakes and try again. <Link href="/">Back to Homepage</Link> </p>
              <div className="error-search">
                <form action="#">
                  <input type="text" placeholder="Search for… " />
                  <button className="button-search"><i className="pe-7s-search"></i></button>
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
