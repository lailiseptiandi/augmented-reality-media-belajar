// @ts-nocheck
'use client'

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { HomeIcon, SoundIcon } from 'components/icon';

import { data } from './data'

import 'aframe';
import 'mind-ar/dist/mindar-image-aframe.prod.js';

export const ModeArWrapper = () => {

  const sceneRef = useRef<any>(null)
  
  const [name, setName] = useState('')

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
    for(let item of data){
      const target = document.querySelector(`#${item.name}-target`)

      target?.addEventListener('targetFound', () => {
        setName(item.title.toUpperCase())
      })

      target?.addEventListener('targetLost', () => {
        setName('')
      })
    }
  }, [])


  return (
    <div>
      <div className="flex justify-between items-end text-neutral-500">
        <Link
          href="/"
          className="text-neutral-500  hover:text-orange-500"
        >
          <HomeIcon />
        </Link>
        <SoundIcon />
      </div>

      <div className="container">
        <a-scene ref={sceneRef} mindar-image="imageTargetSrc: ./targets.mind;uiScanning: no;" color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
          <a-assets>
            {data.map((item) => (
              <a-asset-item 
                id={`${item.name}-model`} src={item.url}
              ></a-asset-item>
            ))}
          </a-assets>

          <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

          {data.map((item, index) => (
            <a-entity id={`${item.name}-target`} mindar-image-target={`targetIndex: ${index}`}>
              <a-gltf-model rotation="0 0 0 " position="0 -0.25 0" scale={item.scale} src={`#${item.name}-model`} animation-mixer></a-gltf-model>
            </a-entity>
          ))}
        </a-scene>

        {name && (
          <div className='fixed top-[11%] left-10 right-10'>
            <div className='bg-orange-500 rounded-md py-2 px-5'>
              <h4 className='text-xl font-bold text-white text-center'>{name}</h4>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
