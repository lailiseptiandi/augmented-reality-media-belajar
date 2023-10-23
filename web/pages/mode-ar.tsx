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
      
      <ModeArWrapper />
    </>
  )
}

ModeAr.getLayout = (page) => {
  return <DefaultLayout transparent>{page}</DefaultLayout>
}

export default ModeAr
