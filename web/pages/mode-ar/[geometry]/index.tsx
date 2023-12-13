import Head from 'next/head'

import { DefaultLayout } from 'components/layouts'
import { NextPageWithLayout } from 'types'
import dynamic from 'next/dynamic'

{/* @ts-expect-error Server Component */}
const PModeArCategory = dynamic(() => import('features/mode-ar').then((model) => model.ModeArCategory), {ssr: false})

const ModeArCategory: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Mode AR - Category</title>
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
        <PModeArCategory />
      </div>
    </>
  )
}

ModeArCategory.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default ModeArCategory
