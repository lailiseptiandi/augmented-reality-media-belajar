'use client'

import Link from "next/link"

import { XIcon } from "components/icon"
import { Footer } from "components/layouts"

export const HomeWrapper = () => {
  return (
    <div className="h-[100vh]">
      <div className="flex flex-col items-end text-neutral-500">
        <XIcon />
      </div>

      <div className="flex items-center justify-center gap-x-2 mt-10">
        <h1 className="font-bold text-6xl">AR</h1>

        <div className="flex flex-col">
            <h3 className="font-bold text-2xl">FLASHCARD</h3>

            <h5 className="font-medium">BENTUK & BENDA</h5>
        </div>
      </div>

      <div className="flex flex-col items-center gap-y-10 mt-20">
        <Link
            href='/mode-ar'
            className="bg-neutral-200 rounded-md py-2 w-[50%] hover:bg-orange-500 hover:text-white text-sm text-center"
        >
            MODE AR
        </Link>
        
        <Link href='/mode-game' className="bg-neutral-200 rounded-md py-2 w-[50%] hover:bg-orange-500 hover:text-white text-sm text-center">
            BERMAIN
        </Link>

        <Link href="#" className="bg-neutral-200 rounded-md py-2 w-[50%] hover:bg-orange-500 hover:text-white text-sm text-center">
            UNDUH KARTU
        </Link>
      </div>

      <Footer/>
    </div>
  )
}
