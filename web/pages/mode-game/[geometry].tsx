import Head from 'next/head'

import { DefaultLayout } from 'components/layouts'
import { NextPageWithLayout } from 'types'
import dynamic from 'next/dynamic'

{/* @ts-expect-error Server Component */}
const PModeGamePlay = dynamic(() => import('features/mode-game').then((model) => model.ModeGamePlay), {ssr: false})

const ModeGamePlay: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Mode Game - Play</title>
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
        <PModeGamePlay />
      </div>
    </>
  )
}

ModeGamePlay.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default ModeGamePlay
