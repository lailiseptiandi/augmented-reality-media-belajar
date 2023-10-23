'use client'

import Link from "next/link"
import { twMerge } from "tailwind-merge"

import { HelpIcon, InfoIcon, SettingIcon } from "components/icon"

import { TProps } from "./type"

export const Footer = (props: TProps) => {
    const { disabled } = props

    return (
        <div className="mt-20 fixed bottom-10 left-0 right-0">
            <div className="flex items-center gap-x-4 justify-center ">
                <Link
                    href='/about'
                    className={twMerge(
                        "text-neutral-500  hover:text-orange-500",
                        disabled && "text-neutral-200"
                    )}
                >
                    <InfoIcon />
                </Link>
                <Link
                    href='/guide'
                    className={twMerge(
                        "text-neutral-500  hover:text-orange-500",
                        disabled && "text-neutral-200"
                    )}
                >
                    <HelpIcon />
                </Link>
                <Link
                    href='/setting'
                    className={twMerge(
                        "text-neutral-500  hover:text-orange-500",
                        disabled && "text-neutral-200"
                    )}
                >
                    <SettingIcon />
                </Link>
                <Link
                    href='/information'
                    className={twMerge(
                        "text-neutral-500  hover:text-orange-500",
                        disabled && "text-neutral-200"
                    )}
                >
                    <InfoIcon />
                </Link>
            </div>
        </div>
    )
}
