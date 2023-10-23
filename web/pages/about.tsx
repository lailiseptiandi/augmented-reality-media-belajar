import Head from 'next/head'

import { DefaultLayout } from 'components/layouts'
import { AboutWrapper } from 'features/about'
import { NextPageWithLayout } from 'types'

const About: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <AboutWrapper />
    </>
  )
}

About.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default About
