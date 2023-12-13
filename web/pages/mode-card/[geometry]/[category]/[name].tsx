import Head from 'next/head'

import { DefaultLayout } from 'components/layouts'
import { ModeCardDetail as CModeCardDetail } from 'features/mode-card'
import { NextPageWithLayout } from 'types'

const ModeCardDetail: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Mode Card - Detail</title>
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
        <CModeCardDetail />
      </div>
    </>
  )
}

ModeCardDetail.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default ModeCardDetail
