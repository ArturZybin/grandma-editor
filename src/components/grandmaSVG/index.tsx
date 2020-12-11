import * as React from 'react'
import { GrandmaSVG1 } from './GrandmaSVG1'
import { GrandmaSVG2 } from './GrandmaSVG2'
import { GrandmaSVG3 } from './GrandmaSVG3'
import { GrandmaSVG4 } from './GrandmaSVG4'

interface Props {
    type: 1 | 2 | 3 | 4
    hairColor: string
    eyesColor: string
    jacketColor: string
}


export const GrandmaSVG: React.FC<Props> = ({ type, hairColor, eyesColor, jacketColor }) => {
    switch (type) {
        case 1:
            return <GrandmaSVG1 hairColor={hairColor} eyesColor={eyesColor} jacketColor={jacketColor} />
        case 2:
            return <GrandmaSVG2 hairColor={hairColor} eyesColor={eyesColor} jacketColor={jacketColor} />
        case 3:
            return <GrandmaSVG3 hairColor={hairColor} eyesColor={eyesColor} jacketColor={jacketColor} />
        case 4:
            return <GrandmaSVG4 hairColor={hairColor} eyesColor={eyesColor} jacketColor={jacketColor} />
        default:
            return <GrandmaSVG1 hairColor={hairColor} eyesColor={eyesColor} jacketColor={jacketColor} />
    }
}