'use client'

import Image from "next/image"
import { XIcon } from "components/icon"
import { Footer } from "components/layouts"
import { WhatsappShareButton } from 'react-share'
import useSound from 'use-sound';
import sound from 'public/assets/sounds/sound.mp3';
import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

export const SettingWrapper = () => {
    const { push } = useRouter()

    return (
        <div className="">
            <div className="relative border-2 border-neutral-400 h-[70vh] mt-10">
                <div className="absolute -top-5 left-0 right-0">
                    <div className="bg-neutral-200 py-2 rounded-full text-center mx-[10%] font-bold">
                        <label>PENGATURAN</label>
                    </div>
                </div>

                <div className="flex flex-col mt-[20%]">
                    <div className="flex items-center justify-around mt-[20%]">
                        <div 
                            onClick={() => {
                                //@ts-ignore
                                window.ReactNativeWebView.postMessage(
                                    JSON.stringify({
                                        type: 'btn-sound-inactive'
                                    })
                                )
                            }}
                            className="h-[50px] w-[50px] border border-neutral-400 cursor-pointer hover:bg-orange-500 rounded-full flex flex-col items-center justify-center bg-neutral-300"
                        >
                            <Image
                                src='/assets/images/music-note.png'
                                width={20}
                                height={20}
                                alt={""}
                            />
                        </div>

                        <WhatsappShareButton
                            url="https://drive.google.com/file/d/19lj5y9jirP3L_RkJeEy7WS3IcW05i6BX/view?usp=sharing" 
                        >
                            <div
                                className="h-[50px] w-[50px] border border-neutral-400 cursor-pointer hover:bg-orange-500 rounded-full flex flex-col items-center justify-center bg-neutral-300"
                            >
                                <Image
                                    src='/assets/images/share.png'
                                    width={20}
                                    height={20}
                                    alt={""}
                                />
                            </div>
                        </WhatsappShareButton>
                    </div>
                </div>

                <div className="absolute -bottom-4 left-0 right-0 flex justify-center">
                    <Link 
                        href="/"
                        className="rounded-full text-white bg-neutral-500 w-fit flex flex-col items-center">
                        <XIcon width={30} height={30} />
                    </Link>
                </div>
            </div>

            <Footer disabled />
        </div>
    )
}
