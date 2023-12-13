'use client'

import Link from "next/link"

import { HomeIcon, SoundIcon } from "components/icon"
import { ModeGamePlayModel, TGame, dataGame2D, dataGame3D } from "features/mode-game"
import { Tab } from "@headlessui/react"
import { twMerge } from "tailwind-merge"
import { useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Image from "next/image"
import { SuccessPopup } from "components/success-popup"
import { FailedPopup } from "components/failed-popup"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useGetVoiceModel } from "features/mode-ar"
import { useRouter } from "next/router"
import useSound from "use-sound"
import { useMenuSound } from "hooks"
import geo2dSound from 'public/assets/sounds/geometri2d.wav';
import geo3dSound from 'public/assets/sounds/geometri3d.wav';

export const ModeGamePlay = () => {

    const {
        listening,
        finalTranscript,
    } = useSpeechRecognition();

    const { query } = useRouter()

    const [isOpen, setIsOpen] = useState(false)
    const [status, setStatus] = useState('idle')

    const [tabIndex, setTabIndex] = useState(0)
    const [gameIndex, setGameIndex] = useState(0)

    const param = query.geometry as string ?? ''

    const dataGame = param === '2d' ? dataGame2D : dataGame3D

    const data = dataGame.find((item) => item.level === dataGame[tabIndex].level)

    const [play] = useSound(`/assets/sounds/pertanyaan.mp3`)

    const onNext = () => {
        if (data) {
            if (data.game.length - 1 === gameIndex) {
                setTabIndex(tabIndex + 1)
                setGameIndex(0)
            } else {
                setGameIndex(gameIndex + 1)
            }
        }
        
        setStatus('idle')

        setTimeout(() => {
            play()
        }, 2000)
    }

    const onMic = () => {
        if (listening) {
            SpeechRecognition.stopListening()
        } else {
            SpeechRecognition.startListening()
        }
    }

    useEffect(() => {
        if(data){
            play()
        }
    }, [play])

    useEffect(() => {
        if (data && finalTranscript) {

            if (finalTranscript.toLowerCase() === data.title.toLowerCase()) {
                setStatus('success')

                setTimeout(() => {
                    setStatus('')
                }, 3000)
            } else {
                setStatus('failed')

                setTimeout(() => {
                    setStatus('idle')
                }, 3000)
            }

        }
    }, [finalTranscript])

    useMenuSound(param === '2d' ? geo2dSound : geo3dSound)

    return (
        <div className="h-[100vh]">
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
                <div onClick={() => play()} className='cursor-pointer'>
                    <SoundIcon />
                </div>
            </div>

            <div className="w-full max-w-md px-2 mt-5 sm:px-0">
                <Tab.Group
                    onChange={(index) => {
                        if (tabIndex < index) {

                        } else {
                            setTabIndex(index)
                            setGameIndex(0)
                        }
                    }}
                >
                    {/* <Tab.List className="flex space-x-1 rounded-xl bg-orange-900/20 p-1">
                        {dataGame.map((item, index) => (
                            <Tab
                                key={item.level}
                                disabled={tabIndex < index ? true : false}
                                className={({ selected }) =>
                                    twMerge(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-orange-700',
                                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-orange-400 focus:outline-none focus:ring-2',
                                        tabIndex < index && 'bg-neutral-300',
                                        tabIndex === index
                                            ? 'bg-white shadow'
                                            : 'text-orange-500 hover:bg-white/[0.12] hover:text-white'
                                    )
                                }
                            >
                                {item.title}
                            </Tab>
                        ))}
                    </Tab.List> */}

                    <div className="relative h-[80vh] mt-5">
                        <Canvas>
                            <group>
                                {data && (
                                    <ModeGamePlayModel
                                        glb={data.game[gameIndex].model}
                                        scale={data.game[gameIndex].scale}
                                    />
                                )}
                            </group>

                            <OrbitControls />

                            <Environment
                                preset="apartment"
                                background
                                blur={0.65}
                            />
                        </Canvas>
                        {status === 'idle' ? (
                            <div
                                onClick={onMic}
                                className="bg-neutral-200 rounded-md py-2 w-[50%] hover:bg-orange-500 hover:text-white text-sm text-center cursor-pointer absolute bottom-[5%] left-0 right-0 mx-auto"
                            >
                                <div className="flex items-center justify-center gap-x-2 hover:text-white">
                                    <Image
                                        src={
                                            listening ? '/assets/images/mic-on.png' : '/assets/images/mic.png'
                                        }
                                        width={20}
                                        height={20}
                                        alt={""}
                                    />
                                </div>
                            </div>
                        ) : (
                            (data && status === '') && data.game.length - 1 === gameIndex ? (
                                <div
                                    onClick={dataGame.length - 1 === tabIndex ? undefined : onNext}
                                    className="bg-neutral-200 rounded-md py-2 w-[50%] hover:bg-orange-500 hover:text-white text-sm text-center cursor-pointer absolute bottom-[5%] left-0 right-0 mx-auto"
                                >
                                    Selesai
                                </div>
                            ) : (
                                <div
                                    onClick={onNext}
                                    className="bg-neutral-200 rounded-md py-2 w-[50%] hover:bg-orange-500 hover:text-white text-sm text-center cursor-pointer absolute bottom-[5%] left-0 right-0 mx-auto"
                                >
                                    {data && data.game.length - 1 === gameIndex ? 'Selesai' : 'Lanjut'}
                                </div>
                            )
                        )}

                        {status === 'failed' && (
                            <FailedPopup />
                        )}

                        {status === 'success' && (
                            <SuccessPopup />
                        )}

                    </div>
                </Tab.Group>
            </div>
        </div>
    )
}
