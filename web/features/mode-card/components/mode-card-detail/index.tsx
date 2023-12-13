'use client'
import Image from 'next/image'
import { HomeIcon, SoundIcon } from "components/icon"
import { dataCard } from "features/mode-card"
import Link from "next/link"
import { twMerge } from "tailwind-merge"
import { useRouter } from 'next/router'
import { Button } from 'components/base'
import { dataIntro2D, dataIntro3D } from 'features/intro'
import { ButtonSound } from 'components/button-sound'

export const ModeCardDetail= () => {
    const { query } = useRouter()

    const geometry = query.geometry as string ?? '' 
    const category = query.category as string ?? '' 
    const name = query.name as string ?? ''

    const dataCategory = geometry === '2d' ?
        dataIntro2D.find((item) => item.category.name === category)
        :
        dataIntro3D.find((item) => item.category.name === category)

    const detail = dataCategory?.data.find((item) => item.name === name)

    const onDownload = () => {
        var element = document.createElement("a");
        element.setAttribute("href", `/assets/models/${detail?.name}/card.pdf`);
        element.setAttribute("download", `${detail?.name}.pdf` ?? '');
        element.style.display = "none";
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

    return (
        <div className="">
            <div className="flex justify-between items-end text-neutral-500">
                <Link
                    href="/"
                    className="text-neutral-500  hover:text-orange-500"
                >
                    <HomeIcon />
                </Link>
                <ButtonSound/>
            </div>

            <div className="relative h-[80vh] mt-5">
                <div
                    className={twMerge(
                        'p-2 rounded-md'
                    )}
                    style={{
                        backgroundColor: detail?.color
                    }}
                >
                    <div
                        className='bg-white rounded-t-md px-2 w-full h-[70vh] flex flex-col items-center justify-center'
                    >
                        <Image
                            src={detail?.image_url ?? ''}
                            width={200}
                            height={500}
                            className='object-cover'
                            alt={""}
                        />
                    </div>

                    <div className='flex flex-col items-center'>
                        <label className='text-md text-white font-bold my-2 text-center'>{detail?.text}</label>
                    </div>
                </div>

                <div className='flex flex-col items-center mt-5'>
                    <Button
                        colorScheme='secondary'
                        onClick={onDownload}
                    >
                        Download
                    </Button>
                </div>
            </div>
        </div>
    )
}
