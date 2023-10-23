import Head from 'next/head'

import { DefaultLayout } from 'components/layouts'
import { InformationWrapper } from 'features/information'
import { NextPageWithLayout } from 'types'

const Information: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Information</title>
      </Head>

      <InformationWrapper />
    </>
  )
}

Information.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Information
