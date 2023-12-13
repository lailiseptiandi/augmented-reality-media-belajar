// @ts-nocheck
'use client'

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { HomeIcon, SoundIcon } from 'components/icon';
import { useRouter } from "next/router"
import useSound from 'use-sound'

import { data } from './data'

import 'aframe';
import 'mind-ar/dist/mindar-image-aframe.prod.js';
import { useGetVoiceModel } from 'features/mode-ar';
import { dataIntro2D, dataIntro3D } from "features/intro"


export const ModeArCamera = () => {

    const { query } = useRouter()

    const geometry = query.geometry as string ?? ''
    const category = query.category as string ?? ''
    const name = query.name as string ?? ''

    const dataCategory = geometry === '2d' ?
        dataIntro2D.find((item) => item.category.name === category)
        :
        dataIntro3D.find((item) => item.category.name === category)

    const data = dataCategory?.data.find((item) => item.name === name)

    const sceneRef = useRef<any>(null)

    const [isOpen, setIsOpen] = useState(false)

    const [play, {
        stop
    }] = useSound(`/assets/models/${data?.name}/sound.wav`)

    useEffect(() => {
        const sceneEl = sceneRef?.current ?? null
        if (sceneEl) {
            const arSystem = sceneEl?.systems["mindar-image-system"] ?? null
            sceneEl?.addEventListener('renderstart', () => {
                if (arSystem) {
                    arSystem?.start()
                }
            })
        }
    }, [])

    useEffect(() => {
        const target = document.querySelector(`#ar-id`)

        target?.addEventListener('targetFound', () => {
            setIsOpen(true)
            setTimeout(() => {
                play()
            }, 2000)
        })

        target?.addEventListener('targetLost', () => {
            setIsOpen(false)
            stop()
        })
    }, [play])

    return (
        <div>
            <div
                className="fixed top-0 left-0 right-0"
                style={{
                    zIndex: 1000
                }}
            >
                <div className="flex justify-between items-end text-neutral-500 bg-white py-5 px-5">
                    <Link
                        href="/"
                        className="text-neutral-500  hover:text-orange-500"
                    >
                        <HomeIcon />
                    </Link>

                    <div onClick={() => play()} className='cursor-pointer'>
                        <SoundIcon />
                    </div>
                </div>
            </div>

            <div className="container">
                {data && (
                    <a-scene ref={sceneRef} mindar-image={`imageTargetSrc: https://raw.githubusercontent.com/husnimubaraq/ar-app/main/public/assets/models/${data.name}/target.mind;uiScanning: no;`} color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
                        <a-assets>
                            <a-asset-item
                                id={`ar-model`}
                                src={`https://raw.githubusercontent.com/husnimubaraq/ar-app/main/public/assets/models/${data.name}/scene.gltf`}
                            ></a-asset-item>
                        </a-assets>

                        <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

                        <a-entity id="ar-id" mindar-image-target={`targetIndex: 0`}>
                            <a-gltf-model rotation="0 0 0 " position="0 -0.25 0" scale={data.ar_scale} src={`#ar-model`} animation-mixer></a-gltf-model>
                        </a-entity>
                    </a-scene>
                )}

                {isOpen && (
                    <div className='fixed top-[11%] left-10 right-10'>
                        <div className='bg-orange-500 rounded-md py-2 px-5'>
                            <h4 className='text-xl font-bold text-white text-center'>{data?.text}</h4>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
