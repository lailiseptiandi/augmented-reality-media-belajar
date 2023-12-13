export type TModeGame = {
    level: string
    title: string
    game: TGame[]
}

export type TGame = {
    image_url: string
    model: any
    text: string
    scale: number
    name?: string
}