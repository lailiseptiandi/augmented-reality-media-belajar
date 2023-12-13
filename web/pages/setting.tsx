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

      <div
        className="px-5 py-5"
        style={{
          backgroundImage: 'url(/assets/images/background.jpg)',
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "100vh",
        }}
      >
        <SettingWrapper />
      </div>
      
    </>
  )
}

Setting.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Setting
