import Head from 'next/head'

import { DefaultLayout } from 'components/layouts'
import { IntroWrapper } from 'features/intro'
import { NextPageWithLayout } from 'types'

const Intro: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Pengenalan Bentuk</title>
      </Head>

      <div
        className="px-5 py-5 overflow-y-auto"
        style={{
            backgroundImage: 'url(/assets/images/background.jpg)',
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "100vh",
          }}
      >
        <IntroWrapper />
      </div>
    </>
  )
}

Intro.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Intro
