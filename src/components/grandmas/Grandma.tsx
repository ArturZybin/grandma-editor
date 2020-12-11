import * as React from 'react'
import { observer } from 'mobx-react-lite'
import Draggable from 'react-draggable'
import styled from 'styled-components'

import { GrandmaStore } from '../../store/GrandmaStore'
import { GrandmaSVG } from '../grandmaSVG'
import { DragInitiator } from '../DragInitiator'
import { Button } from '../Button'

const GrandmaContainer = styled.div<{ overlayed: boolean }>`
    position: absolute;

    width: 220px;
    padding: 10px;

    text-align: center;

    border: 1px solid black;
    border: 2px solid #f7db94;
    border-radius: 10px;
    background-color: #fdf5e0;
    box-shadow: 1px 4px 10px #f5d177;
    box-sizing: border-box;

    z-index: ${props => props.overlayed ? '2' : '1'};
`

const GrandmaName = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;

    margin: 10px 0;

    text-align: center;

    color: #622c6e;
`

const GrandmaDeleteButton = styled.button`
    font-size: 15px;

    position: absolute;
    top: 5px;
    left: 5px;

    cursor: pointer;

    border: none;
    outline: none;
    background: none;
`


interface Props {
    grandma: GrandmaStore
}


export const Grandma: React.FC<Props> = observer(({ grandma }) => {
    return (
        <Draggable
            axis="both"
            handle=".dragInitiator"
            defaultPosition={{
                x: Math.floor(Math.random() * (document.documentElement.clientWidth - 200)),
                y: Math.floor(Math.random() * (document.documentElement.clientHeight - 400))
            }}
        >
            <GrandmaContainer overlayed={grandma.globalStore.overlayedGrandma === grandma} onClick={grandma.setIsOverlayed} >
                <DragInitiator onMouseDown={grandma.setIsOverlayed} />
                <GrandmaDeleteButton onClick={grandma.delete}>✖</GrandmaDeleteButton>

                <GrandmaSVG
                    key={grandma.id}
                    type={grandma.type}
                    hairColor={grandma.hairColor}
                    eyesColor={grandma.eyesColor}
                    jacketColor={grandma.jacketColor}
                />

                <GrandmaName>{grandma.name}</GrandmaName>
                <GrandmaName>{grandma.age}</GrandmaName>

                <Button onClick={grandma.startEditing}>edit</Button>
            </GrandmaContainer>
        </Draggable>
    )
})