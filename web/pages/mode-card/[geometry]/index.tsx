import Head from 'next/head'

import { DefaultLayout } from 'components/layouts'
import { NextPageWithLayout } from 'types'
import dynamic from 'next/dynamic'

{/* @ts-expect-error Server Component */}
const PModeCardCategory = dynamic(() => import('features/mode-card').then((model) => model.ModeCardCategory), {ssr: false})

const ModeCardCategory: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Mode Card - Category</title>
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
        <PModeCardCategory />
      </div>
    </>
  )
}

ModeCardCategory.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default ModeCardCategory
