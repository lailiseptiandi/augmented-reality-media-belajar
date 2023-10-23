import Head from 'next/head'

import { DefaultLayout } from 'components/layouts'
import { SettingWrapper } from 'features/setting'
import { NextPageWithLayout } from 'types'

const Setting: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Setting</title>
      </Head>

      <SettingWrapper />
    </>
  )
}

Setting.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Setting
