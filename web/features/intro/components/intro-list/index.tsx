'use client'

import Link from "next/link"

import Image from 'next/image'
import { HomeIcon, SoundIcon } from "components/icon"
import { dataCard } from "features/mode-card"
import { twMerge } from "tailwind-merge"
import { useMenuSound } from 'hooks'
import { Tab } from "@headlessui/react"
import { useState } from "react"
import { useRouter } from "next/router"
import { dataIntro2D, dataIntro3D } from "features/intro"
import { ButtonSound } from "components/button-sound"
import shapeSound from 'public/assets/sounds/contohbenda.wav';
import useSound from "use-sound"

export const IntroList = () => {

    const { query } = useRouter()

    const param = query.geometry as string ?? '' 

    const data = param === '2d' ? dataIntro2D : dataIntro3D

    const [tabIndex, setTabIndex] = useState(0)

    const [playSquare] = useSound(`/assets/sounds/penjelasan_segiempat.mp3`)
    const [playCircle] = useSound(`/assets/sounds/penjelasan_lingkaran.mp3`)
    const [playTriangle] = useSound(`/assets/sounds/penjelasan_segitiga.mp3`)
    const [playCube] = useSound(`/assets/sounds/penjelasan_kubus.mp3`)
    const [playBall] = useSound(`/assets/sounds/penjelasan_bola.mp3`)
    const [playTube] = useSound(`/assets/sounds/penjelasan_tabung.mp3`)

    useMenuSound(shapeSound)

    const onClickTab = (index: number) => {
        if(param === '2d'){
            if(index === 0){
                playSquare()
            }else if(index === 1){
                playCircle()
            }else if(index === 2){
                playTriangle()
            }
        }else{
            if(index === 0){
                playCube()
            }else if(index === 1){
                playBall()
            }else if(index === 2){
                playTube()
            }
        }
        
        setTabIndex(index)
    }

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
                    <h3 className="font-bold">Controh Benda</h3>
                </div>
                <ButtonSound/>
            </div>

            <div className="w-full max-w-md  mt-5 sm:px-0">
                <Tab.Group
                    onChange={onClickTab}
                >
                    <Tab.List className="flex space-x-1 rounded-xl bg-orange-900/20 p-1">
                        {data.map((item, index) => (
                            <Tab
                                key={item.category.name}
                                className={({ selected }) =>
                                    twMerge(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-orange-500 hover:bg-white/[0.12] hover:text-white',
                                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-orange-400 focus:outline-none focus:ring-2',
                                        tabIndex === index
                                            ? 'bg-white shadow focus:bg-white focus:text-orange-500'
                                            : 'text-orange-500 bg-neutral-500 hover:bg-white hover:text-white'
                                    )
                                }
                            >
                                {item.category.title}
                            </Tab>
                        ))}
                    </Tab.List>

                    <div 
                        className="grid grid-cols-3 gap-3 py-4" 
                    >
                        {data[tabIndex].data.map((item, index) => (
                            <div key={index} className="flex flex-col items-center justify-center  h-[120px] bg-white rounded-xl">
                                <Image
                                    src={item.image_url}
                                    width={50}
                                    height={50}
                                    alt={""}
                                />
                                <p className='text-md text-black font-medium text-center'>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </Tab.Group>
            </div>
        </div>
    )
}
