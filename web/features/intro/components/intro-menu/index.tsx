'use client'

import Link from "next/link"

import Image from 'next/image'
import { HomeIcon, SoundIcon } from "components/icon"
import { dataCard } from "features/mode-card"
import { twMerge } from "tailwind-merge"
import { useCustomSound, useMenuSound } from 'hooks'
import { useRouter } from "next/router"
import useSound from "use-sound"
import { useEffect } from "react"
import geo2dSound from 'public/assets/sounds/geometri2d.wav';
import geo3dSound from 'public/assets/sounds/geometri3d.wav';

export const IntroMenu = () => {

    const { query } = useRouter()

    const param = query.geometry as string ?? '' 

    const [play, {
        stop
    }] = param === '2d' ? 
        useSound(`/assets/sounds/2d.mp3`) : 
        useSound(`/assets/sounds/3d.mp3`)

    useEffect(() => {

        return () => {
            stop()
        }
    }, [stop])

    useMenuSound(param === '2d' ? geo2dSound : geo3dSound)

    return (
        <div className="">
            <div className="flex justify-between items-center text-neutral-500">
                <Link
                    href="/"
                    className="text-neutral-500  hover:text-orange-500"
                >
                    <HomeIcon />
                </Link>
                <div className="bg-white shadow rounded-lg py-2.5 text-sm font-medium text-orange-500 px-4">
                    <h3 className="font-bold capitalize">Bentuk Geometri <span className="uppercase">{param}</span></h3>
                </div>
                <div id="btn-sound">
                    <SoundIcon />
                </div>
            </div>

            <div className="flex flex-col items-center justify-center h-[60vh] gap-y-10 mt-20">
                <div
                    onClick={() => play()}
                    className="flex flex-col items-center rounded-md py-2 w-[80%] hover:text-orange-500 text-sm text-center cursor-pointer"
                >
                    <Image
                        src='/assets/images/presentation.png'
                        width={100}
                        height={100}
                        alt={""}
                    />
                    <p className='text-xl text-black font-medium text-center'>Penjelasan</p>
                </div>
                <Link
                    href={`list/${param}`}
                    className="flex flex-col items-center rounded-md py-2 w-[80%] hover:text-orange-500 text-sm text-center"
                >
                    <Image
                        src='/assets/images/geometry.png'
                        width={100}
                        height={100}
                        alt={""}
                    />
                    <p className='text-xl text-black font-medium text-center'>Contoh Benda</p>
                </Link>
            </div>
        </div>
    )
}
