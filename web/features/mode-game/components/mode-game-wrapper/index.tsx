'use client'

import Link from "next/link"

import Image from 'next/image'
import { HomeIcon, SoundIcon } from "components/icon"
import { useCustomSound, useMenuSound } from "hooks"
import { ButtonSound } from "components/button-sound"
import modeGameSound from 'public/assets/sounds/bermain.wav';

export const ModeGameWrapper = () => {

    useMenuSound(modeGameSound)

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
                    <h3 className="font-bold">Bermain</h3>
                </div>
                <ButtonSound/>
            </div>

            <div className="flex flex-col justify-center h-[80vh] mt-5">
                <div className="flex items-center justify-around">
                    <Link
                        href='mode-game/2d'
                        className="flex flex-col items-center justify-center gap-y-3 hover:text-orange-500 px-5"
                    >
                        <Image
                            src='/assets/images/geometry-2d.png'
                            width={100}
                            height={100}
                            alt={""}
                        />
                        <p className='text-xl text-black font-medium text-center'>Bentuk Geometri 2D</p>
                    </Link>

                    <Link
                        href='mode-game/3d'
                        className="flex flex-col items-center justify-center gap-y-3 hover:text-orange-500 px-5"
                    >
                        <Image
                            src='/assets/images/geometry-3d.png'
                            width={100}
                            height={100}
                            alt={""}
                        />
                        <p className='text-xl text-black font-medium text-center'>Bentuk Geometri 3D</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
