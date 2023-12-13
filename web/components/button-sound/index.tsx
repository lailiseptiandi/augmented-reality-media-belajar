'use client'

import { SoundIcon } from "components/icon"

export const ButtonSound = () => {

    const onClick = () => {
        //@ts-ignore
        window.ReactNativeWebView.postMessage(
            JSON.stringify({
                type: 'btn-sound'
            })
        )
    }

    return (
        <button 
            id="btn-sound"
            onClick={onClick}
        >
            <SoundIcon />
        </button>
    )
}
