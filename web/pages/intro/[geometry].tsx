import Head from 'next/head'

import { DefaultLayout } from 'components/layouts'
import { IntroMenu as PIntroMenu } from 'features/intro'
import { NextPageWithLayout } from 'types'

const IntroMenu: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Pengenalan Bentuk - Menu</title>
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
        <PIntroMenu />
      </div>
    </>
  )
}

IntroMenu.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default IntroMenu
