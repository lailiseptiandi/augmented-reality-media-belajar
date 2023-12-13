export type TIntro = {
    category: TCategoryModel
    data: TModel[]
}

export type TModel = {
    name: string
    text: string
    image_url: string
    model: any
    scale: number
    ar_scale: string
    target: string
    color?: string
}

export type TCategoryModel = {
    name: string
    title: string
    image_url?: string
}