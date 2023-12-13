import Head from 'next/head'

import { DefaultLayout } from 'components/layouts'
import { ModeCardWrapper } from 'features/mode-card'
import { NextPageWithLayout } from 'types'

const ModeCard: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Unduh Kartu</title>
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
        <ModeCardWrapper />
      </div>

      
    </>
  )
}

ModeCard.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default ModeCard
