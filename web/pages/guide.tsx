import Head from 'next/head'

import { DefaultLayout } from 'components/layouts'
import { GuideWrapper } from 'features/guide'
import { NextPageWithLayout } from 'types'

const Guide: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Guide</title>
      </Head>

      <GuideWrapper />
    </>
  )
}

Guide.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Guide
