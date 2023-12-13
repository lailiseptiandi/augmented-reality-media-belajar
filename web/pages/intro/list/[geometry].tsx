import Head from 'next/head'

import { DefaultLayout } from 'components/layouts'
import { IntroList as PIntroList } from 'features/intro'
import { NextPageWithLayout } from 'types'

const IntroList: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Pengenalan Bentuk - List</title>
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
        <PIntroList />
      </div>
    </>
  )
}

IntroList.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default IntroList
