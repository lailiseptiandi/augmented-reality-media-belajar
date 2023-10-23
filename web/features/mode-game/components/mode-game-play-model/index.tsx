'use client'

import { useLoader } from "@react-three/fiber";
import { TProps } from "./type"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useGLTF } from "@react-three/drei";

export const ModeGamePlayModel = (props: TProps) => {
    const { glb, scale } = props

    const gltf = useGLTF(glb) as any

    return (
        <>
            <primitive object={gltf.scene} scale={scale} />
        </>
    );
}
