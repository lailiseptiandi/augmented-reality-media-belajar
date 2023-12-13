
import { data } from 'features/mode-ar'
import useSound from 'use-sound'

// import cardboardBoxMp3 from 'assets/models/cardboard_box/voice.mp3'
// import cardboardLowpolyMp3 from 'public/assets/models/cardboard_lowpoly/voice.mp3'
// import clockMp3 from 'assets/models/clock/voice.mp3'
// import bookMp3 from 'public/assets/models/book/voice.mp3'
// import kiteMp3 from 'public/assets/models/kite/voice.mp3'
// import soccerBallMp3 from 'public/assets/models/soccer-ball/voice.mp3'
// import whiteboardMp3 from 'public/assets/models/whiteboard/voice.mp3'
// import marblesMp3 from 'public/assets/models/marbles/voice.mp3'
// import smartphoneMp3 from 'public/assets/models/smartphone/voice.mp3'
// import bucketMp3 from 'public/assets/models/bucket/voice.mp3'
// import wheelMp3 from 'public/assets/models/wheel/voice.mp3'
// import diceMp3 from 'public/assets/models/dice/voice.mp3'
// import balloonsMp3 from 'public/assets/models/balloons/voice.mp3'
// import canMp3 from 'public/assets/models/can/voice.mp3'
// import platesMp3 from 'public/assets/models/plates/voice.mp3'
// import eraserMp3 from 'public/assets/models/eraser/voice.mp3'
// import radioMp3 from 'public/assets/models/radio/voice.mp3'
// import cupMp3 from 'public/assets/models/cup/voice.mp3'
// import hangerMp3 from 'public/assets/models/hanger/voice.mp3'
// import chairMp3 from 'public/assets/models/chair/voice.mp3'
// import bellMp3 from 'public/assets/models/bell/voice.mp3'
// import fanMp3 from 'public/assets/models/fan/voice.mp3'
// import bottleMp3 from 'public/assets/models/bottle/voice.mp3'
// import glassBowlMp3 from 'public/assets/models/glass_bowl/voice.mp3'
// import conicalHatMp3 from 'public/assets/models/conical_hat/voice.mp3'
// import gasMp3 from 'public/assets/models/gas/voice.mp3'
// import rubricMp3 from 'public/assets/models/rubric/voice.mp3'

export const useGetVoiceModel = (model: string) => {
    const [cardboard_box] = useSound("assets/models/cardboard_box/voice.mp3")
    const [cardboard_lowpoly] = useSound("assets/models/cardboard_lowpoly/voice.mp3")
    const [clock] = useSound("assets/models/clock/voice.mp3")
    const [book] = useSound("assets/models/book/voice.mp3")
    const [kite] = useSound("assets/models/kite/voice.mp3")
    const [ball] = useSound("assets/models/soccer-ball/voice.mp3")
    const [whiteboard] = useSound("assets/models/whiteboard/voice.mp3")
    const [marbles] = useSound("assets/models/marbles/voice.mp3")
    const [smartphone] = useSound("assets/models/smartphone/voice.mp3")
    const [bucket] = useSound("assets/models/bucket/voice.mp3")
    const [wheel] = useSound("assets/models/wheel/voice.mp3")
    const [dice] = useSound("assets/models/dice/voice.mp3")
    const [balloons] = useSound("assets/models/balloons/voice.mp3")
    const [can] = useSound("assets/models/can/voice.mp3")
    const [plates] = useSound("assets/models/plates/voice.mp3")
    const [eraser] = useSound("assets/models/eraser/voice.mp3")
    const [radio] = useSound("assets/models/radio/voice.mp3")
    const [cup] = useSound("assets/models/cup/voice.mp3")
    const [hanger] = useSound("assets/models/hanger/voice.mp3")
    const [chair] = useSound("assets/models/chair/voice.mp3")
    const [bell] = useSound("assets/models/bell/voice.mp3")
    const [fan] = useSound("assets/models/fan/voice.mp3")
    const [bottle] = useSound("assets/models/bottle/voice.mp3")
    const [glass_bowl] = useSound("assets/models/glass_bowl/voice.mp3")
    const [conical_hat] = useSound("assets/models/conical_hat/voice.mp3")
    const [gas] = useSound("assets/models/gas/voice.mp3")
    const [rubric] = useSound("assets/models/rubric/voice.mp3")

    const onPlay = () => {
        switch(model) {
            case 'cardboard_box': {
                cardboard_box()
                break
            }
            case 'cardboard_lowpoly': {
                cardboard_lowpoly()
                break
            }
            case 'book': {
                book()
                break
            }
            case 'clock': {
                clock()
                break
            }
            case 'kite': {
                kite()
                break
            }
            case 'soccer-ball': {
                ball()
                break
            }
            case 'whiteboard': {
                whiteboard()
                break
            }
            case 'marbles': {
                marbles()
                break
            }
            case 'smartphone': {
                smartphone()
                break
            }
            case 'bucket': {
                bucket()
                break
            }
            case 'wheel': {
                wheel()
                break
            }
            case 'dice': {
                dice()
                break
            }
            case 'balloons': {
                balloons()
                break
            }
            case 'can': {
                can()
                break
            }
            case 'plates': {
                plates()
                break
            }
            case 'eraser': {
                eraser()
                break
            }
            case 'radio': {
                radio()
                break
            }
            case 'cup': {
                cup()
                break
            }
            case 'hanger': {
                hanger()
                break
            }
            case 'chair': {
                chair()
                break
            }
            case 'bell': {
                bell()
                break
            }
            case 'fan': {
                fan()
                break
            }
            case 'bottle': {
                bottle()
                break
            }
            case 'glass_bowl': {
                glass_bowl()
                break
            }
            case 'conical_hat': {
                conical_hat()
                break
            }
            case 'gas': {
                gas()
                break
            }
            case 'rubric': {
                rubric()
                break
            }
            default: {
                break
            }
        }
    }

    return {
        play: onPlay
    }
}