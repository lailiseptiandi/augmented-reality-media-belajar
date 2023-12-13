import useSound from "use-sound"
import { useEffect } from "react";

export const useMenuSound = (sound: string) => {
    const [play, exposedData] = useSound(sound)

    useEffect(() => {
        play()

        return () => {
            exposedData.stop()
        }
    }, [play])
}