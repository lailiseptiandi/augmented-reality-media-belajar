'use client'

import Link from "next/link"

import Image from 'next/image'
import { HomeIcon, SoundIcon } from "components/icon"
import { dataCard } from "features/mode-card"
import { twMerge } from "tailwind-merge"
import { useMenuSound } from 'hooks'
import { useRouter } from "next/router"
import { dataIntro2D, dataIntro3D } from "features/intro"
import { ButtonSound } from "components/button-sound"
import geo2dSound from 'public/assets/sounds/geometri2d.wav';
import geo3dSound from 'public/assets/sounds/geometri3d.wav';

export const ModeArCategory = () => {

    const { query } = useRouter()

    const param = query.geometry as string ?? '' 

    const data = param === '2d' ? dataIntro2D : dataIntro3D

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
                <ButtonSound/>
            </div>

            <div className="flex flex-col items-center justify-center h-[60vh] gap-y-10 mt-20">
                {data.map((item, index) => (
                    <Link
                        key={index}
                        href={`${param}/category/${item.category.name}`}
                        className="flex flex-col items-center rounded-md py-2 w-[80%] hover:text-orange-500 text-sm text-center"
                    >
                        <Image
                            src={item.category.image_url ?? ""}
                            width={70}
                            height={70}
                            alt={""}
                        />
                        <p className='text-xl text-black font-medium text-center'>{item.category.title}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}
