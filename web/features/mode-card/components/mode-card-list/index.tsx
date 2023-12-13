'use client'
import Image from 'next/image'
import { HomeIcon, SoundIcon } from "components/icon"
import { dataCard } from "features/mode-card"
import Link from "next/link"
import { twMerge } from "tailwind-merge"
import { useCustomSound } from 'hooks'
import { useRouter } from 'next/router'
import { dataIntro2D, dataIntro3D } from 'features/intro'
import useSound from 'use-sound'
import { useEffect } from 'react'

export const ModeCardList = () => {

    const { query } = useRouter()

    const geometry = query.geometry as string ?? '' 
    const category = query.category as string ?? '' 

    const data = geometry === '2d' ? 
        dataIntro2D.find((item) => item.category.name === category)
            : 
        dataIntro3D.find((item) => item.category.name === category)

    const [playSquare] = useSound(`/assets/sounds/segiempat.wav`)
    const [playCircle] = useSound(`/assets/sounds/lingkaran.mp3`)
    const [playTriangle] = useSound(`/assets/sounds/segitiga.wav`)
    const [playCube] = useSound(`/assets/sounds/kubus.mp3`)
    const [playBall] = useSound(`/assets/sounds/bola.mp3`)
    const [playTube] = useSound(`/assets/sounds/tabung.wav`)

    useEffect(() => {
        if(category === 'square'){
            playSquare()
        }else if(category === 'circle'){
            playCircle()
        }else if(category === 'triangle'){
            playTriangle()
        }else if(category === 'cube'){
            playCube()
        }else if(category === 'ball'){
            playBall()
        }else if(category === 'tube'){
            playTube()
        }
    }, [
        category,
        playSquare,
        playCircle,
        playTriangle,
        playCube,
        playBall,
        playTube
    ])

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
                    <h3 className="font-bold capitalize">{data && data.category.title}</h3>
                </div>
                <div id="btn-sound">
                    <SoundIcon />
                </div>
            </div>

            <div className="relative h-[80vh] mt-5">
                <div className="grid grid-cols-3 gap-2">
                    {data?.data.map((item, index) => (
                        <Link
                            key={index.toString()}
                            href={`/mode-card/${geometry}/${category}/${item.name}`}
                            className={twMerge(
                                'p-2 rounded-md cursor-pointer border border-white hover:border-orange-500'
                            )}
                            style={{
                                backgroundColor: item.color
                            }}
                        >
                            <div
                                className='bg-white rounded-t-md px-2 w-full h-[150px] flex flex-col items-center justify-center'
                            >
                                <Image
                                    src={item.image_url}
                                    width={200}
                                    height={200}
                                    className='object-cover'
                                    alt={""}
                                />
                            </div>

                            <div className='flex flex-col items-center'>
                                <label className='text-md text-white font-bold my-2 text-center'>{item.text}</label>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
