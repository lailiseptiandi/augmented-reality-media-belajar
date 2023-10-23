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

      <HomeWrapper />
    </>
  )
}

Home.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
