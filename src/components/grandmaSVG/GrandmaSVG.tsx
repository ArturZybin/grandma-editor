import { observer } from 'mobx-react-lite'
import * as React from 'react'
import { GrandmaSVG1 } from './GrandmaSVG1'

interface Props {
    type: 1 | 2 | 3 | 4
    hairColor: string
    eyesColor: string
    jacketColor: string
}


export const GrandmaSVG: React.FC<Props> = observer(({ type, hairColor, eyesColor, jacketColor }) => {
    switch (type) {
        case 1:
            return <GrandmaSVG1 hairColor={hairColor} eyesColor={eyesColor} jacketColor={jacketColor} />
        case 2:
            return <GrandmaSVG1 hairColor={hairColor} eyesColor={eyesColor} jacketColor={jacketColor} />
        case 3:
            return <GrandmaSVG1 hairColor={hairColor} eyesColor={eyesColor} jacketColor={jacketColor} />
        case 4:
            return <GrandmaSVG1 hairColor={hairColor} eyesColor={eyesColor} jacketColor={jacketColor} />
        default:
            return <GrandmaSVG1 hairColor={hairColor} eyesColor={eyesColor} jacketColor={jacketColor} />
    }
})