'use client'

import Image from 'next/image'


export const SuccessPopup = () => {

    return (
        <div
            className="absolute top-0 left-0 right-0 bottom-0"
            style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)'
            }}
        >
            <div
                className="flex flex-col items-center justify-center h-full"
            >
                <Image
                    src='/assets/images/check.png'
                    width={100}
                    height={100}
                    alt={""}
                />
                <label className='text-2xl text-white font-medium mt-3'>Benar</label>
            </div>
        </div>
    )
}
