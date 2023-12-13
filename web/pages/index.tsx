import Head from 'next/head'

import { DefaultLayout } from 'components/layouts'
import { HomeWrapper } from 'features/home'
import { NextPageWithLayout } from 'types'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div
        className="px-5 py-5"
        style={{
          backgroundImage: 'url(/assets/images/background.jpg)',
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
        }}
      >
        <HomeWrapper />
      </div>
    </>
  )
}

Home.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
