import Head from 'next/head'

import { DefaultLayout } from 'components/layouts'
import { NextPageWithLayout } from 'types'
import dynamic from 'next/dynamic'

{/* @ts-expect-error Server Component */}
const ModeArWrapper = dynamic(() => import('features/mode-ar').then((model) => model.ModeArWrapper), {ssr: false})

const ModeAr: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Mode AR</title>
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
        <ModeArWrapper />
      </div>
    </>
  )
}

ModeAr.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default ModeAr
