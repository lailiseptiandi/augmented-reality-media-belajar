'use client'


import { XIcon } from "components/icon"
import { Footer } from "components/layouts"

export const InformationWrapper = () => {
    return (
        <div className="">
            <div className="relative border-2 border-neutral-400 h-[70vh] mt-10">
                <div className="absolute -top-5 left-0 right-0">
                    <div className="bg-neutral-200 py-2 rounded-full text-center mx-[10%] font-bold">
                        <label>INFORMASI</label>
                    </div>
                </div>

                <div className="flex flex-col mt-[20%]">
                    
                </div>

                <div className="absolute -bottom-4 left-0 right-0 flex justify-center">
                    <div className="rounded-full text-white bg-neutral-500 w-fit flex flex-col items-center">
                        <XIcon width={30} height={30} />
                    </div>
                </div>
            </div>

            <Footer disabled />
        </div>
    )
}
