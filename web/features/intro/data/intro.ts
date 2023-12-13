import { TIntro } from 'features/intro'

//square
import chessboardGlb from 'public/assets/models/chessboard/scene.glb'
// import breadGlb from 'public/assets/models/bread/scene.glb'
import windowGlb from 'public/assets/models/window/scene.glb'
import paperGlb from 'public/assets/models/paper/scene.glb'
import frameGlb from 'public/assets/models/frame/scene.glb'

//circle
import clockGlb from 'public/assets/models/clock/scene.glb'
import coinGlb from 'public/assets/models/coin/scene.glb'
import platesGlb from 'public/assets/models/plates/scene.glb'
import wheelGlb from 'public/assets/models/wheel/scene.glb'
import cddvdGlb from 'public/assets/models/cddvd/scene.glb'

//triangle
import hangerGlb from 'public/assets/models/hanger/scene.glb'
import flagGlb from 'public/assets/models/flag/scene.glb'
import cautionGlb from 'public/assets/models/caution/scene.glb'

//cube
import diceGlb from 'public/assets/models/dice/scene.glb'
import rubricGlb from 'public/assets/models/rubric/scene.glb'
import cardboardBoxGlb from 'public/assets/models/cardboard_box/scene.glb'
import bathtubGlb from 'public/assets/models/bathtub/scene.glb'
import giftGlb from 'public/assets/models/gift/scene.glb'

//ball
import soccerBallGlb from 'public/assets/models/soccer-ball/scene.glb'
import marblesGlb from 'public/assets/models/marbles/scene.glb'
import baseballGlb from 'public/assets/models/baseball/scene.glb'
import basketballGlb from 'public/assets/models/basketball/scene.glb'

//tube
import canGlb from 'public/assets/models/can/scene.glb'
import gasGlb from 'public/assets/models/gas/scene.glb'
import bucketGlb from 'public/assets/models/bucket/scene.glb'
import bottleGlb from 'public/assets/models/bottle/scene.glb'
import cupGlb from 'public/assets/models/cup/scene.glb'

export const dataIntro2D: TIntro[] = [
    {
        category: {
            name: 'square',
            title: 'Segi 4',
            image_url: '/assets/images/square.png'
        },
        data: [
            {
                image_url: "/assets/models/chessboard/ori.png",
                model: chessboardGlb,
                text: 'Papan Catur',
                scale: 0.5,
                name: 'chessboard',
                target: 'target.mind',
                ar_scale: '0.5 0.5 0.5',
                color: '#7db6e1'
            },
            {
                image_url: "/assets/models/window/ori.png",
                model: windowGlb,
                text: 'Jendela',
                scale: 3,
                name: 'window',
                target: 'target.mind',
                ar_scale: '0.7 0.7 0.7',
                color: '#e7cc57'
            },
            {
                image_url: "/assets/models/paper/ori.png",
                model: paperGlb,
                text: 'Kertas Origami',
                scale: 0.1,
                name: 'paper',
                target: 'target.mind',
                ar_scale: '0.5 0.5 0.5',
                color: '#938bb0'
            },
            {
                image_url: "/assets/models/frame/ori.png",
                model: frameGlb,
                text: 'Figura',
                scale: 0.5,
                name: 'frame',
                target: 'target.mind',
                ar_scale: '0.08 0.08 0.08',
                color: '#7db6e1'
            }
        ]
    },
    {
        category: {
            name: 'circle',
            title: 'Lingkaran',
            image_url: '/assets/images/circle.png'
        },
        data: [
            {
                image_url: "/assets/models/clock/ori.png",
                model: clockGlb,
                text: 'Jam',
                scale: 3,
                name: 'clock',
                target: 'target.mind',
                ar_scale: '3 3 3',
                color: '#e7cc57'
            },
            {
                image_url: "/assets/models/coin/ori.png",
                model: coinGlb,
                text: 'Koin',
                scale: 0.4,
                name: 'coin',
                target: 'target.mind',
                ar_scale: '3 3 3',
                color: '#8ebb68'
            },
            {
                image_url: "/assets/models/plates/ori.png",
                model: platesGlb,
                text: 'Piring',
                scale: 0.02,
                name: 'plates',
                target: 'target.mind',
                ar_scale: '0.02 0.02 0.02',
                color: '#7db6e1'
            },
            {
                image_url: "/assets/models/wheel/ori.png",
                model: wheelGlb,
                text: 'Roda',
                scale: 0.4,
                name: 'wheel',
                target: 'target.mind',
                ar_scale: '0.09 0.09 0.09',
                color: '#8ebb68'
            },
            {
                image_url: "/assets/models/cddvd/ori.png",
                model: cddvdGlb,
                text: 'DVD',
                scale: 1,
                name: 'cddvd',
                target: 'target.mind',
                ar_scale: '0.5 0.5 0.5',
                color: '#da7bb3'
            }
        ]
    },
    {
        category: {
            name: 'triangle',
            title: 'Segitiga',
            image_url: '/assets/images/triangle.png'
        },
        data: [
            {
                image_url: "/assets/models/hanger/ori.png",
                model: hangerGlb,
                text: 'Hanger',
                scale: 0.05,
                name: 'hanger',
                target: 'target.mind',
                ar_scale: '0.05 0.05 0.05',
                color: '#e79353'
            },
            {
                image_url: "/assets/models/flag/ori.png",
                model: flagGlb,
                text: 'Bendera Segitiga',
                scale: 0.5,
                name: 'flag',
                target: 'target.mind',
                ar_scale: '5 5 5',
                color: '#938bb0'
            },
            {
                image_url: "/assets/models/caution/ori.png",
                model: cautionGlb,
                text: 'Rambu Lalu Lintas',
                scale: 0.5,
                name: 'caution',
                target: 'target.mind',
                ar_scale: '0.01 0.01 0.01',
                color: '#e7cc57'
            }
        ]
    }
]

export const dataIntro3D: TIntro[] = [
    {
        category: {
            name: 'cube',
            title: 'Kubus',
            image_url: '/assets/images/cube.png'
        },
        data: [
            {
                image_url: "/assets/models/dice/ori.png",
                model: diceGlb,
                text: 'Dadu',
                scale: 1,
                name: 'dice',
                target: 'target.mind',
                ar_scale: '1 1 1',
                color: '#e79353'
            },
            {
                image_url: "/assets/models/rubric/ori.png",
                model: rubricGlb,
                text: 'Rubrik',
                scale: 15,
                name: 'rubric',
                target: 'target.mind',
                ar_scale: '15 15 15',
                color: '#da7bb3'
            },
            {
                image_url: "/assets/models/cardboard_box/ori.png",
                model: cardboardBoxGlb,
                text: 'Kardus',
                scale: 0.5,
                name: 'cardboard_box',
                target: 'target.mind',
                ar_scale: '0.5 0.5 0.5',
                color: '#7db6e1'
            },
            {
                image_url: "/assets/models/bathtub/ori.png",
                model: bathtubGlb,
                text: 'Bak Mandi',
                scale: 0.5,
                name: 'bathtub',
                target: 'target.mind',
                ar_scale: '0.01 0.01 0.01',
                color: '#e7cc57'
            },
            {
                image_url: "/assets/models/gift/ori.png",
                model: giftGlb,
                text: 'Kotak Kado',
                scale: 0.5,
                name: 'gift',
                target: 'target.mind',
                ar_scale: '0.5 0.5 0.5',
                color: '#8ebb68'
            }
        ]
    },
    {
        category: {
            name: 'ball',
            title: 'Bola',
            image_url: '/assets/images/ball.png'
        },
        data: [
            {
                image_url: "/assets/models/soccer-ball/ori.png",
                model: soccerBallGlb,
                text: 'Bola Sepak',
                scale: 1,
                name: 'soccer-ball',
                target: 'target.mind',
                ar_scale: '1 1 1',
                color: '#938bb0'
            },
            {
                image_url: "/assets/models/marbles/ori.png",
                model: marblesGlb,
                text: 'Kelereng',
                scale: 15,
                name: 'marbles',
                target: 'target.mind',
                ar_scale: '15 15 15',
                color: '#da7bb3'
            },
            {
                image_url: "/assets/models/baseball/ori.png",
                model: baseballGlb,
                text: 'Bola Kasti',
                scale: 0.02,
                name: 'baseball',
                target: 'target.mind',
                ar_scale: '2.5 2.5 2.5',
                color: '#e7cc57'
            },
            {
                image_url: "/assets/models/basketball/ori.png",
                model: basketballGlb,
                text: 'Bola Basket',
                scale: 0.4,
                name: 'basketball',
                target: 'target.mind',
                ar_scale: '0.01 0.01 0.01',
                color: '#8ebb68'
            }
        ]
    },
    {
        category: {
            name: 'tube',
            title: 'Tabung',
            image_url: '/assets/images/tube.png'
        },
        data: [
            {
                image_url: "/assets/models/can/ori.png",
                model: canGlb,
                text: 'Kaleng',
                scale: 0.1,
                name: 'can',
                target: 'target.mind',
                ar_scale: '0.03 0.03 0.03',
                color: '#938bb0'
            },
            {
                image_url: "/assets/models/gas/ori.png",
                model: gasGlb,
                text: 'Tabung Gas',
                scale: 1,
                name: 'gas',
                target: 'target.mind',
                ar_scale: '1 1 1',
                color: '#8ebb68'
            },
            {
                image_url: "/assets/models/bucket/ori.png",
                model: bucketGlb,
                text: 'Ember',
                scale: 0.05,
                name: 'bucket',
                target: 'target.mind',
                ar_scale: '0.01 0.01 0.01',
                color: '#e7cc57'
            },
            {
                image_url: "/assets/models/bottle/ori.png",
                model: bottleGlb,
                text: 'Botol Minum',
                scale: 0.15,
                name: 'bottle',
                target: 'target.mind',
                ar_scale: '0.15 0.15 0.15',
                color: '#da7bb3'
            },
            {
                image_url: "/assets/models/cup/ori.png",
                model: cupGlb,
                text: 'Cangkir',
                scale: 0.5,
                name: 'cup',
                target: 'target.mind',
                ar_scale: '0.5 0.5 0.5',
                color: '#8ebb68'
            },
        ]
    }
]