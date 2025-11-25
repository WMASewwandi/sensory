import { useEffect } from 'react'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Load jQuery and other scripts
    if (typeof window !== 'undefined') {
      // Scripts will be loaded via Script component
    }
  }, [])

  return (
    <>
      <Script src="/assets/js/modernizr.js" strategy="beforeInteractive" />
      <Script src="/assets/js/jquery-main.js" strategy="beforeInteractive" />
      <Script src="/assets/js/jquery-migrate.js" strategy="lazyOnload" />
      <Script src="/assets/js/popper.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/bootstrap.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/jquery.appear.js" strategy="lazyOnload" />
      <Script src="/assets/js/swiper.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/fancybox.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/aos.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/jquery.slicknav.js" strategy="lazyOnload" />
      <Script src="/assets/js/jquery.countdown.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/tippy.all.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/isotope.pkgd.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/parallax.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/slick.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/wow.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/jquery-zoom.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/custom.js" strategy="lazyOnload" />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

