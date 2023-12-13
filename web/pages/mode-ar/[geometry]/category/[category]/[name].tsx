import Head from 'next/head'

import { DefaultLayout } from 'components/layouts'
import { NextPageWithLayout } from 'types'
import dynamic from 'next/dynamic'

{/* @ts-expect-error Server Component */}
const PModeArCamera = dynamic(() => import('features/mode-ar').then((model) => model.ModeArCamera), {ssr: false})

const ModeArCamera: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Mode AR - Camera</title>
      </Head>
      
      <PModeArCamera />
    </>
  )
}

ModeArCamera.getLayout = (page) => {
  return <DefaultLayout transparent>{page}</DefaultLayout>
}

export default ModeArCamera
