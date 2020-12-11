import { observer } from 'mobx-react-lite'
import * as React from 'react'
import Draggable from 'react-draggable'
import styled from 'styled-components'
import { GrandmaStore } from '../../store/GrandmaStore'
import { DragInitiator } from '../DragInitiator'
import { GrandmaSVG } from '../grandmaSVG/GrandmaSVG'

const GrandmaContainer = styled.div`
    width: 200px;
`


interface Props {
    grandma: GrandmaStore
}


export const Grandma: React.FC<Props> = observer(({ grandma }) => {
    return (
        <Draggable
            axis="both"
            handle=".dragInitiator"
        >
            <GrandmaContainer>
                <DragInitiator />
                <GrandmaSVG
                    key={grandma.id}
                    type={grandma.type}
                    hairColor={grandma.hairColor}
                    eyesColor={grandma.eyesColor}
                    jacketColor={grandma.jacketColor}
                />
            </GrandmaContainer>
        </Draggable>
    )
})