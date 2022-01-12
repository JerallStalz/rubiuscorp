import Head from 'next/head'
import GlobalStyle from '../components/globalStyles'
import Navbar from '../components/navbar'

const Website = ({ Component, pageProps, router }) => {
  return (
    <>
      <Head>
        <title>RUBISCORP</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="RUBIUSCORP" />
        <meta property="og:title" content="RUBIUSCORP" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="RUBIUSCORP"
        />
        <meta property="og:url" content="rubiuscorp.netlify.app" />
      </Head>
      <GlobalStyle/>
      <Navbar/>
      <Component {...pageProps} key={router.route} />
    </>
  )
}

export default Website
