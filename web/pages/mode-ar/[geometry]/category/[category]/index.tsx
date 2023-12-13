import Head from 'next/head'

import { DefaultLayout } from 'components/layouts'
import { NextPageWithLayout } from 'types'
import dynamic from 'next/dynamic'

{/* @ts-expect-error Server Component */}
const PModeArList = dynamic(() => import('features/mode-ar').then((model) => model.ModeArList), {ssr: false})

const ModeArList: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Mode AR - List</title>
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
        <PModeArList />
      </div>
    </>
  )
}

ModeArList.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default ModeArList
