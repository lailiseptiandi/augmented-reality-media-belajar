'use client'


import { XIcon } from "components/icon"
import { Footer } from "components/layouts"

export const AboutWrapper = () => {
    return (
        <div className="">
            <div className="relative border-2 border-neutral-400 h-[70vh] mt-10">
                <div className="absolute -top-5 left-0 right-0">
                    <div className="bg-neutral-200 py-2 rounded-full text-center mx-[10%] font-bold">
                        <label>TENTANG</label>
                    </div>
                </div>

                <div className="flex flex-col mt-[20%]">
                    <div className="flex flex-col items-center">
                        <div className="h-[100px] w-[100px] rounded-full bg-neutral-200">

                        </div>
                    </div>


                    <div className="mt-10 px-[20%]">
                        <h5 className="font-bold text-center">BIODATA</h5>

                        <div className="flex flex-col gap-y-2 mt-5">
                            <div className="flex items-center justify-between">
                                <label className="w-[40%]">Nama</label>
                                <div className="w-[50%]">
                                    <label>: Irma Noviana</label>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <label className="w-[40%]">Prodi</label>
                                <div className="w-[50%]">
                                    <label>: Informatika</label>
                                </div>
                            </div>
                        </div>
                    </div>
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
