'use client'


import { XIcon } from "components/icon"
import { Footer } from "components/layouts"
import { useCustomSound } from "hooks"
import Link from "next/link"
import { useRouter } from "next/router"

export const InformationWrapper = () => {
    const { push } = useRouter()
    
    useCustomSound()

    return (
        <div className="">
            <div className="relative border-2 border-neutral-400 h-[70vh] mt-10">
                <div className="absolute -top-5 left-0 right-0">
                    <div className="bg-neutral-200 py-2 rounded-full text-center mx-[10%] font-bold">
                        <label>INFORMASI</label>
                    </div>
                </div>

                <div className="flex flex-col mt-[20%] items-center justify-center px-5">
                    <h5 className="text-lg font-bold text-center">PERINGATAN</h5>
                    <p className="text-center mt-8">Saat menggunakan aplikasi ini harap waspada terhadap lingkungan sekitar dan bahaya fisik Anda. Disarankan agar anak kecil mendapat pengawasan orang dewasa saat menggunakan Augmented Reality.</p>
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
