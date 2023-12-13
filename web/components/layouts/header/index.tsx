'use client'

import Link from "next/link"
import { twMerge } from "tailwind-merge"

import { HelpIcon, InfoIcon, SettingIcon } from "components/icon"

import { TProps } from "./type"

export const Header = (props: TProps) => {
    const { title } = props

    return (
        <div className="fixed top-0 left-0 right-0">
            <div className="flex items-center gap-x-4 justify-center ">
                <Link
                    href='/about'
                    className={twMerge(
                        "text-black  hover:text-orange-500",
                    )}
                >
                    <InfoIcon />
                </Link>
                <label className="font-bold text-xl ml-3">{title}</label>
            </div>
        </div>
    )
}
