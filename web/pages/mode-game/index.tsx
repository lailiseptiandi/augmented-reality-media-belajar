import Head from 'next/head'

import { DefaultLayout } from 'components/layouts'
import { ModeGameWrapper } from 'features/mode-game'
import { NextPageWithLayout } from 'types'

const ModeGame: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Mode Game</title>
      </Head>

      <ModeGameWrapper />
    </>
  )
}

ModeGame.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default ModeGame
